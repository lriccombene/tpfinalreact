import React from 'react'
import '../style.css';
import MenuComponents from "../Components/MenuComponents/MenuComponents";
import Logo from "../Components/Logo";
class AboutPage extends React.Component{
    render(){
        return (
            <div id="wrapper">
                <MenuComponents />
                <Logo />
                <div>About Estamos en Login</div>
            </div>
        )
    }

}

export default AboutPage
