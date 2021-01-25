import React from 'react'
import '../style.css';
class PageComponents extends React.Component{
    render(){
        return (
            <div id="page" className="container">
                <div>
                    <div className="entry">
                        <p>El almacen de barrio <strong>Hernestito </strong>,aqui puedes, comprar los mejores productos
                            <a href="/products" rel="nofollow">Lista de productos</a>. Tenemos las mejores ofertas en frutas, verdutas de estacion
                             <a href="/productos/destacados"> Ofertas</a>. Somos tu mejor opcion
                             <a href="/about">Quienes Somos</a> </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default PageComponents
