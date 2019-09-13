import React, { Fragment } from "react";
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
import Footer from "./layout/Footer";

// Componentes
import ContactState from "./components/context/contact/contactState";
import AuthState from "./components/context/auth/authState";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <NavBar />
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Fragment>
          <Footer />
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
