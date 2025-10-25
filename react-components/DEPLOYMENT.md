# 🚀 Deploy AI Chat to Vercel (FREE)

## ✅ Files Created:
- `api/chat.js` - Serverless API endpoint
- `vercel.json` - Vercel configuration

---

## 📋 Deployment Steps:

### **1. Install Vercel CLI**
```bash
npm i -g vercel
```

### **2. Deploy to Vercel**
```bash
cd react-components
vercel
```

**Follow the prompts:**
- Set up and deploy? → **Y**
- Which scope? → Select your account
- Link to existing project? → **N**
- What's your project's name? → **sid-portfolio-api** (or any name)
- In which directory is your code located? → **./** (press Enter)
- Want to modify settings? → **N**

**Wait ~1 minute for deployment...**

### **3. Add Environment Variable**
```bash
vercel env add GROQ_API_KEY
```

- Enter value: `your-groq-api-key-here`
- Which environments? → **Production** (press Space, then Enter)

### **4. Redeploy with Environment Variable**
```bash
vercel --prod
```

### **5. Copy Your API URL**
You'll get a URL like: `https://sid-portfolio-api.vercel.app`

---

## 🌐 Update Your Netlify Site:

### **Option A: Via Netlify Dashboard**
1. Go to Netlify dashboard
2. Select your site
3. Site settings → Environment variables
4. Add variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://your-vercel-url.vercel.app` (from step 5)
5. Trigger new deploy

### **Option B: Via netlify.toml** (if you use it)
Add to your netlify.toml:
```toml
[build.environment]
  REACT_APP_API_URL = "https://your-vercel-url.vercel.app"
```

---

## 🧪 Test Locally First:

Keep your local server running for development:
```bash
npm run dev
```

The code automatically uses:
- **Local**: `http://localhost:3001` when `REACT_APP_API_URL` is not set
- **Production**: Your Vercel URL when deployed to Netlify

---

## ✨ That's It!

**Total Cost**: $0 (Vercel free tier: 100GB bandwidth/month)

Your AI chat will now work online! 🎉

---

## 🐛 Troubleshooting:

**CORS errors?**
- The API already has CORS enabled for all origins
- If you want to restrict, edit `api/chat.js` line 8

**API not responding?**
- Check Vercel dashboard for function logs
- Verify `GROQ_API_KEY` environment variable is set
- Ensure you redeployed after adding the env var

**Netlify site not using new API?**
- Check environment variable is set correctly
- Redeploy the site after adding the variable
