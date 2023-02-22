import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
