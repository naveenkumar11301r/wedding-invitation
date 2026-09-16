# In Full Bloom : Naveen & Ramya 🌸

A premium, soft, joyful digital wedding invitation website built with Next.js, Framer Motion, and Tailwind CSS. 
This project revolves entirely around a singular blossom motif unfolding section by section with ambient petal drifts. There is no RSVPs, no scrolling central spine, and no couple photographs—pure elegance.

## Change Names & Details
Edit:
```text
src/config/weddingData.js
```
*Note this doesn't have RSVPs. It's an informational site only.*

## Change Music
Replace:
```text
public/music/wedding-song.mp3
```

## Change Venue
Edit:
```text
weddingData.reception.venue
weddingData.reception.address
weddingData.reception.mapUrl
```

## Run Locally
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm start
```

## Deploy to Netlify
The repository contains a `netlify.toml` which automatically instructs Netlify on the correct build parameters. Simply link your GitHub repo to a Netlify site, and it will deploy smoothly without extra APIs or server code aside from Next.js server actions.
