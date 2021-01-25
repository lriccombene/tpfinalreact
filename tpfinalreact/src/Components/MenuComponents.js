import React from 'react'
import '../style.css';
import {Link} from "react-router-dom";

const styles={
    link:{
        textDecoration: 'none',
        color: '#5BA689'
    }
}

class MenuComponents extends React.Component{
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
                rol:"web"
            }
        }
    }
    render(){
        return (
            <div id='menu-wrapper'>
                <div id='menu' className='container'>

                <ul>
                    <li className='current_page_item'><Link to='/' style={styles.link}>Inicio</Link></li>
                    <li><Link to='/products' style={styles.link}>Productos</Link></li>
                    <li><Link to="/about" style={styles.link}>Quienes Somos</Link></li>
                    <li><Link to="/history" style={styles.link}>Nuestra Historia</Link></li>
                    <li><Link to="/login" style={styles.link}>Login</Link></li>
                    <li><Link to="/contact" style={styles.link}>Contacto</Link></li>

                </ul>



                </div>






            </div>
        )
    }

}

export default MenuComponents
