import { Outlet } from "react-router-dom";
import News from "./apps/news/News";
import Shell from "./apps/shell/Shell";
import Live from "./apps/live/Live";
import { Suspense } from "react";
import Schedules from "./apps/schedules/Schedules";
import Rankings from "./apps/rankings/Rankings";
import Login from "./apps/user/Login";
import SignUp from "./apps/user/SignUp";

export default [
  {
    path: "/",
    element: (
      <Shell>
        <Outlet></Outlet>
      </Shell>
    ),
    children: [
      {
        path: "/news",
        element: (
          <>
            <Suspense fallback={<div>Live timings loading!</div>}>
              <Live></Live>
            </Suspense>
            <News></News>
          </>
        ),
      },
      {
        path: "/schedules",
        element: <Schedules></Schedules>,
      },
      {
        path: "/rankings",
        element: <Rankings></Rankings>,
      },

      {
        path: "/user/login",
        element: <Login></Login>,
      },
      {
        path: "/user/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
];
