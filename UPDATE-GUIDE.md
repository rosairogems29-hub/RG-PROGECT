# Rosairo Gems — Step 5 Gemstone Manager

## Open the manager
Open `admin.html` on your website (for a live site: `/admin.html`).

## Add / edit / hide / sold / delete
1. Click **New Gemstone** to add a stone.
2. Select a stone from the left list to edit it.
3. Use **Status**: Available / Visible, Sold Out, or Hidden.
4. **Delete Selected** permanently removes it from the manager data.
5. Image uploads are resized in the browser and saved into the manager data.

## Publish changes
This is a static HTML/CSS/JS website, so the manager cannot directly write files to GitHub or Netlify. Changes are saved in the current browser for preview.

When ready to publish:
1. Click **Export Website Data** in `admin.html`.
2. A `gemstone-data.js` file downloads.
3. Replace the existing `js/gemstone-data.js` with the downloaded file.
4. Upload/commit the changed file to GitHub/Netlify.

The public collection automatically reads the manager data when it is present in the same browser, so you can preview changes before publishing.
