import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Error,
  Home,
  Projects,
  Project,
  Settings,
  Configuration,
  EditTranscript,
} from "./pages";
import { PageLoading } from "./components";
import { RootLayout, DashboardLayout } from "./layouts";

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route
              path="settings"
              element={<Settings />}
            />
            <Route path="project">
              <Route
                path="upload/:projectId"
                element={<Project />}
              />
              <Route
                path="configuration/:projectId"
                element={<Configuration />}
              />
              <Route
                path="transcript/:projectId"
                element={<EditTranscript />}
              />
            </Route>
          </Route>
          <Route
            path="/"
            element={<RootLayout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path="/*"
              element={<Error />}
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
