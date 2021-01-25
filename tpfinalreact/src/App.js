import React,{Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import './style.css';
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
class App extends Component{
  render(){
    return (
<>
    <BrowserRouter>
        <RoutesWebComponents />
        <RoutesAdminComponents />

    </BrowserRouter>
</>
    );
  }
}
export default App;