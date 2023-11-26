import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProjectProvider } from "./contexts/ProjectContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { ModalProvider } from "./contexts/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProjectProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ProjectProvider>
    </UserProvider>
  </React.StrictMode>
);
