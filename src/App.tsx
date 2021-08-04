import React  from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;