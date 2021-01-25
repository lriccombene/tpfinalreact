import React,{Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import '../style.css';

import MenuComponents from "../Components/MenuComponents/MenuComponents";
import Logo from "../Components/Logo";
import PageComponents from "../Components/PageComponents";
import BoxComponents from "../Components/BoxComponents/BoxComponents.js";
import Box2Components from "../Components/BoxComponents/Box2Components";


class HomePage extends Component{
    render(){
        return (

                <div id="wrapper">
                    <MenuComponents />
                    <Logo />
                    <PageComponents />
                    <BoxComponents />
                    <Box2Components />

                </div>


        );
    }
}
export default HomePage;

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