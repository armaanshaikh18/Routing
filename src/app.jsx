import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./component/navigation";
import Products from "./component/products";
import Home from "./component/home";
import Admin from "./component/admin";
import Contact from "./component/contact";
import Product from "./component/product";
import NotFound from "./component/notfound";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route
            path="/products"
            exact
            render={(props) => <Products data="angular" {...props} />}
          />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/not-found" exact component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
export default App;
