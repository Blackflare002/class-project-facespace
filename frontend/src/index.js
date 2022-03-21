import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserInfoProvider } from "./components/userInfoContext";

ReactDOM.render(
  <React.StrictMode>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
