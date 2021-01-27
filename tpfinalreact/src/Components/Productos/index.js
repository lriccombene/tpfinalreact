import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Productos from "./Productos";
import ProductosForm from "./ProductosForm";
import ProductosDelete from "./ProductosDelete";

class ProductosComponents extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Productos} />
                    <Route exact path='/productosabm' component={Productos} />
                    <Route exact path='/productosabm/new' component={ProductosForm} />
                    <Route
                        exact path="/productosabm/:id/edit"
                        render={(routeProps) => (
                            <ProductosForm {...routeProps} />
                        )}
                    />
                    <Route
                        exact path="/productosabm/:id/delete"
                        render={(routeProps) => (
                            <ProductosDelete {...routeProps} />
                        )}
                    />
                </div>
            </Router>
        )
    }
}

export default ProductosComponents
