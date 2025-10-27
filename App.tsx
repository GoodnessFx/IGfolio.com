import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
