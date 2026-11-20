# luoluo926.github.io

Personal academic site. Plain HTML, CSS and JavaScript with no build step, published by GitHub Pages straight from the root of `main`.

Live: <https://luoluo926.github.io/>

## Layout

```
index.html                    Homepage markup; assets are referenced by relative path only
styles/main.css               Typography, colour, spacing, layout and components
scripts/main.js               Navigation menu, project image loading, footer year
assets/
  avatar/                     Portrait, hero photo and social preview
  icons/                      Favicon
  projects/                   One folder per project, holding its screenshot
projects/
  sheng-guan-tu/index.html    Standalone detail page for the board game
README.md
```

## Preview locally

From the repository root, either of these works:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open <http://localhost:8000>. Opening `index.html` directly also renders, but some browsers restrict scripts and local assets over `file://`, so a local server is the safer route.

## Editing copy

All text lives in `index.html`:

| Block | Selector |
| --- | --- |
| Hero heading and introduction | `.hero` |
| Research interests | `#research .interest-list` |
| Background timeline | `#background .timeline` |
| Project cards | `#projects .project-grid` |
| Contact | `.closing` |
| Footer | `.site-footer` |

Dates are written in plain form (`2024 to 2028`). Long dashes are avoided throughout the site, so keep new copy consistent with that.

## Replacing images

- **Portrait**: replace `assets/avatar/hero.jpg` (roughly square, keep the filename) and update `assets/avatar/og-image.jpg` for link previews.
- **Favicon**: replace `assets/icons/favicon.svg`.
- **Project screenshots**: cards load lazily through `data-image` and fall back to `data-fallback-image`. A missing file shows a text placeholder rather than a broken image, so dropping a real screenshot into the folder is enough:
  - Sheng Guan Tu: `assets/projects/sheng-guan-tu/shengguan-screenshot.jpg`
  - Tianyuan Xinshi: `assets/projects/tianyuan/tianyuan-screenshot.jpg`

## Adding a project

1. Create `projects/<name>/index.html` as a detail page; the Sheng Guan Tu page works as a starting point.
2. Put the screenshot in `assets/projects/<name>/`.
3. Add an `<article class="project">` to `#projects .project-grid`, with the heading linking to the detail page and `data-image` pointing at the screenshot.

No global styles or scripts need to change.

## Publishing

Commit to `main` and the site updates on its own; GitHub Pages serves the branch root with no workflow.

```bash
git add .
git commit -m "Update project cards"
git push origin main
```
