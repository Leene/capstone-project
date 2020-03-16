### Allgemeines Projekt setup mit git, parcel und co

-   Repo erstellen, clonen
-   `npm init`
-   `npm i parcel-bundler`
-   Start script in package.json: "start": `parcel -d docs index.html` bzw. `"parcel --no-cache src/index.html --open"`
-   Build script in package.json: "build": `parcel build -d docs --public-url=./ index.html`
-   `index.html` und `styles.scss` erstellen, verlinken per <link rel="stylesheet" href="styles.scss">
-   `.gitignore erstellen:` - .DS_Store - node_modules - .cache
    wenn möglich alle assets in src-Ordner als sibling zum dist-Ordner
    npm start - script installiert automatisch sass als dependency, da es eine scss-Datei im <link> findet
    parcel startet Development Server unter localhost:1234 oder anderem Port, wenn besetzt

### React app erstellen:

1. `npx create-react-app my-app` im master des projekts
2. `cd my-app`
3. `npm start`
