import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Resume = lazy(() => import("../pages/Resume"));
const Contact = lazy(() => import("../pages/Contact")); 
const Services = lazy(() => import("../pages/Services"));
const Projects = lazy(() => import("../pages/Projects"));
const ProjectsDetails =lazy(() => import("../pages/ProjectsDetails"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact",element: <Contact /> },
  { path: "/services", element: <Services />},
  { path: "/projects", element: <Projects />},
  {path: "/projectsDetails/:id", element: <ProjectsDetails />}
];

export default routes;
