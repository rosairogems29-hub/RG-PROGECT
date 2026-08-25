# Rosairo Gems — Easy Collection Update Guide

The gemstone catalogue is controlled from `js/gemstone-data.js`.

## Add a new gemstone
1. Put the stone photo(s) in `assets/gems/`.
2. Open `js/gemstone-data.js`.
3. Copy an existing gemstone object.
4. Change the `id`, `name`, `category`, `subcategory`, carat, origin, treatment, etc.
5. Set `image` and `images` to your new photo paths, for example:
   `assets/gems/royal-blue-01.jpg`
6. Optional: add an MP4 path to `video`.
7. Save and publish the project.

The collection cards, filters and individual stone detail page read this data automatically.

## Main categories
- Ceylon Sapphire
- Other Gemstones
- Calibrated Sapphires
- Jewellery

This is a static-site update system: changes are made in the data file and then the updated files are published to GitHub Pages/Netlify.
