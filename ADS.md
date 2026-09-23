# ADS.md — earning setup (GBA Arena + Java Vault)

## Slots (already placed)
- `gba.html` → `#ad-top` banner (970×250)
- `gba-play.html` → `#adbox` rewarded (watch → claim enables)
- `index.html` hero → earn button (same rewarded flow)

## Step 1 — Ad network
- Option A (easy): Google AdSense → auto ads + display unit code paste in slots
- Option B (gaming, higher rate): Adsterra/Unity Ads rewarded video → `watchAd()` er moddhe real `show()` call, `onReward` e `claim()` enable (demo 5s timer ekhon placeholder)

## Step 2 — ROM hosting
- ROM links `ROMS={0:'https://...'}` in `gba-play.html` (CORS-friendly host: jsDelivr/GitHub releases/R2)
- Legal: "bring your own ROM" upload ache — nijer upload kora ROM public korben na

## Step 3 — Earning math (honest)
- 1000 plays × 2 ads × $1-3 eCPM (BD traffic) ≈ $2-6/1000 plays
- Volume game: SEO (game names) + TikTok/YouTube shorts + school/college share
- Coin sink: 1 coin = 1 min, ad = +30 → daily active = revenue
