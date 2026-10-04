# Kirtunia Rahul — GitHub Pages Portfolio

A simple responsive portfolio website built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` — main website
- `styles.css` — styling
- `script.js` — mobile menu and automatic footer year

## Publish with GitHub Pages

1. Upload these files to the root of your GitHub repository.
2. Open your repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your main branch (usually `main`) and folder `/ (root)`.
6. Save.
7. GitHub will display your live website URL after deployment.

## Important edits before publishing

### Contact links
In `index.html`, replace:

- `YOUR_EMAIL@example.com`
- `YOUR-LINKEDIN`
- `YOUR-USERNAME`

### Videos
Search for this line in `index.html`:

```html
https://www.youtube.com/embed/dQw4w9WgXcQ
```

Replace it with your own YouTube embed URL.

For example, if your normal URL is:

```text
https://www.youtube.com/watch?v=ABC123xyz
```

use:

```text
https://www.youtube.com/embed/ABC123xyz
```

### Add a profile photo
Replace the `<div class="avatar-placeholder">KR</div>` block with:

```html
<img class="profile-photo" src="your-photo.jpg" alt="Kirtunia Rahul">
```

Then upload `your-photo.jpg` into the same repository.

## Optional next additions

- Resume/CV download button
- Publications section with DOI links
- Project screenshots
- ABAQUS/SolidWorks simulation GIFs
- Research poster gallery
- Google Scholar link
- Custom domain
