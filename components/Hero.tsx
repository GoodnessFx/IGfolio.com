import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import jsPDF from "jspdf";

// X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = async () => {
    try {
      // Try jpg, then png; if neither available, fall back to static PDF
      const tryPaths = [
        "/resume.jpg",
        "/resume.jpeg",
        "/resume.png",
      ];

      let imgPath: string | null = null;
      for (const p of tryPaths) {
        const res = await fetch(p, { method: "HEAD" });
        if (res.ok) {
          imgPath = p;
          break;
        }
      }

      if (!imgPath) {
        // Fallback: download existing PDF
        const a = document.createElement("a");
        a.href = "/resume.pdf";
        a.download = "IG Cv.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imgPath;
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      // Create PDF sized to the image aspect on A4 portrait
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgCanvas = document.createElement("canvas");
      imgCanvas.width = img.width;
      imgCanvas.height = img.height;
      const ctx = imgCanvas.getContext("2d");
      if (ctx) ctx.drawImage(img, 0, 0);
      const dataUrl = imgCanvas.toDataURL("image/jpeg", 0.95);

      // Fit image within page while preserving aspect ratio
      const imgAspect = img.width / img.height;
      const pageAspect = pageWidth / pageHeight;
      let renderWidth = pageWidth;
      let renderHeight = pageHeight;
      if (imgAspect > pageAspect) {
        renderHeight = renderWidth / imgAspect;
      } else {
        renderWidth = renderHeight * imgAspect;
      }
      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(dataUrl, "JPEG", x, y, renderWidth, renderHeight);
      pdf.save("IG Cv.pdf");
    } catch (e) {
      // On any error, gracefully fall back to static PDF
      const a = document.createElement("a");
      a.href = "/resume.pdf";
      a.download = "IG Cv.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: XIcon, href: "https://x.com/IGoodnessIyamah", label: "X (Twitter)" },
    { icon: Mail, href: "goodnessiyamah1@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-start relative px-4 sm:px-6 pt-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs sm:text-sm text-zinc-500 mb-3 sm:mb-4 tracking-widest uppercase"
          >
            Mobile & Web App Developer
          </motion.div>
          
          <div className="space-y-1 sm:space-y-2 mb-5 sm:mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]"
            >
              With a Passion to build
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]"
            >
              
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
            >
              what is needed
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-3 sm:mb-4"
          >
            Developing seamless mobile and web solutions with precision, performance, and purpose  <br></br>  ...to see how much of a footprint I can leave behind on Earth before I leave.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="flex items-center gap-3 mb-5 sm:mb-6"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Button
              onClick={downloadResume}
              size="sm"
              className="bg-white text-zinc-950 hover:bg-zinc-200"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500" />
        </motion.div>
      </motion.button>
    </section>
  );
}
