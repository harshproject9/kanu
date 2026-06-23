# KANU.EXE - Professional Yapper Edition

A premium, mobile-first interactive website built with React.js, Framer Motion, and Tailwind CSS.

## 🌟 Features

- **Intro Loader** - Boot sequence style loading animation
- **Character Profile** - Game-style character stats and information
- **Compatibility Report** - Interactive compatibility analysis
- **Achievement System** - Unlockable achievements with XP system
- **Evidence Archive** - Classified database of moments
- **Boss Fight** - Interactive boss encounter simulation
- **Fun Facts** - Swipeable cards with interesting facts
- **Dance Archive** - Premium collection showcase
- **Kanu Simulator** - Interactive response guide
- **Timeline** - Journey visualization
- **Secret Message** - Beautiful final message section

## 🎨 Design Features

- **Mobile-first responsive design**
- **Glassmorphism effects**
- **Smooth Framer Motion animations**
- **Touch swipe support**
- **Floating tulips and particles**
- **Premium baby pink color scheme**
- **Interactive elements throughout**

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
\`\`\`bash
cd "e:\\custom web"
\`\`\`

2. Install dependencies (already done):
\`\`\`bash
npm install
\`\`\`

### Development

Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The site will be available at `http://localhost:5174/` (or another port if 5174 is in use)

### Build for Production

Create an optimized production build:
\`\`\`bash
npm run build
\`\`\`

The build files will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
\`\`\`bash
npm run preview
\`\`\`

## 📱 Mobile Optimization

The website is optimized for mobile devices with:
- Perfect rendering on 360px, 390px, 412px, 430px viewports
- Large touch targets (minimum 44x44px)
- No horizontal scrolling
- Touch-friendly swipe gestures
- Optimized performance

## 🛠️ Tech Stack

- **React 19.2.6** - UI library
- **Vite 8.0.12** - Build tool
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

## 📂 Project Structure

\`\`\`
custom web/
├── src/
│   ├── components/
│   │   ├── IntroLoader.jsx
│   │   ├── FloatingTulips.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── CharacterProfile.jsx
│   │   ├── CompatibilityReport.jsx
│   │   ├── AchievementSystem.jsx
│   │   ├── EvidenceArchive.jsx
│   │   ├── BossFight.jsx
│   │   ├── FunFacts.jsx
│   │   ├── DanceArchive.jsx
│   │   ├── KanuSimulator.jsx
│   │   ├── Timeline.jsx
│   │   └── SecretMessage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
\`\`\`

## 🎯 Customization

To customize the content:

1. **Character Profile**: Edit `src/components/CharacterProfile.jsx`
2. **Achievements**: Modify the `achievements` array in `src/components/AchievementSystem.jsx`
3. **Fun Facts**: Update the `facts` array in `src/components/FunFacts.jsx`
4. **Timeline**: Edit events in `src/components/Timeline.jsx`
5. **Secret Message**: Customize text in `src/components/SecretMessage.jsx`

## 🎨 Color Customization

Colors are defined in `tailwind.config.js`:
- `baby-pink`: #FFE4EC
- `rose-pink`: #FFB6C1
- `soft-pink`: #FFF0F5
- `cream`: #FFFEF7
- `lavender`: #F5E6FF

## 📝 Notes

- The website is frontend-only (no backend required)
- All content is embedded in the components
- Optimized for modern browsers
- Best viewed on mobile devices

## 🐛 Known Bugs

- Still threatens to punch me.

---

**Made with attention to who you actually are**

KANU.EXE v1.0 | June 2026
