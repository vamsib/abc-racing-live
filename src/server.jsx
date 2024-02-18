import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./app";
import path from 'path';
import { getCssText } from "./ds/stitches.config";
import { I18nextProvider, initReactI18next } from 'react-i18next';
import routes from "./routes";
import resources from "./resources.json";
import { getTitles } from "./utils";
var i18next = require('i18next')
var middleware = require('i18next-http-middleware')
const compression = require('compression')

const titles = getTitles(routes);

i18next
.use(middleware.LanguageDetector)
.use(initReactI18next)
.init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources,
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

let app = express();

app.use(compression());

app.use(
  middleware.handle(i18next, {
  })
)

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: function(res, path, stat){
    if (path.endsWith('.css')) {
      console.log("setting content type");
      res.set("Content-Type", "text/css");
    }
  }
}))

app.get("*", (req, res) => {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <I18nextProvider i18n={req.i18n}><App /></I18nextProvider>      
    </StaticRouter>
  );
  const basePage = `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${req.t(titles[req.path]) || "ABC Racing"}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link rel="preload" href="/assets/fa-solid-900-ZZETRIYD.woff2" as="font" type="font/woff2" crossorigin>
      <link rel="preload" href="https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2" as="font" type="font/woff2" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet preload prefetch" as="style">
      <link href="/assets/client.css" rel="stylesheet" type="text/css"></link>
      <style id="stitches">${getCssText()}</style>
      <script defer src="/assets/client.js"></script>
    </head>
    <body><div id="root">${html}</div></body>
  </html>`
  res.send(basePage);
});

// app.use(express.static('assets'));

app.listen(3000);