import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)


function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Books'>Books</Link>
            </li>
          </ul>
        </Nav>
      </div>
      <Switch>
        <Route exact path={['/', '/Books']}>
          <Books />
        </Route>
        <Route exact path='/books/:id'>
          <Detail/>
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
