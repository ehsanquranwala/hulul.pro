import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Home from "views/Home/Home.jsx";
import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import EhsanProfile from "views/EhsanProfile/EhsanProfile.jsx";
import Mohtashim from  "views/MohtashimProfile/MohtashimProfile.jsx"
import LoginPage from "views/LoginPage/LoginPage.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
{/*      <Route path="/react" component={ReactPage} />
      <Route path="/angular" component={AngularPage} />
      <Route path="/django" component={DjangoPage} />
      <Route path="/laravel" component={LaravelPage} />*/}
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/ehsan-profile" component={EhsanProfile} />
      <Route path="/Mohtashim-profile" component={Mohtashim}/>
      <Route path="/login-page" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
