# Quick Start Guide - KANU.EXE

## 🚀 Get Started in 3 Steps

### 1. Start Development Server
\`\`\`bash
cd "e:\\custom web"
npm run dev
\`\`\`

### 2. Open in Browser
Navigate to: `http://localhost:5174/` (or the port shown in terminal)

### 3. Start Customizing!
Edit files in `src/components/` and watch changes live!

---

## 📂 What Each File Does

### Main Files
- **`src/App.jsx`** - Main app component (combines all sections)
- **`src/index.css`** - Global styles and animations
- **`tailwind.config.js`** - Color scheme and design tokens

### Components (in order of appearance)
1. **`IntroLoader.jsx`** - Boot sequence loading screen
2. **`HomeScreen.jsx`** - Hero section with title
3. **`CharacterProfile.jsx`** - Game-style character stats
4. **`CompatibilityReport.jsx`** - Matching analysis
5. **`AchievementSystem.jsx`** - Unlockable achievements
6. **`EvidenceArchive.jsx`** - Classified database
7. **`BossFight.jsx`** - Interactive boss encounter
8. **`FunFacts.jsx`** - Swipeable fact cards
9. **`DanceArchive.jsx`** - Premium video showcase
10. **`KanuSimulator.jsx`** - Interactive response guide
11. **`Timeline.jsx`** - Journey timeline
12. **`SecretMessage.jsx`** - Final message section

### Helper Components
- **`FloatingTulips.jsx`** - Background animations

---

## 🎨 Most Common Customizations

### Change Name/Title
**File**: `src/components/HomeScreen.jsx`
**Line**: ~10
\`\`\`jsx
KANU.EXE → YOUR_NAME.EXE
\`\`\`

### Update Secret Message
**File**: `src/components/SecretMessage.jsx`
**Lines**: ~55-90
Edit the message paragraphs and signature

### Modify Achievements
**File**: `src/components/AchievementSystem.jsx`
**Line**: ~7
Add/edit achievement objects in the array

### Change Colors
**File**: `tailwind.config.js`
**Line**: ~9
Update hex color codes

---

## 🔧 Common Commands

\`\`\`bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependencies
npm install package-name

# Fix dependency issues
rm -rf node_modules package-lock.json
npm install
\`\`\`

---

## 📱 Testing Checklist

- [ ] Open `http://localhost:5174/`
- [ ] Check intro loader animation
- [ ] Scroll through all sections
- [ ] Test mobile view (Chrome DevTools F12)
- [ ] Try swipe gestures in Fun Facts
- [ ] Click interactive elements
- [ ] Check boss fight interactions
- [ ] View secret message

---

## 🐛 Quick Fixes

### Port Already in Use
The server will automatically use a different port (5175, 5176, etc.)

### Changes Not Showing
1. Hard refresh: `Ctrl + Shift + R`
2. Clear browser cache
3. Restart dev server

### Animations Laggy
- Close other browser tabs
- Check browser hardware acceleration is enabled
- Test on actual mobile device

### Build Errors
\`\`\`bash
# Clear cache and rebuild
rm -rf node_modules .vite dist
npm install
npm run build
\`\`\`

---

## 🎯 Next Steps

1. **Customize Content** - See `CUSTOMIZATION_GUIDE.md`
2. **Deploy Website** - See `DEPLOYMENT.md`
3. **Read Full Docs** - See `README.md`

---

## 💡 Pro Tips

- **Auto-save in VSCode**: Files auto-save, changes reflect instantly
- **Mobile first**: Always test mobile view (most important)
- **Emoji guide**: Use https://emojipedia.org for emoji codes
- **Color picker**: Use browser DevTools or https://coolors.co
- **Keep it personal**: The magic is in the details!

---

## 🆘 Need Help?

1. Check `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. Look at browser console (F12) for errors
3. Compare your changes with original code
4. Undo last change if something breaks

---

## 📦 What's Included

✅ Fully responsive mobile-first design
✅ Smooth Framer Motion animations
✅ Interactive swipe gestures
✅ Glassmorphism effects
✅ Premium baby pink theme
✅ 11 unique sections
✅ Touch-optimized controls
✅ No backend required
✅ Easy to customize
✅ Ready to deploy

---

**Ready to make it yours? Start editing! 🎨**

Open `src/components/CharacterProfile.jsx` and change some text to see live updates!
