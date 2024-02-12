import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./app";
import path from 'path';
import { getCssText } from "./ds/stitches.config";

let app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: function(res, path, stat){
    if (path.endsWith('.css')) {
      console.log("setting content type");
      res.set("Content-Type", "text/css");
    }
  }
}))

app.get("*", (req, res) => {
  console.log(req.url);
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const basePage = `<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
      <link href="/assets/client.css" rel="stylesheet" type="text/css"></link>
      <style id="stitches">${getCssText()}</style>
      <script defer src="/assets/client.js"></script>
    </head>
    <body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root">${html}</div></body>
  </html>`
  res.send(basePage);
});

// app.use(express.static('assets'));

app.listen(3000);