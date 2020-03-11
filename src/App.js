import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
