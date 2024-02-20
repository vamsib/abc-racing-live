import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import routes from "./routes";
import LanguageDetector from "i18next-browser-languagedetector";
import { withSSR } from "react-i18next";
import resources from "./resources.json";
import "./app.tw.css";

i18n
  .use(LanguageDetector)
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

// const router = typeof window !== "undefined" && createBrowserRouter(routes);

type RouteSpec = {
  path: string;
  element: ReactNode;
  children?: RouteSpec[];
};

function renderRoute({ path, element, children }: RouteSpec) {
  return (
    <Route key={path} path={path} element={element}>
      {children && children.length && children.map(renderRoute)}
    </Route>
  );
}

function App() {
  return (
    <div className="app ds-h-full">
      <Routes>{routes.map((route) => renderRoute(route))}</Routes>
    </div>
  );
}

export default App;
