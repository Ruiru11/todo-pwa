import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SignInSide from "./component/login";
import SignUpSide from "./component/signup";
import ViewTodo from "./component/todo";
import "./App.css";

function App() {
  // const [token, setToken] = useState();

  const tokenValue = localStorage.getItem("todoToken")

  // if(tokenValue.length > 10){
  //   setToken(tokenValue)
  // }

  if (!tokenValue) {
    <div className="App">
      {tokenValue}
      <SignInSide />
    </div>;
  }

  console.log("token", localStorage.getItem("todoToken"))

  console.log(tokenValue)
  return (
    <div className="App">
      <Router>
        <div>
          {tokenValue !==null &&  <nav>
            <ul>
              {/* <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li> */}
              <li>
                <Link to="/todo">todo</Link>
              </li>
              <li>
                <Link to="/">todo</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav> }
         

          <Switch>
            <Route path="/signup">
              <SignUpSide />
            </Route>
            <Route path="/login">
              <SignInSide />
            </Route>
            <Route path="/todo">
              <ViewTodo />
            </Route>
            <Route path="/">
              <ViewTodo />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
