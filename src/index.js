import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

const Div = document.createElement("div");
Div.setAttribute("id", "root");
document.body.appendChild(Div);

ReactDOM.render(<App/>, document.getElementById("root"));

