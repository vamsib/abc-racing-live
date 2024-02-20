import React from "react";
import { I18nextProvider } from "react-i18next";
import { StaticRouter } from "react-router-dom/server";
import App from "./app";
import routes from "./routes";
import { getTitles } from "./utils";

const ServerApp = ({ req, css }: React.PropsWithChildren<any>) => {
  const titles = getTitles(routes);
  console.log(req.t(titles[req.path]));
  function getCSS() {
    return { __html: css };
  }
  return (
    <I18nextProvider i18n={req.i18n}>
      <html className="ds-h-full">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <title>{req.t(titles[req.path]) || "ABC Racing"}</title>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin=""
          ></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          ></link>
          <link
            rel="preload"
            href="/assets/fa-solid-900-ZZETRIYD.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          ></link>
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
            rel="stylesheet preload prefetch"
            as="style"
          ></link>
          <style dangerouslySetInnerHTML={getCSS()}></style>
        </head>
        <body className="ds-h-full ds-font-body">
          <div id="root" className="ds-h-full ds-m-0">
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </div>
        </body>
      </html>
    </I18nextProvider>
  );
};

export default ServerApp;
