import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import ResumePage from "./pages/resume"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ResumePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
