import React from 'react'
import '../../style.css';
import {Link} from "react-router-dom";
import ProductoComponents from "../ProductoComponents";
class ContentComponents extends React.Component{
    constructor(){
        super();
        this.state= {
            idproduct:''
        }
     }

    render(){
        return (
            <div className="content">
                <div className="image"><img src="images/img01.jpg" width="324" height="200" alt=""/></div>
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.description}</p>
                <Link  to={'/productos/'+ this.props.product._id} className="button" >Carrito</Link>
            </div>

        )
    }


}
export default ContentComponents
