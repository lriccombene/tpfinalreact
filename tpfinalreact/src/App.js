import React,{Component} from 'react';
import {BrowserRouter} from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
import './style.css';
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
class App extends Component{
    constructor(){
        super()
        //Define el state
        this.state={
            opciones:[
                {
                    path:"/",
                    label:"Home"
                },
                {
                    path:"/login",
                    label:"Login"
                },
                {
                    path:"/registro",
                    label:"Registro"
                }
            ],
            usuario:{
                name:"Leandro",
                rol:"admin"
            }
        }
    }

  render(){
    return (
<>
    <BrowserRouter>
        {
            //si es verdadera la condicion ejecuta routes
            this.state.usuario.rol==="admin" && <RoutesAdminComponents />
        }
        {
            this.state.usuario.rol!=="admin" && <RoutesWebComponents />
        }

    </BrowserRouter>
</>
    );
  }
}
export default App;