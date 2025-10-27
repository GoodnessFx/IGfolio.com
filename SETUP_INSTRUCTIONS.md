# 🚀 Quick Setup Instructions

Follow these steps to get your portfolio running locally:

## Prerequisites
- **Node.js** v18 or higher ([Download here](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for cloning)

## Step-by-Step Setup

### 1️⃣ Clone or Download
```bash
git clone <your-repo-url>
cd portfolio
```

Or download and extract the ZIP file.

### 2️⃣ Install Dependencies
```bash
npm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, Motion, and more.

### 3️⃣ Start Development Server
```bash
npm run dev
```

Your portfolio will be running at **http://localhost:5173** 🎉

### 4️⃣ Customize Your Portfolio

#### Personal Information
- **Hero Section**: Update social links in `/components/Hero.tsx`
- **About Section**: Edit bio in `/components/About.tsx`
- **Skills**: Modify skills in `/components/Skills.tsx`
- **Projects**: Replace example projects in `/components/Projects.tsx`
- **Contact**: Update email/socials in `/components/Contact.tsx`

#### Resume
Replace `/public/resume.pdf` with your actual resume PDF file.

#### Images
All images are loaded from Unsplash via the `unsplash_tool`. To use your own images:
1. Add images to `/public` folder
2. Import them in your components

### 5️⃣ Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### 6️⃣ Preview Production Build
```bash
npm run preview
```

## 📦 What's Included?

✅ Fully responsive React portfolio  
✅ TypeScript for type safety  
✅ Tailwind CSS v4 for styling  
✅ Motion animations (Framer Motion)  
✅ shadcn/ui components  
✅ Dark theme design  
✅ Contact form  
✅ Resume download button  
✅ Social media links  
✅ 17 example projects  

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization Tips

1. **Colors**: Edit CSS variables in `/styles/globals.css`
2. **Fonts**: Modify font-family in `/styles/globals.css`
3. **Spacing**: Adjust padding/margins using Tailwind classes
4. **Animations**: Customize Motion animations in component files

## 🆘 Troubleshooting

### Port Already in Use?
If port 5173 is in use, Vite will automatically use the next available port.

### Dependencies Not Installing?
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?
Make sure you're using Node.js v18 or higher:
```bash
node --version
```

## 🌐 Deployment

Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 💡 Need Help?

Check the main [README.md](./README.md) for more detailed information.

---

Happy coding! 🎉
