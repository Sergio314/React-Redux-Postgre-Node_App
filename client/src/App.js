import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Shipping from "./pages/Shipping/Shipping";
import {Provider} from "react-redux";
import store from './redux/index'
import './App.css';

function App() {
  return (
      <Provider store={store()}>
        <Router>
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/shipping">
              <Shipping />
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
