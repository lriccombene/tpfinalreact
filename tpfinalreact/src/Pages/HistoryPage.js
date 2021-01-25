import React from 'react'
import '../style.css';
import MenuComponents from "../Components/MenuComponents";
import Logo from "../Components/Logo";
class HistoryPage extends React.Component{
    render(){
        return (
            <div id="wrapper">
                <MenuComponents />
                <Logo />
                <div>History Estamos en Login</div>
            </div>
        )
    }

}

export default HistoryPage
