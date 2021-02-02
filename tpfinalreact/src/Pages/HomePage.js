import React,{Component} from 'react';
//import {BrowserRouter,Route} from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import '../style.css';

import Logo from "../Components/Logo";
import PageComponents from "../Components/PageComponents";
import BoxComponents from "../Components/BoxComponents/BoxComponents.js";
//import Box2Components from "../Components/BoxComponents/Box2Components";
/*
Object { name: "t1@gmail.com", email: "t1@gmail.com", password: "Slam2016" }
 */

class HomePage extends Component{
    render(){
        return (

                <div id="wrapper">
                    <Logo />
                    <PageComponents />
                    <BoxComponents top='1'/>
                    <BoxComponents top='2'/>
                    <BoxComponents top='3'/>
                    <BoxComponents top='4'/>



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