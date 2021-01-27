import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
import CategoriasPage from "../../Pages/CategoriasPage";
import ProductosPage from "../../Pages/ProductosPage";
import ProductoComponents from "../ProductoComponents";

function RoutesAdminComponents(){
    return(
        <>
            <Route path="/" exact component={HomePages}/>
            <Route path="/categorias" exact component={CategoriasPage}/>
            <Route path="/productosabm" exact component={ProductoComponents}/>

            <Route path="/login" exact component={LoginPages}/>

        </>
    )
}
export default RoutesAdminComponents;
