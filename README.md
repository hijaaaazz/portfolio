# ⚡ Developer Portfolio Template

A high-performance, dynamic developer portfolio built with React, Vite, and modern CSS. Features interactive canvas effects (DotField), an interactive physical carrom striker, smooth view-transition theme switching (dark/light), sticky project showcases, and a responsive mobile experience.

---

## 🚀 Easy 1-File Customization (`content.js`)

**You only need to edit one single file to make this portfolio completely your own!**

Open [src/content.js](file:///Users/hijazc/hijaz/src/content.js) (or `content.js` at the root) and customize:

| Section | What You Can Edit |
| :--- | :--- |
| **`brand`** | Name, tagline, roles (typewriter animation), avatar image, logo, resume PDF URL, bio, and timezone |
| **`home`** | Hero headline pills, numerical counters, and infinite specialties ticker |
| **`about`** | Heading, story paragraphs, and highlighted achievements/milestones |
| **`education`** | Timeline of career roles and degrees with icons and dates |
| **`projects`** | Sticky work showcase cards, tags, live demo links, and GitHub repos |
| **`services`** | Interactive accordion services with dual screenshot popups |
| **`tech`** | Tech stack items with custom icons, descriptions, and animated skill percentage bars |
| **`blog`** | Thought leadership posts, milestones, awards, quotes, and external links |
| **`contact`** | Email address, phone, direct mailto body, and inspirational quote |
| **`socialLinks`** | LinkedIn, GitHub, Medium, Instagram, WhatsApp, etc. (icons adapt automatically) |

All headings, metrics, tags, cards, links, and SEO metadata update across the entire website instantly.

---

## 🔒 Keeping EmailJS Keys Secret from Public Repositories

To keep your EmailJS credentials private and hidden from GitHub:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and fill in your keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. `.gitignore` is already configured to ignore `.env`, ensuring your credentials will **never** be pushed to your public repository!

---

## 🌐 Deploying to Vercel (Auto-Deployment)

### **Does using `.env` break Vercel auto-deployment?**
**No, absolutely not!** Vercel is specifically built for this workflow.

When you push code to GitHub:
1. GitHub contains the code **without** your `.env` file.
2. In your **Vercel Dashboard**:
   - Go to your Project &rarr; **Settings** &rarr; **Environment Variables**.
   - Add the 3 variables:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Select **Production**, **Preview**, and **Development**, then click **Save**.
3. Every time you push a commit or merge a pull request to GitHub, Vercel automatically deploys your project and injects these variables during build time.

> **Graceful Fallback:** If you don't configure EmailJS, the contact form will automatically guide visitors to email you directly via a single-click `mailto:` button with pre-filled details. Nothing ever breaks.

---

## 💻 Local Development

```bash
# 1. Clone repository
git clone https://github.com/hijaaaazz/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:5173` to see your changes live.
