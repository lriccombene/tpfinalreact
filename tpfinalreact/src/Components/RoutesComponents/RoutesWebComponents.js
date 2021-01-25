import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import ProductsPage from "../../Pages/ProductsPage";
import HistoryPage from "../../Pages/HistoryPage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
import ProductsDetailPage from "../../Pages/ProductsDetailPage";
import RegisterPage from "../../Pages/RegisterPage";
function RoutesWebComponents(){
    return(
        <>
            <Route path='/' exact component={HomePage}></Route>

            <Route path='/about' exact component={AboutPage}></Route>
            <Route path='/history' exact component={HistoryPage}></Route>
            <Route path='/products' exact component={ProductsPage}></Route>
            <Route path='/products:id' exact component={ProductsDetailPage}></Route>

            <Route path='/register' exact component={RegisterPage}></Route>
            <Route path='/contact' exact component={ContactPage}></Route>


        </>
    )
}
export default RoutesWebComponents;