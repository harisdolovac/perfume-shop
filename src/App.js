import React, { useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [addedItems, setAddedItems] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <Router>
      <div className="wrapper">
        <div className="App">
          <Header total={total} />
          <Switch>
            <Route exact path="/">
              <Home
                addedItems={addedItems}
                setAddedItems={setAddedItems}
                setTotal={setTotal}
              />
            </Route>
            <Route exact path="/shop">
              <Shop
                addedItems={addedItems}
                setAddedItems={setAddedItems}
                setTotal={setTotal}
                total={total}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
