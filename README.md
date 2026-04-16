# Rich Living

A static marketing site for Rich Living — premium properties and lifestyle services in Accra, Ghana. Built with **Vite**, **React 18**, and **Tailwind CSS**.

## Prerequisites

- Node.js 20+ (recommended)
- npm

## Local development

```bash
npm install
npm run dev
```

Because the site is configured for GitHub project Pages, open the URL Vite prints with the **`/Rich-living/`** path (for example `http://localhost:5173/Rich-living/`) so asset paths match production.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Preview locally:

```bash
npm run preview
```

Then open the preview URL with the `/Rich-living/` path.

## Deploying to GitHub Pages

1. Create the repository [Yevucee/Rich-living](https://github.com/Yevucee/Rich-living) on GitHub (if it does not exist yet).
2. Push this project to the `main` branch (see commands below).
3. In the repo on GitHub: **Settings → Pages → Build and deployment**.
4. Under **Source**, choose **GitHub Actions** (the included workflow publishes the `dist` folder after `npm run build`).
5. After the first workflow run, the site will be available at  
   `https://yevucee.github.io/Rich-living/`  
   (URLs use hash-based routing, e.g. `…/Rich-living/#/properties`, so deep links and refresh work without extra server configuration.)

If you prefer to publish manually instead of Actions, run `npm run build`, then upload the contents of `dist` to the branch or mechanism your Pages source uses.

## Licence & credits

See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for third-party component and image credits.
