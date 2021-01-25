import React from 'react'
import '../style.css';
import MenuComponents from "../Components/MenuComponents/MenuComponents";
import Logo from "../Components/Logo";
function ProductsDetailPage (props){

        return (
            <div id="wrapper">
                <MenuComponents />
                <Logo />
                <div>Products Details Estamos
                         {props.match.params.id}</div>
            </div>
        )


}

export default ProductsDetailPage
