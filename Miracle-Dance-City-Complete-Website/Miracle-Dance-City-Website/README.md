# Miracle Dance City (MDC) – Website

A responsive black, gold and warm-beige website for Miracle Dance City, Statue Junction, Nazareth, Kochi.

## Project contents
- `index.html` – page structure and content
- `styles.css` – responsive styling and brand palette
- `script.js` – mobile navigation and WhatsApp admission enquiry
- `assets/mdc-logo-transparent.png` – supplied MDC logo with its white paper background removed
- `sitemap.xml` and `robots.txt` – search engine discovery
- `.nojekyll` – GitHub Pages static-site support

## Changes in this version
- Replaced the old logo asset with a transparent-background version of the supplied logo.
- Displayed the logo on a warm beige panel to complement the black-and-gold design.
- Top navigation contains only ABOUT, CLASSES, TRAINER, GALLERY and CONTACT.
- Removed Preferred dance style and Preferred batch/timing from the admission form.
- WhatsApp enquiry now includes student name, age, contact number and optional additional message.
- Refined header, buttons, form styling and visual spacing.

## Before publishing
Open `script.js` and update:
```js
const MDC_WHATSAPP_NUMBER = "91XXXXXXXXXX";
const MDC_INSTAGRAM_URL = "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/";
```
Use the admin's WhatsApp number with country code and digits only (India: 91 followed by the 10-digit number). Add the real Instagram profile URL.

Also replace sample gallery images, sample YouTube video, trainer placeholder and testimonial placeholder with real MDC content. Add only confirmed class timings and genuine reviews shared with permission.

## Preview locally
1. Extract this ZIP.
2. Open the `Miracle-Dance-City-Website` folder in Visual Studio Code.
3. Install the Live Server extension.
4. Right-click `index.html` and select **Open with Live Server**.

## Publish free using GitHub Pages
1. Sign in or create an account at https://github.com/
2. Create a **Public** repository named `miracle-dance-city`.
3. Open the extracted project folder and upload all its contents to the repository. Keep `index.html` at the repository root and include the `assets` folder and `.nojekyll`.
4. Commit the uploaded files.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Select branch `main` and folder `/(root)`, then Save.
8. After deployment, open the Pages URL shown by GitHub. It will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/miracle-dance-city/`

## Submit to Google
1. Open https://search.google.com/search-console/
2. Add the published URL as a URL-prefix property and verify ownership using a method Google offers.
3. Replace `YOUR-GITHUB-USERNAME` in `sitemap.xml` and `robots.txt` with the actual username, upload the changed files, then submit `/sitemap.xml` in Search Console.
4. Use URL Inspection to test the homepage and request indexing.
5. Google indexing and ranking take time and are not guaranteed by submitting a sitemap.

## WhatsApp form behaviour
The form is a static front-end form. On submission it opens WhatsApp with the student's details pre-filled for the admin number configured in `script.js`. The student must press **Send** in WhatsApp. The website does not automatically send or store the form submission.
