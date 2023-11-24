import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const Projects = lazy(() => import("./projects/Projects"));
const Project = lazy(() => import("./projects/Project"));
const EditTranscript = lazy(() => import("./projects/EditTranscript"));
const Settings = lazy(() => import("./settings/Settings"));
const Configuration = lazy(() => import("./configuration/Configuration"));
const Error = lazy(() => import("./error/Error"));

export {
  Home,
  Error,
  Projects,
  Project,
  EditTranscript,
  Settings,
  Configuration,
};
