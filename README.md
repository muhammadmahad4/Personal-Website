# Portfolio — Muhammad Mahad

Modern, minimalistic personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **React Router**. Static site ready for [Netlify](https://www.netlify.com/) deployment.

## Stack

- React 19 + Vite 6
- Tailwind CSS 4 (class-based dark mode)
- React Router 7
- All content in `src/data/portfolioData.js`

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy (Netlify)

```bash
npm run build
```

- Build command: `npm run build`
- Publish directory: `dist`
- `_redirects` included for SPA routing

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About, Education, Skills, Experience, Projects |
| `/blog` | Pentesting & walkthroughs listing |
| `/blog/:slug` | Individual blog post |

## Customize

| Item | Location |
|------|----------|
| All portfolio content | `src/data/portfolioData.js` |
| Profile photo | Replace `public/assets/images/profile-pic.jpg` |
| Project images | `public/assets/images/projects/` |
| Blog thumbnails | `public/assets/images/blog/` |
| CV download | `public/assets/cv/My_CV.pdf` |

## Blog (future Markdown)

Blog posts are mock objects in `portfolioData.js`. To migrate to local Markdown:

1. Add `.md` files under `src/content/blog/`
2. Use `import.meta.glob` or a build-time loader
3. Map frontmatter to the existing post shape

## License

MIT
