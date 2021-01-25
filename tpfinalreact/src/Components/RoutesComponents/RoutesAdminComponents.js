import React from "react";
import {Route} from "react-router-dom";
import LoginPage from "../../Pages/LoginPage";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import HistoryPage from "../../Pages/HistoryPage";
import ProductsPage from "../../Pages/ProductsPage";
import ContactPage from "../../Pages/ContactPage";
import ProductsDetailPage from "../../Pages/ProductsDetailPage";
function RoutesAdminComponents(){

    return (
      <>
        <Route path='/login' exact component={LoginPage}></Route>

        <Route path='/' exact component={HomePage}></Route>
        <Route path='/about' exact component={AboutPage}></Route>
        <Route path='/history' exact component={HistoryPage}></Route>
        <Route path='/products' exact component={ProductsPage}></Route><Route path='/contact' exact component={ContactPage}></Route>
        <Route path='/products/:id' exact component={ProductsDetailPage}></Route>

      </>

)
}

export default RoutesAdminComponents