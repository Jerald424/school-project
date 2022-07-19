import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";
import reportWebVitals from "./reportWebVitals";
import Chart from "./StatusBar/Chart";
import NavBarAndStatus from "./StatusBar/navbarStatus/NavBarAndStatus";
import StatusBar from "./StatusBar/StatusBar";
import StudenDataDisplay from "./StudentDataDisplay/StudenDataDisplay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StudenDataDisplay />
    {/* <ErrorBoundry /> */}
    {/* <NavBarAndStatus /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
