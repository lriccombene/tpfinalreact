import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import ProductsPage from "../../Pages/ProductsPage";
import HistoryPage from "../../Pages/HistoryPage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
function RoutesWebComponents(){
    return(
        <>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/login' exact component={LoginPage}></Route>
            <Route path='/about' exact component={AboutPage}></Route>
            <Route path='/history' exact component={HistoryPage}></Route>
            <Route path='/products' exact component={ProductsPage}></Route>
            <Route path='/contact' exact component={ContactPage}></Route>


        </>
    )
}
export default RoutesWebComponents;