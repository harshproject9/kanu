# Deployment Guide for KANU.EXE

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not already installed):
\`\`\`bash
npm install -g vercel
\`\`\`

2. **Login to Vercel**:
\`\`\`bash
vercel login
\`\`\`

3. **Deploy** (from the project directory):
\`\`\`bash
vercel
\`\`\`

4. **Follow the prompts**:
   - Set up and deploy: Y
   - Which scope: Your account
   - Link to existing project: N
   - Project name: kanu-exe (or your choice)
   - Directory: ./
   - Override settings: N

5. **Production deployment**:
\`\`\`bash
vercel --prod
\`\`\`

**Result**: You'll get a URL like `https://kanu-exe.vercel.app`

---

### Option 2: Netlify

1. **Install Netlify CLI**:
\`\`\`bash
npm install -g netlify-cli
\`\`\`

2. **Build the project**:
\`\`\`bash
npm run build
\`\`\`

3. **Deploy**:
\`\`\`bash
netlify deploy
\`\`\`

4. **For production**:
\`\`\`bash
netlify deploy --prod
\`\`\`

**Or use Netlify Drop**:
- Visit https://app.netlify.com/drop
- Drag and drop the `dist` folder
- Get instant deployment

---

### Option 3: GitHub Pages

1. **Install gh-pages**:
\`\`\`bash
npm install --save-dev gh-pages
\`\`\`

2. **Add to package.json**:
\`\`\`json
{
  "homepage": "https://yourusername.github.io/kanu-exe",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
\`\`\`

3. **Update vite.config.js**:
\`\`\`javascript
export default defineConfig({
  plugins: [react()],
  base: '/kanu-exe/', // Your repo name
})
\`\`\`

4. **Deploy**:
\`\`\`bash
npm run deploy
\`\`\`

---

### Option 4: Cloudflare Pages

1. **Build the project**:
\`\`\`bash
npm run build
\`\`\`

2. **Install Wrangler**:
\`\`\`bash
npm install -g wrangler
\`\`\`

3. **Login**:
\`\`\`bash
wrangler login
\`\`\`

4. **Deploy**:
\`\`\`bash
wrangler pages deploy dist
\`\`\`

---

### Option 5: Firebase Hosting

1. **Install Firebase CLI**:
\`\`\`bash
npm install -g firebase-tools
\`\`\`

2. **Login**:
\`\`\`bash
firebase login
\`\`\`

3. **Initialize**:
\`\`\`bash
firebase init hosting
\`\`\`
- Public directory: `dist`
- Single-page app: Yes
- Automatic builds: No

4. **Build and deploy**:
\`\`\`bash
npm run build
firebase deploy
\`\`\`

---

## 📱 Sharing the Website

After deployment, you can:

1. **Share the direct link** - Just send the URL
2. **Create a QR code** - Use https://qr.io or similar
3. **Share on social media** - The meta tags are already configured
4. **Add to home screen** - Mobile users can add it as a PWA

---

## 🎨 Pre-Deployment Checklist

- [ ] Test on multiple devices (mobile priority)
- [ ] Check all animations work smoothly
- [ ] Verify all sections display correctly
- [ ] Test touch/swipe gestures on mobile
- [ ] Ensure images/media load properly
- [ ] Verify responsive design at different screen sizes
- [ ] Test on different browsers (Chrome, Safari, Firefox)

---

## 🔧 Build Configuration

The project is pre-configured with:
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 16+ recommended

---

## 📊 Performance Tips

After deployment:
1. Check Lighthouse scores (aim for 90+ on all metrics)
2. Enable compression on your hosting platform
3. Use CDN if available (most platforms do this automatically)
4. Monitor loading times on mobile networks

---

## 🐛 Troubleshooting

**Build fails**:
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf .vite`

**Animations not smooth**:
- Ensure hardware acceleration is enabled in browser
- Check if device supports the features

**Mobile view issues**:
- Clear browser cache
- Check viewport meta tag is correct
- Test in actual device, not just browser DevTools

---

## 💡 Custom Domain (Optional)

Most platforms allow custom domains:

**Vercel**:
\`\`\`bash
vercel domains add yourdomain.com
\`\`\`

**Netlify**:
- Go to Domain Settings in dashboard
- Add custom domain
- Update DNS records

---

## 🎁 Quick Gift Link Setup

For a special reveal:

1. Deploy to any platform
2. Use a URL shortener (bit.ly, tinyurl.com)
3. Create a custom short link like: `kanu.special`
4. Share the short link for surprise effect

---

**Ready to deploy?** Start with Vercel - it's the fastest! 🚀
