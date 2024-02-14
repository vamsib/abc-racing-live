import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import routes, { Route } from "./routes";
import { getTitles } from "./utils";

export const Page = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const { t } = useTranslation();

  const pageTitles = useMemo(() => {
    return getTitles(routes as Route[]);
  }, [routes]);

  useEffect(() => {
    document.title = t(pageTitles[location.pathname]);
  }, [location, pageTitles]);

  return <>{children}</>;
};
