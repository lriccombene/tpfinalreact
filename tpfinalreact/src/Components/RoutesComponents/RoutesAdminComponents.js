import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
import CategoriasPage from "../../Pages/CategoriasPage";
import ProductosPage from "../../Pages/ProductosPage";
function RoutesAdminComponents(){
    return(
        <>
            <Route path="/" exact component={HomePages}/>
            <Route path="/categorias" exact component={CategoriasPage}/>
            <Route path="/productos" exact component={ProductosPage}/>
            <Route path="/login" exact component={LoginPages}/>

        </>
    )
}
export default RoutesAdminComponents;
