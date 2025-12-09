# No Limits Tech Repair – GitHub Pages Site

This folder contains a modern, responsive one‑page website for **No Limits Tech Repair LLC**, a Houston‑based device repair and digital services company. It’s designed for deployment on GitHub Pages under the repository `bernardr27/nolimitstechrepair`.

## Features

* **Hero slider** with full‑screen background images and overlay text.
* **Dark/light theme toggle** persisted in `localStorage`.
* **Responsive navigation** with scroll‑spy highlighting and a mobile menu.
* **Services, process, portfolio, pricing and FAQ sections** tailored for repair, web/app builds and branding.
* **Smooth reveal animations** as you scroll.
* **Contact form** that composes an email using your default mail client and copies the details to your clipboard.
* **Modular code** split into `ui.js` for UI behaviour and `plugins.js` for the contact form logic.

## Setup & Deployment

1. **Create the repository** `bernardr27/nolimitstechrepair` on GitHub (public).
2. Download or extract the contents of this folder and upload all files **directly into the root of your repo**. Do not nest them inside another folder.
3. Go to the **Pages** settings for your repository and choose:
   * **Source**: `Deploy from a branch`.
   * **Branch**: `main`.
   * **Folder**: `/ (root)`.
4. Save the settings. GitHub Pages will build your site. Refresh `https://bernardr27.github.io/nolimitstechrepair` after a few minutes to see it live.

## Customization

* **Contact email** – open `plugins.js` and update the `CONTACT_EMAIL` constant to your real address. This email is used when users click the contact button.
* **Contact info** – edit `index.html` at the `#contact` section to change the displayed email and city.
* **Colors & fonts** – adjust the CSS variables at the top of `style.css` to tune colours for dark/light themes.
* **Background images** – replace `bg1.png`, `bg2.png` and `bg3.png` with your own high‑quality images (ensure the filenames stay the same or update `@keyframes hero-slide` in `style.css`).
* **Pricing & Services** – modify the content in the corresponding sections of `index.html` to reflect your actual offerings.

## Acknowledgements

This template is handcrafted for learning purposes. It incorporates modern web design best practices such as responsive layouts, clear calls to action, accessible colour contrast and performance‑friendly animations. It is not tied to any particular framework and works entirely with HTML, CSS and vanilla JavaScript.