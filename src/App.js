import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnavbar from './Layout/Navbar';
import MainPage from './Layout/MainPage';
import SideDrawer from "./Layout/SideDrawer";
import NavContextProvider from './contexts/NavContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChartPage from './Layout/ChartPage';



class App extends Component {
  render() {
 
    return (
      <Router>
        <Switch>
          <NavContextProvider>
            <Route path="/" exact component={MainPage} />
            <Route path="/chartpage" exact component={ChartPage} />
            <SideDrawer />
          </NavContextProvider>
        </Switch>
      </Router>        
    );
  }
}

export default App;
