# ⚡ Hijaz C — Flutter Developer & Mobile App Engineer Portfolio

A high-performance, dynamic developer portfolio built with **Next.js 15+ App Router**, **React 19**, and modern CSS. Features interactive canvas effects (DotField), an interactive physical carrom striker, smooth view-transition theme switching (dark/light), sticky project showcases, and a responsive mobile experience. Fully optimized for search engines with server-rendered metadata, Schema.org JSON-LD, sitemap, and robots configuration.

---

## 🔍 SEO & Developer Search Ranking

This portfolio is tailored specifically for discovery as a **Flutter Developer & Mobile App Engineer**:
- **Server-Rendered Metadata**: Dynamic OpenGraph and Twitter cards for instant link previews.
- **Schema.org Structured Data**: Integrated `Person` and `ProfilePage` JSON-LD graph matching Google search guidelines.
- **Search Engine Discovery**: Automatic `/sitemap.xml` and `/robots.txt` generation.
- **Fast Core Web Vitals**: Zero layout shift font loading and Turbopack static compilation.

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
2. Open `.env` and fill in your keys (both `NEXT_PUBLIC_*` and `VITE_*` variable names are supported):
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. `.gitignore` is configured to ignore `.env`, ensuring your credentials will **never** be pushed to your public repository!

---

## 🌐 Deploying to Vercel (Auto-Deployment)

### **Zero Configuration Needed!**
When you push this repository to GitHub:
1. Connect your repository on [Vercel](https://vercel.com).
2. Vercel automatically detects **Next.js** and configures the build settings (`next build`).
3. Under **Settings &rarr; Environment Variables**, add your EmailJS keys:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` (or `VITE_EMAILJS_SERVICE_ID`)
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` (or `VITE_EMAILJS_TEMPLATE_ID`)
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` (or `VITE_EMAILJS_PUBLIC_KEY`)
4. Every commit pushed to `main` will automatically build and deploy at edge speed!

> **Graceful Fallback:** If you don't configure EmailJS, the contact form will automatically guide visitors to email you directly via a single-click `mailto:` button with pre-filled details. Nothing ever breaks.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local Next.js development server
npm run dev

# 3. Build for production (validates build)
npm run build
```

Visit `http://localhost:3000` to see your changes live.
