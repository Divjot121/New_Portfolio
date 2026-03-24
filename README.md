# Divjot Singh Arora - Personal Portfolio

A modern, colorful, minimalistic portfolio website built with React, featuring premium futuristic design with glassmorphism effects, smooth animations, and responsive layout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

---

## ✨ Features

- **9 Complete Sections**: Hero, About, Projects, Achievements, Skills, Speaking, Ideas Exploring, Currently Building, Contact
- **Premium Design**: Dark theme with vibrant gradients (Purple, Blue, Neon Pink)
- **Glassmorphism Effects**: Backdrop-blur cards with layered shadows
- **Smooth Animations**: Framer Motion scroll animations and hover effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Fast loading with lazy loading and code splitting

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- Yarn package manager

### Run Locally (2 minutes)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start
```

**Open**: http://localhost:3000

---

## 📖 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get up and running in 5 minutes
- **[Local Setup Guide](LOCAL_SETUP_GUIDE.md)** - Detailed local development instructions
- **[Vercel Deployment Guide](VERCEL_DEPLOYMENT_GUIDE.md)** ⭐ Recommended - FREE deployment via GitHub
- **[Hostinger Deployment Guide](HOSTINGER_DEPLOYMENT_GUIDE.md)** - Traditional hosting option

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - UI framework
- **Tailwind CSS** 3.4 - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

### Backend (Optional)
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver

---

## 📁 Project Structure

```
/app/
├── frontend/
│   ├── src/
│   │   ├── components/sections/   # Portfolio sections
│   │   ├── pages/                 # Main pages
│   │   ├── App.js                 # App entry
│   │   └── App.css                # Global styles
│   ├── public/
│   └── package.json
├── backend/                        # Optional backend
├── LOCAL_SETUP_GUIDE.md           # Local dev guide
├── HOSTINGER_DEPLOYMENT_GUIDE.md  # Deployment guide
└── README.md                       # This file
```

---

## 🎨 Customization

### Update Personal Info

**Your Name & Bio** → `/app/frontend/src/components/sections/Hero.jsx`
**Projects** → `/app/frontend/src/components/sections/Projects.jsx`
**Achievements** → `/app/frontend/src/components/sections/Achievements.jsx`
**Skills** → `/app/frontend/src/components/sections/Skills.jsx`
**Ideas** → `/app/frontend/src/components/sections/IdeasExploring.jsx`
**Social Links** → Update in Hero.jsx and Contact.jsx

### Update Theme Colors

**Primary Colors**:
- Purple: `#6C63FF`
- Blue: `#00D4FF`
- Neon Pink: `#FF6FD8`
- Background: `#05050A`

Colors are defined inline in component files. Use find & replace to update.

---

## 🚢 Deployment

### Vercel (Recommended - FREE)

**Easiest deployment with automatic updates on every git push!**

```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com
# - Sign in with GitHub
# - Import your repository
# - Deploy! (takes 2-3 minutes)

# 3. Get your live URL
# https://your-portfolio.vercel.app
```

**See detailed guide**: [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)

### Other Platforms

- **Hostinger**: See [HOSTINGER_DEPLOYMENT_GUIDE.md](HOSTINGER_DEPLOYMENT_GUIDE.md)
- **Netlify**: Similar to Vercel, drag & drop build folder
- **AWS S3**: Upload to S3 bucket with static hosting
- **VPS**: See HOSTINGER_DEPLOYMENT_GUIDE.md for Nginx setup

---

## 📝 Sections Overview

1. **Hero** - Bold headline with gradient text and CTAs
2. **About Me** - Bento-style layout with portrait and story
3. **Work/Projects** - Showcase key projects with hover effects
4. **Achievements** - Timeline of milestones (TEDx, talks, awards)
5. **Skills** - Tech stack organized by category
6. **Speaking/Community** - Community impact and speaking stats
7. **Ideas I'm Exploring** - Experimental ideas with status badges
8. **Currently Building** - Terminal-style active projects
9. **Contact** - Social links and call-to-action

---

## 🔧 Development

### Available Scripts

```bash
yarn start          # Start dev server (port 3000)
yarn build         # Create production build
yarn test          # Run tests
yarn lint          # Run ESLint
```

### Environment Variables

Create `.env` file in `/frontend/`:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=0
ENABLE_HEALTH_CHECK=false
```

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

**Port 3000 in use**:
```bash
# Mac/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Dependencies issues**:
```bash
rm -rf node_modules yarn.lock
yarn install
```

**Build errors**:
```bash
yarn cache clean
yarn install --force
yarn build
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Credits

**Design**: Premium futuristic portfolio design
**Fonts**: Outfit (headings), Manrope (body)
**Icons**: Lucide React
**Images**: Unsplash
**Animations**: Framer Motion

---

## 📧 Contact

**Divjot Singh Arora**
- Portfolio: [Your Domain]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: divjot@example.com

---

## 🌟 Features Highlight

- ✅ Fully responsive design
- ✅ Dark mode optimized
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ Glassmorphism effects
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Accessible (WCAG compliant)

---

Built with ❤️ using React & Tailwind CSS
