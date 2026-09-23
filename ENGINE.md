# ENGINE.md — freej2me-web build + deploy

Source already cloned: `engine-src/` (zb3/freej2me-web, GPL).

## Build (Docker thaka PC/server e, 1 bar)
```
cd engine-src
docker build --build-arg UID=$(id -u) -t freej2me-web-builder builder_image
docker run --rm -it -v`pwd`:/app freej2me-web-builder ant
```
Output: `web/` folder (run.html + jar + libs).

## Deploy
1. `web/` er content `java-arcade/engine/` e copy koren
2. `player.html` e `ENGINE_BASE = './engine/run.html'` (already set)
3. Game JAR URL CORS-enabled host e thakte hobe (engine `?app=<jarUrl>` diye load kore)
4. Hosting e deploy (Firebase/GitHub Pages/any static)

## Test
- `player.html?g=0` → iframe e game boot howa uchit
- Na hole browser console e CheerpJ error dekhen (net + WebGL lage)
- Sob JAR cholbe na — library te "tested ✓" tag den jegula chole
