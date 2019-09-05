import React, { Fragment } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Styles
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

// Layouts de páginas
import NavBar from "./layout/NavBar";

// Páginas
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Hello world!</code>
          </p>
        </header>
      </Fragment>
    </Router>
  );
}

export default App;
