import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import  App  from "./src/App";
import { AddSubject } from "./pages/AddSubject";
import { Courses } from "./pages/Courses";

export const routerLinks = {
  ADD_SUBJECT: {
    path: "/addSubject",
    element: <AddSubject />,
  },
  HOME: {
    path: "/",
    element: <Home />,
  },
  COURSES: {
    path: "/courses",
    element: <Courses />
  }
};
export const routerConfig = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: routerLinks.HOME.path,
        element: routerLinks.HOME.element,
      },
      {
        path: routerLinks.ADD_SUBJECT.path,
        element: routerLinks.ADD_SUBJECT.element,
      },
      {
        path: routerLinks.COURSES.path,
        element: routerLinks.COURSES.element,
      },
    ],
  },
];
export const router = createBrowserRouter(routerConfig);
