import React from 'react'
import '../style.css';
class Menu extends React.Component{
    render(){
        return (
            <div id='menu-wrapper'>
                <div id='menu' className='container'>

                <ul>
                    <li className='current_page_item'><a href='#'>Inicio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Links</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>



                </div>






            </div>
        )
    }

}

export default Menu
