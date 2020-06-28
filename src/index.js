import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Avatar from "./Avatar";

ReactDOM.render(<Avatar />, document.getElementById("root"));

serviceWorker.unregister();
