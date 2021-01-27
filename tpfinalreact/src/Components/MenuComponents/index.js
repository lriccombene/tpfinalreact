import React,{Component} from "react";
import OptionComponents from "./OptionComponents"
import { Navbar,  Nav} from 'react-bootstrap';
import NetContext from '../../Context/NetContext'
import '../../style.css';
class MenuComponents extends Component{
  render(){
    return (
      <NetContext.Consumer>
        {
          context=>(
            
            <Navbar bg="dark" expand="lg" style={{marginBottom:'10px'}}  >
              <Navbar.Brand href="/">Ernestito</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto"  id='menu' >

                    {

                      (localStorage.getItem('rol') == 'web' && context.login )&&
                      <>
                        <OptionComponents key="home" option={{label:"Incio",path:"/"}} />
                        <OptionComponents key="home" option={{label:"Historia",path:"/history"}} />
                        <OptionComponents key="home" option={{label:"Quienes Somos",path:"/about"}} />
                        <OptionComponents key="home" option={{label:"Contacto",path:"/contact"}} />

                        <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                      </>
                    }
                    {

                      (localStorage.getItem('rol') == 'admin' && context.login )&&
                      <>
                        <OptionComponents key="home" option={{label:"Incio",path:"/"}} />
                        <OptionComponents key="home" option={{label:"Historia",path:"/history"}} />


                        <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                      </>
                    }

                    {
                      !context.login &&
                      <>

                        <OptionComponents key="home" option={{label:"History",path:"/history"}} />
                        <OptionComponents key="home" option={{label:"Quienes Somos",path:"/about"}} />
                        <OptionComponents key="home" option={{label:"Contacto",path:"/contact"}} />
                        <OptionComponents key="home" option={{label:"Registro",path:"/registro"}} />
                        <OptionComponents key="home" option={{label:"Login",path:"/login"}} />
                        <OptionComponents key="home" option={{label:"Admin",path:"/admin"}} />

                      </>
                    }
                  </Nav>
              
              </Navbar.Collapse>
            </Navbar>
          )
        }        
        
      </NetContext.Consumer>   
        
      
    );
  }
  
}

export default MenuComponents;
