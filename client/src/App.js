import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Styles
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

// Componentes
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello world!</code>
        </p>
      </header>
    </div>
  );
}

export default App;
