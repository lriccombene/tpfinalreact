import React from "react"
import {Route} from "react-router-dom"
import HomePages from '../../Pages/HomePages'
import LoginPages from '../../Pages/LoginPages'
import AdminPage from "../../Pages/AdminPage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
import HistoryPage from "../../Pages/HistoryPage";
import RegistroPages from '../../Pages/RegistroPages'
import CategoriasPage from "../../Pages/CategoriasPage";
import ProductosPage from "../../Pages/ProductosPage";
import CategoriasComponents from "../Categorias";
import ProductosComponents from "../Productos";

import ProductoDetallePages from '../BoxComponents/ProductoDetallePages'
import HomePage from "../../Pages/HomePage";

function RoutesWebComponents(){
    return(
        <>
        <Route path="/" exact component={HomePage}/>

            <Route path="/login" exact component={LoginPages}/>
            <Route path="/registro" exact component={RegistroPages}/>


            <Route path="/productos/:id" exact component={ProductoDetallePages}/>

            <Route path="/admin" exact component={AdminPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/history" exact component={HistoryPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route path="/categorias" exact component={CategoriasComponents}/>
            <Route path="/productosabm" exact component={ProductosComponents}/>

        </>
    )
}
export default RoutesWebComponents;
