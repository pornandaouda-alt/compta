import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Blog from "../pages/blog/page";
import Contact from "../pages/contact/page";
import Services from "../pages/services/page";
import About from "../pages/about/page";
import CaseStudies from "../pages/case-studies/page";
import MentionsLegales from "../pages/mentions-legales/page";
import CGV from "../pages/cgv/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "/etudes-de-cas",
    element: <CaseStudies />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/conditions-generales",
    element: <CGV />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;