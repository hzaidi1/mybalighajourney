# My Baligha Journey — Interactive Lesson

A self-contained website: menu of 14 questions, a review game, a scenario discussion,
two branching stories, a pledge, and a closing activity. No login, no build step —
just static files anyone can open in a browser.

## Files

```
index.html       the whole app (structure + styles)
app.js           all lesson content + interactivity
assets/img/      the illustrations from your original slides
```

## Try it locally first

Just double-click `index.html` to open it in any browser. Everything works offline
except the two fonts, which load from Google Fonts.

## Publish it so anyone can access it

Pick whichever feels easiest — all are free and take a few minutes.

**Netlify Drop (fastest, no account needed to try):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `my-baligha-journey` folder onto the page
3. You'll get a live link immediately (you can claim it with a free account to keep it permanently)

**GitHub Pages (free, a stable long-term link):**
1. Create a new repository on GitHub and upload these files (keep the folder structure)
2. Go to the repo's Settings → Pages
3. Set the source to your main branch, root folder
4. Your site will be live at `https://yourusername.github.io/repo-name/`

**Cloudflare Pages:**
1. Go to https://pages.cloudflare.com and connect or upload the folder
2. Deploy — you'll get a `*.pages.dev` link

## Editing the content later

All lesson text lives in `app.js` near the top, in plain arrays/objects — one entry
per question, plus the game, stories, pledge, and activity. Change text there and
refresh the page; no other file needs to change.
