# Customization Guide for KANU.EXE

This guide will help you customize the website content without breaking anything.

## 🎨 Quick Customization Checklist

- [ ] Update Character Profile information
- [ ] Modify Achievement descriptions
- [ ] Change Fun Facts
- [ ] Update Timeline events
- [ ] Customize Secret Message
- [ ] Adjust Evidence Archive items
- [ ] Modify Simulator scenarios
- [ ] Update dance video descriptions

---

## 1. 📝 Character Profile

**File**: `src/components/CharacterProfile.jsx`

### Change Character Information:

Find this section (around line 35):
\`\`\`jsx
<InfoItem label="Character Name" value="Kanu" />
<InfoItem label="Alias" value="Professional Yapper" />
<InfoItem label="Class" value="Dancer" emoji="💃" />
// ... more items
\`\`\`

**How to edit**:
- Change `value="..."` to update the text
- Change `emoji="..."` to update the icon
- Keep the structure the same

### Change Stats:

Find the `stats` array (around line 8):
\`\`\`jsx
const stats = [
  { name: 'Talking', value: 100, color: 'bg-rose-pink' },
  { name: 'Dancing', value: 100, color: 'bg-pink-400' },
  // ...
];
\`\`\`

**How to edit**:
- `name`: The stat name
- `value`: Number from 0 to 100
- `color`: Tailwind color class (keep as is or choose from: bg-rose-pink, bg-pink-400, bg-red-400, bg-purple-400, bg-blue-400, bg-green-400)

---

## 2. 🏆 Achievements

**File**: `src/components/AchievementSystem.jsx`

Find the `achievements` array (around line 7):
\`\`\`jsx
const achievements = [
  {
    id: 1,
    title: 'Made Dodo Explain The Full Story',
    xp: 500,
    icon: '📖',
    color: 'from-blue-400 to-blue-600',
  },
  // ... more achievements
];
\`\`\`

**How to edit**:
- `title`: Achievement text
- `subtitle`: Optional second line (like "472 Times")
- `xp`: Experience points (any number)
- `icon`: Any emoji
- `color`: Gradient colors (keep format: 'from-COLOR to-COLOR')

**To add new achievements**: Copy the entire block from `{` to `},` and paste below, change the `id` number.

---

## 3. 📋 Fun Facts

**File**: `src/components/FunFacts.jsx`

Find the `facts` array (around line 9):
\`\`\`jsx
const facts = [
  {
    id: 1,
    title: 'Cannot Keep Secrets For Long',
    icon: '🤫',
    color: 'from-purple-400 to-pink-400',
  },
  // ... more facts
];
\`\`\`

**How to edit**:
- `title`: Fact text
- `icon`: Any emoji
- `color`: Gradient colors

**To add/remove facts**: Simply add or delete entire blocks. The swipe navigation adjusts automatically.

---

## 4. ⏳ Timeline

**File**: `src/components/Timeline.jsx`

Find the `events` array (around line 5):
\`\`\`jsx
const events = [
  {
    id: 1,
    title: 'We Met',
    date: 'March 2026',
    icon: '👋',
    description: 'First encounter, no idea what was coming',
    color: 'from-blue-400 to-purple-400',
  },
  // ... more events
];
\`\`\`

**How to edit**:
- `title`: Event name
- `date`: Any date format you like
- `icon`: Any emoji
- `description`: Brief description
- `color`: Gradient colors
- `current: true`: Add this to mark as current event (add to last event only)

---

## 5. 💌 Secret Message

**File**: `src/components/SecretMessage.jsx`

Find the message paragraphs (around line 55):
\`\`\`jsx
<motion.p ...>
  I made this because
</motion.p>

<motion.p ...>
  it's rare to find someone who feels familiar this quickly.
</motion.p>
// ... more paragraphs
\`\`\`

**How to edit**:
- Change the text between `<motion.p>` and `</motion.p>`
- Keep the motion.p tags and their properties
- Don't change the animation settings

Find the signature (around line 90):
\`\`\`jsx
<p className="text-2xl text-gray-600 font-medium italic">
  - Dodo
</p>
\`\`\`

Change "Dodo" to your name/nickname.

---

## 6. 🔍 Evidence Archive

**File**: `src/components/EvidenceArchive.jsx`

Find the `evidence` array (around line 7):
\`\`\`jsx
const evidence = [
  {
    id: '07',
    title: 'Subject Dancing For Absolutely No Reason',
    type: 'VIDEO',
    date: '2026.06.15',
    icon: '💃',
    classification: 'LEGENDARY',
  },
  // ... more evidence
];
\`\`\`

**How to edit**:
- `id`: Evidence number (any format)
- `title`: Description
- `type`: VIDEO, AUDIO, PHOTO, ERROR LOG, etc.
- `date`: Any date format
- `icon`: Any emoji
- `classification`: LEGENDARY, HIGH PRIORITY, ONGOING, ARCHIVED, CORRUPTED, WHOLESOME

---

## 7. 🎮 Kanu Simulator

**File**: `src/components/KanuSimulator.jsx`

Find the `scenarios` array (around line 7):
\`\`\`jsx
const scenarios = [
  {
    id: 1,
    condition: 'If Hungry',
    action: 'Give Pasta',
    successRate: 98,
    icon: '🍝',
    result: 'Mission Successful! Kanu is happy...',
    color: 'from-yellow-400 to-orange-500',
  },
  // ... more scenarios
];
\`\`\`

**How to edit**:
- `condition`: The scenario trigger
- `action`: The recommended action
- `successRate`: Number from 0 to 100
- `icon`: Any emoji
- `result`: What happens when you click
- `color`: Gradient colors

---

## 8. 💃 Dance Archive

**File**: `src/components/DanceArchive.jsx`

Find the `danceVideos` array (around line 5):
\`\`\`jsx
const danceVideos = [
  {
    id: 1,
    title: 'Dance.exe',
    subtitle: 'Main Character Energy Detected',
    confidence: 100,
    icon: '💃',
    color: 'from-purple-400 to-pink-500',
    description: 'Random burst of energy captured on camera',
  },
  // ... more videos
];
\`\`\`

**How to edit**:
- `title`: Video filename style
- `subtitle`: Caption
- `confidence`: Number from 0 to 100
- `icon`: Any emoji
- `color`: Gradient colors
- `description`: Brief description

---

## 9. 🎨 Colors

**File**: `tailwind.config.js`

Find the colors section:
\`\`\`javascript
colors: {
  'baby-pink': '#FFE4EC',
  'rose-pink': '#FFB6C1',
  'soft-pink': '#FFF0F5',
  'cream': '#FFFEF7',
  'lavender': '#F5E6FF',
}
\`\`\`

**How to edit**:
- Change the hex codes to your preferred colors
- Keep the names the same
- Use a color picker tool to find hex codes

---

## 10. ⚙️ Intro Loader

**File**: `src/components/IntroLoader.jsx`

Find the `bootSequence` array (around line 8):
\`\`\`jsx
const bootSequence = [
  { text: 'Loading Kanu.exe...', delay: 500 },
  { text: 'Loading Dance Module...', status: 'Complete', delay: 800 },
  // ... more lines
];
\`\`\`

**How to edit**:
- `text`: The loading message
- `status`: 'Complete' or 'ERROR' (optional)
- `delay`: Time in milliseconds before next line

---

## 🚫 What NOT to Change

To keep the website working properly:

1. **Don't change**:
   - `className` attributes (these control styling)
   - `motion.*` animation properties
   - `useState`, `useEffect` hooks
   - File imports at the top
   - Component names

2. **Be careful with**:
   - Array structures (keep the same format)
   - Brackets and commas (syntax matters)
   - Quotation marks (keep them consistent)

---

## 💡 Pro Tips

1. **Test after each change**: Save the file and check the website
2. **Start small**: Change one section at a time
3. **Keep backups**: Copy the original text before changing
4. **Use emojis freely**: They work everywhere! Find them at https://emojipedia.org
5. **Gradient colors**: Stick to Tailwind colors for consistency:
   - blue-400, purple-400, pink-400, rose-400, red-400
   - orange-400, yellow-400, green-400, etc.

---

## 🆘 If Something Breaks

1. **Check the browser console**: Press F12 and look for red errors
2. **Undo your last change**: Use Ctrl+Z
3. **Check for typos**: Missing commas, brackets, or quotes
4. **Restart dev server**:
   \`\`\`bash
   Ctrl+C (stop server)
   npm run dev (start again)
   \`\`\`

---

## 📱 Testing Your Changes

After customizing:

1. Save all files
2. Check the website in browser
3. Test on mobile (Chrome DevTools > Toggle Device Toolbar)
4. Scroll through all sections
5. Click interactive elements
6. Test swipe gestures

---

**Happy customizing! 🎨**

Remember: The website is about attention to detail and personality. Make it truly yours!
