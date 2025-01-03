import React from 'react'

import TopBar from "./components/topbar/TopBar";
import Home from "./pages/homepage/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";

function App() {
  const user=true;
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route excat path="/"><Home /></Route>
          <Route path="/register">{user ? <Home/> :<Register/>}</Route>
          <Route path="/login">{user ? <Home/>:<Login/>}</Route>
          <Route path="/write">{user ? <Write/> : <Register/>}</Route>
          <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
          <Route path="/post/:postID"><Single /></Route>
        </Switch>
    </Router>
  );
}

export default App;
