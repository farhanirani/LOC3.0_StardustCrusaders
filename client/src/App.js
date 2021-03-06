import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import UserContext from "./context/UserContext";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage";
import LoginPage from "views/LoginPage.js";
import CreateWorkOutPage from "views/CreateWorkoutPage/CreateWorkoutPage";
import Leaderboard from "views/Leaderboard";
import WorkOutPage from "views/WorkoutPage/WorkoutPage";
// import TestLogin from 'views/TestLogin';
import HomePage from "views/HomePage/HomePage";
import CompetePage from "./views/CompetePage";
// import HomePage from "views/HomePage/HomePage";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      console.log("userRes.data");
      const tokenRes = await axios.post("/api/users/checktoken", null, {
        headers: { "x-auth-token": token },
      });
      if (tokenRes.data) {
        const userRes = await axios.get("/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/create" component={CreateWorkOutPage} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/workout" component={WorkOutPage} />

          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/compete" component={CompetePage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
