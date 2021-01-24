import React from 'react'
import '../style.css';
class Content extends React.Component{
    constructor(){
        super();
        this.state= {
            idproduct:''
        }
     }

    handleClickDetalle = ()=>{
        alert('/products/'+this.props.product._id );

        //window.location.replace('/products/'+this.props.product._id)

    }
    render(){
        return (
            <div className="content">
                <div className="image"><img src="images/img01.jpg" width="324" height="200" alt=""/></div>
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.description}</p>
                <a  className="button" onClick={this.handleClickDetalle}>Detalle</a>
            </div>
        )
    }

}

export default Content
