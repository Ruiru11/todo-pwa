import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setup } from "goober";
import SignInSide from "./component/login";
import SignUpSide from "./component/signup";
import ViewTodo from "./component/todo/todo";
import "./App.css";
import { HomeContainer } from "./component/todo/styles";

setup(React.createElement);

function App() {
  const tokenValue = localStorage.getItem("todoToken");
  console.log("check token", !tokenValue);

  if (!tokenValue) {
    <div className="App">
      {tokenValue}
      <SignInSide />
    </div>;
  }

  console.log("token", localStorage.getItem("todoToken"));

  console.log(tokenValue);
  return (
    <HomeContainer>
      <Router>
        <div>
          {tokenValue && (
            <nav>
              <ul>
                {/* <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>  */}
                {/* <li>
                <Link to="/todo">todo</Link>
              </li> */}
                {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
              </ul>
            </nav>
          )}

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
          </Switch>
        </div>
      </Router>
    </HomeContainer>
  );
}

export default App;
