import { Outlet } from "react-router-dom";
// import News from "./apps/news/News";
import Shell from "./apps/shell/Shell";
import { lazy, Suspense, useEffect, useState } from "react";
import { Page } from "./page";

const News = lazy(() => import("./apps/news/News"));
const Schedules = lazy(() => import("./apps/schedules/Schedules"));
const Rankings = lazy(() => import("./apps/rankings/Rankings"));
const Login = lazy(() => import("./apps/user/Login"));
const SignUp = lazy(() => import("./apps/user/SignUp"));
const Live = lazy(() => import("./apps/live/Live"));

export type Route = {
  path: string;
  title: string;
  element: React.ReactNode;
  children?: Route[];
};

export default [
  {
    path: "/",
    title: "ABCRacing",
    element: (
      <Shell>
        <Outlet></Outlet>
      </Shell>
    ),
    children: [
      {
        path: "/news",
        title: "ABCRacingNews",
        element: (
          <Page>
            <Suspense fallback={<div>Live timings loading!</div>}>
              <Live></Live>
            </Suspense>
            <Suspense fallback={<div>News loading</div>}>
              <News></News>
            </Suspense>
          </Page>
        ),
      },
      {
        path: "/schedules",
        title: "ABCRacingSchedules",
        element: (
          <Page>
            <Suspense fallback={<div>Schedules loading</div>}>
              <Schedules></Schedules>
            </Suspense>
          </Page>
        ),
      },
      {
        path: "/rankings",
        title: "ABCRacingRankings",
        element: (
          <Page>
            <Suspense fallback={<div>Rankings loading</div>}>
              <Rankings></Rankings>
            </Suspense>
          </Page>
        ),
      },

      {
        path: "/user/login",
        title: "ABCRacingLogin",
        element: (
          <Page>
            <Suspense fallback={<div>Login loading</div>}>
              <Login></Login>
            </Suspense>
          </Page>
        ),
      },
      {
        path: "/user/sign-up",
        title: "ABCRacingSignUp",
        element: (
          <Page>
            <Suspense fallback={<div>Login loading</div>}>
              <SignUp></SignUp>
            </Suspense>
          </Page>
        ),
      },
    ],
  },
];
