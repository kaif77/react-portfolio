import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import NavMenu from "./Components/NavMenu";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavMenu/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
        </Route>
        <Route path="/skills">
          <Skills/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;