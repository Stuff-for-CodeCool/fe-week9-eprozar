import React from "react";
import { render } from "react-dom";

import "./index.css";

import App from "./App.jsx";

const base = window.location.href.slice(
    0,
    window.location.href.lastIndexOf("/")
);
document.head.querySelector("base").href = base;

render(<App />, document.getElementById("root"));
