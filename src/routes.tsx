import { Outlet } from "react-router-dom";
import News from "./apps/news/News";
import Shell from "./apps/shell/Shell";
import Live from "./apps/live/Live";
import { Suspense } from "react";
import Schedules from "./apps/schedules/Schedules";
import Rankings from "./apps/rankings/Rankings";
import Login from "./apps/user/Login";
import SignUp from "./apps/user/SignUp";
import { Page } from "./page";

export type Route = {
  path: string;
  title: string;
  element: React.ReactNode;
  children: Route[];
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
            <News></News>
          </Page>
        ),
      },
      {
        path: "/schedules",
        title: "ABCRacingSchedules",
        element: (
          <Page>
            <Schedules></Schedules>
          </Page>
        ),
      },
      {
        path: "/rankings",
        title: "ABCRacingRankings",
        element: (
          <Page>
            <Rankings></Rankings>
          </Page>
        ),
      },

      {
        path: "/user/login",
        title: "ABCRacingLogin",
        element: (
          <Page>
            <Login></Login>
          </Page>
        ),
      },
      {
        path: "/user/sign-up",
        title: "ABCRacingSignUp",
        element: (
          <Page>
            <SignUp></SignUp>
          </Page>
        ),
      },
    ],
  },
];
