# Doan Thanh Phuong (Doãn Thanh Phương) – Backend Node.js Portfolio

> Production-grade personal developer portfolio for **Backend Developer Intern / Junior Backend Engineer (Node.js / TypeScript)**.

Built with **Vite, React 19, TypeScript, and Tailwind CSS**. Written in concise, impactful technical English. Zero fluff, 100% authentic to CV credentials and system engineering practices.

---

## 🌟 Highlights

- **Backend Engineering Identity:** Clean Terminal / Dark & Light mode aesthetic with emerald & cyan accents, highlighting distributed locks, double-entry ledgers, and ACID data integrity.
- **Direct Contact Hub:** Clean, direct contact channels (Email with 1-click copy, Phone/Zalo, GitHub, Facebook, Location) without unnecessary forms.
- **Degree Program:** Pursuing the formal **Engineer's Degree in Information Technology (Bằng Kỹ sư CNTT)** at Posts and Telecommunications Institute of Technology (PTIT).
- **Decoupled Configuration:** All personal information, skills, and projects live cleanly in [`src/data/portfolioData.ts`](file:///d:/portfolio/src/data/portfolioData.ts).
- **Dual Theme Support:** Fully responsive Dark Mode and Light Mode with instant toggle and `localStorage` state persistence.
- **7 Structured Skill Domains:** Programming Languages, Backend Architecture, Databases & ORM, Security & Reliability, Async & Queues, Deployment, Testing.
- **Deep-Dive Project Modals:** Problem statements, architecture schematics, Redlock concurrency strategies, and testing breakdowns for **NovaPay** and **StudyHub**.

---

## 🔗 Verified Profile Links

- **GitHub Profile:** [https://github.com/doanthanhphuong29012006-dev](https://github.com/doanthanhphuong29012006-dev)
- **Facebook:** [https://www.facebook.com/phuongdt29](https://www.facebook.com/phuongdt29)
- **Email:** [doanthanhphuong29012006@gmail.com](mailto:doanthanhphuong29012006@gmail.com)
- **Phone / Zalo:** `+84 961 152 369`
- **Location:** Mo Lao, Ha Dong, Hanoi, Vietnam (IT Engineer Program - PTIT)

---

## 🚀 Quickstart & Local Setup

### Prerequisites
- Node.js (v18+) and npm.

### 1. Install dependencies
```bash
npm install
```

### 2. Start local development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
Creates a static `dist/` directory ready to deploy on any hosting provider.

### 4. Preview production build locally
```bash
npm run preview
```

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: backend portfolio for Doan Thanh Phuong"
   git branch -M main
   git remote add origin https://github.com/doanthanhphuong29012006-dev/portfolio.git
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) using your GitHub account.
3. Click **Add New...** -> **Project** -> Select `portfolio`.
4. Vercel automatically detects **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio will be live in 30 seconds at a free URL like `https://thanhphuong-backend.vercel.app`.
