import React, { Component } from "react";
import {
  Route,
  Link,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/js/dist/dropdown';


import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Home from "./components/home.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showUserBoard: user.roles.includes("ROLE_USER"),
        showHostBoard: user.roles.includes("ROLE_HOST"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showUserBoard, showHostBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top" style={{padding: "5px"}}>
          <Link to={"/"} className="navbar-brand">
             Nexum
          </Link>
          <div className="navbar-nav ml-auto">
          {currentUser ? (
            <div className="navbar-nav" >
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                  {currentUser.username}
                </a>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbarDropdownMenuLink" style = {{margin: "5px"}}>
                  <Link to={"/profile"} className="nav-link text-dark" style = {{textAlign: "center"}}>
                    Profile
                  </Link>
                  <a href="/login" className="nav-link text-dark" onClick={this.logOut} style = {{textAlign: "center"}}>
                    Log out
                  </a>
                </div>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ">
              <li className="nav-item ml-auto">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item ml-auto">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
          </div>
        </nav>

        <div className="container mt-3" >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;