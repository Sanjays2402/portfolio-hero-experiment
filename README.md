# Sanjay Santhanam - Portfolio

Modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: Theme switching with next-themes
- **Accessibility**: Dyslexic-friendly Atkinson Hyperlegible font
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

## 📦 Deployment to GitHub Pages

### Step 1: Repository Configuration ✅
The repository is already configured for **sanjays2402**:
```js
basePath: process.env.NODE_ENV === 'production' ? '/sanjays2402' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/sanjays2402/' : '',
```

### Step 2: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add GitHub remote
git remote add origin https://github.com/Sanjays2402/sanjays2402.git

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### Step 4: Access Your Site
Your portfolio will be available at:
`https://sanjays2402.github.io/sanjays2402`

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
- **Font**: Atkinson Hyperlegible (dyslexic-friendly)
- **Deployment**: GitHub Pages with GitHub Actions