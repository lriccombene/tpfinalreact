import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Categorias from "./Categorias";
import CategoriasForm from "./CategoriasForm";
import CategoriasDelete from "./CategoriasDelete";

class CategoriasComponents extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Categorias} />
                    <Route exact path='/categorias' component={Categorias} />
                    <Route exact path='/categorias/new' component={CategoriasForm} />
                    <Route
                        exact path="/categorias/:id/edit"
                        render={(routeProps) => (
                            <CategoriasForm {...routeProps} />
                        )}
                    />
                    <Route
                        exact path="/categorias/:id/delete"
                        render={(routeProps) => (
                            <CategoriasDelete {...routeProps} />
                        )}
                    />
                </div>
            </Router>
        )
    }
}

export default CategoriasComponents
