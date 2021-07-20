import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignInSide from "./component/login";
import SignUpSide from "./component/signup";
import ViewTodo from "./component/todo";
import "./App.css";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   <div className="App">
  //     {token}
  //     <SignInSide />
  //   </div>;
  // }
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
            <Route path="/signup">
              <SignUpSide />
            </Route>
            <Route path="/login">
              <SignInSide />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
