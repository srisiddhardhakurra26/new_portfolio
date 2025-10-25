# 🎯 Quick Deployment Guide

## Local Development:
```bash
npm run dev
```
Opens at http://localhost:3000

---

## Deploy to Production:

### 1️⃣ **Deploy API (Vercel)**
```bash
vercel
vercel env add GROQ_API_KEY
vercel --prod
```
Copy the URL (e.g., `https://your-project.vercel.app`)

### 2️⃣ **Update Netlify**
Add environment variable:
- Key: `REACT_APP_API_URL`
- Value: `https://your-project.vercel.app`

Redeploy ✅

---

**See DEPLOYMENT.md for detailed instructions**
