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
      <Routes>
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
        >
          <Route
            path="settings"
            element={
              <Suspense fallback={<PageLoading />}>
                <Settings />
              </Suspense>
            }
          />
          <Route path="project">
            <Route
              path="upload/:projectId"
              element={
                <Suspense fallback={<PageLoading />}>
                  <Project />
                </Suspense>
              }
            />
            <Route
              path="configuration/:projectId"
              element={
                <Suspense fallback={<PageLoading />}>
                  <Configuration />
                </Suspense>
              }
            />
            <Route
              path="transcript/:projectId"
              element={
                <Suspense fallback={<PageLoading />}>
                  <EditTranscript />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoading />}>
              <RootLayout />
            </Suspense>
          }
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
    </Router>
  );
}

export default App;
