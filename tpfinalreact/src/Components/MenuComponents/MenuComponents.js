import React from 'react'
import '../../style.css';
import {Link} from "react-router-dom";
import OptionsComponents from "./OptionsComponents";
const styles={
    link:{
        textDecoration: 'none',
        color: '#5BA689'
    }
}

function MenuComponents (){
        const options= [
            {
                path:'/',
                label:'Inicio'
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
                path:'/login',
                label:'Login'
            },{
                path: '/contact',
                label: 'Contacto'
        }]
 /*
    <li><Link to="/login" style={styles.link}>Login</Link></li>
    <li><Link to="/contact" style={styles.link}>Contacto</Link></li>
*/
        return (
            <div id='menu-wrapper'>
                <div id='menu' className='container'>
                <ul>


                    {options.map(option=><OptionsComponents option={option} ></OptionsComponents>)}

                </ul>



                </div>






            </div>
        )


}

export default MenuComponents
