import express from "express";
import {renderToPipeableStream} from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./app";
import path from 'path';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import routes from "./routes";
import resources from "./resources.json";
import { getTitles } from "./utils";
import ServerApp from "./server-app";
var i18next = require('i18next')
var middleware = require('i18next-http-middleware')
const compression = require('compression')
const fs = require('node:fs');

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
    console.log(path);
    if (path.endsWith('.css')) {
      console.log("setting content type");
      res.set("Content-Type", "text/css");
    }
  }
}))

app.get("*", (req, res) => {
  let css = '';
  try {
    css = fs.readFileSync('./dist/server.css', 'utf8');
  } catch (err) {
    console.error(err);
  }
  const { pipe } = renderToPipeableStream(<ServerApp req={req} css={css}></ServerApp>, {
    bootstrapModules:['/assets/index.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
  // let html = ReactDOMServer.renderToString(
  //   <ServerApp req={req} css={css}></ServerApp>
  // );
  // res.send(html);
});

app.listen(3000);