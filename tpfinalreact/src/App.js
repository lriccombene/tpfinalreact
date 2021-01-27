import React, {Component, useContext} from "react";
import './App.css';


import MenuComponents from './Components/MenuComponents/index'
import {BrowserRouter} from "react-router-dom"
import RoutesAdminComponents from "./Components/RoutesComponents/RoutesAdminComponents";
import RoutesWebComponents from "./Components/RoutesComponents/RoutesWebComponents";

import GlobalState from "./Context/GlobalState";

import './style.css';
import NetContext from "./Context/NetContext";
class App extends Component{

  constructor(){
    super()
    //Define el state
    this.state={
      opciones:[
        {
          path:"/",
          label:"Incio"
        },
        {
          path:"/login",
          label:"Login"
        },
        {
          path:"/registro",
          label:"Registro"
        },{
          path: '/products',
          label: 'Productos'
        },{
          path:'/history',
          label:'history'
        },
        {
          path: '/about' ,
          label: 'Quines Somos'
        },{
          path: '/contact',
          label: 'Contacto'
        },{
          path:'/admin',
          label:'admin'
        }
      ],
      usuario:{
        name:"Leandro",
        rol:"web"
      }
    }
  }
  
  handleClickTitle(){
    this.setState({
      titulo:"Chau Mundo"
    })
  }
  handleClickLogin = ()=>{


    //Modifica el valor de state
    this.setState({
      usuario:{
        name:"Leandro",
        rol:localStorage.getItem('rol')
      }
    })
  }
  

  render(){

    return (
      <>
      <GlobalState>  
        <BrowserRouter>
          <div id="wrapper">
            <MenuComponents options={this.state.opciones} click={this.handleClickLogin} />
            {
              this.state.usuario.rol==="admin" && <RoutesAdminComponents />
            }
            {
              this.state.usuario.rol!=="admin" && <RoutesWebComponents />
            }
          </div>
        </BrowserRouter>
      </GlobalState>

      </>

      
    );
  }
  
}

export default App;
