import React,{Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import './style.css';

import Menu from "./Components/Menu";
import Logo from "./Components/Logo";
import Page from "./Components/Page";
import Box from "./Components/Box";
import Box2 from "./Components/Box2";

class App extends Component{
  render(){
    return (

        <div id="wrapper">
          <Menu />
          <Logo />
          <Page />
          <Box />
          <Box2 />
        </div>
    );
  }
}
export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/