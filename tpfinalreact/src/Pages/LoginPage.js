import React from 'react'
import '../style.css';
import MenuComponents from "../Components/MenuComponents";
import Logo from "../Components/Logo";
class LoginPage extends React.Component{
    render(){
        return (
            <div id="wrapper">
                <MenuComponents />
                <Logo />
                <div>Login Estamos en Login</div>
            </div>
        )
    }

}

export default LoginPage
