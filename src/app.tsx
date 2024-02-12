import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import routes from "./routes";

i18n.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React and react-i18next",
      },
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbackLng: "en",

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
    <div className="app">
      <Routes>{routes.map((route) => renderRoute(route))}</Routes>
    </div>
  );
}

export default App;
