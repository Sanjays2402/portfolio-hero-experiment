# Sanjay Santhanam - Portfolio

Modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: Theme switching with next-themes
- **Accessibility**: Optimized for high legibility with Inter and JetBrains Mono fonts
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 GitHub Pages Deployment

### Step 1: Repository Configuration ✅
This is a standard `username.github.io` User Page site, so no `basePath` is required in `next.config.js`. It renders directly to the root.

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/Sanjays2402/Sanjays2402.github.io.git

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch** and choose **main**, folder **/(root)**
   - *(Note: currently we build locally and push the static output directly to the root of the repo)*

### Step 4: Access Your Site
Your portfolio will be available at:
`https://sanjays2402.github.io/`

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices including:
- Touch-friendly navigation
- Responsive layouts
- iPhone/Safari compatibility
- Smooth touch interactions

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` and `globals.css`
- **Content**: Update components in `/components/sections/`
- **Fonts**: Modify font imports in `globals.css`
- **Animations**: Adjust Framer Motion variants in component files

## 📝 Content Sections

- Hero with introduction
- About with terminal animation
- Work experience timeline
- Projects showcase
- Skills with interactive cards
- Education background
- Research publications
- Contact information

## 🔧 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Font**: Inter & JetBrains Mono
- **Deployment**: GitHub Pages with GitHub Actions
