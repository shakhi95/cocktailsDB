import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";

//components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cocktail/:id" component={SingleCocktail} />
        <Route exact path="*" component={Error} />
      </Switch>
    </HashRouter>
  );
};

export default App;
