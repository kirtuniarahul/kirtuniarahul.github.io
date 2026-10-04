# Kirtunia Rahul — Professional Jekyll Portfolio

This is a custom Jekyll portfolio designed for GitHub Pages.

## Upload instructions

Upload the **contents** of this folder to the root of your `kirtuniarahul.github.io` repository.

Important: delete the old `index.html` if it still exists.

GitHub Pages settings:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

## Main files

- `_config.yml` — site-wide settings
- `_layouts/default.html` — main page template
- `_includes/nav.html` — navigation bar
- `_includes/footer.html` — footer
- `index.md` — homepage
- `projects.md` — projects page
- `research.md` — research page
- `publications.md` — publications page
- `resume.md` — resume page
- `contact.md` — contact page
- `assets/css/style.css` — visual design
- `assets/images/` — images
- `assets/videos/` — videos
- `assets/documents/` — CV or downloadable files

## What to edit first

For homepage text: `index.md`

For colors/layout: `assets/css/style.css`

For menu links: `_includes/nav.html`

For your CV PDF: upload it as:

`assets/documents/kirtunia-rahul-cv.pdf`

## Adding a YouTube video

Use:

```html
<div class="video-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Project video"
    allowfullscreen>
  </iframe>
</div>
```
