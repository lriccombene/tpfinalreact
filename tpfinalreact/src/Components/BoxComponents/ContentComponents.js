import React from 'react'
import '../../style.css';
import {Link} from "react-router-dom";
import ProductoComponents from "../ProductoComponents";

import firebase from "firebase";


class ContentComponents extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            idproduct:'',
            image:'',
        }

        this.getImage(this)


    }
    getImage (e) {


       // console.log(this.props.product.images.filename)
        console.log( this.props.product.images.filename )
        const ruta = '/utnimages/'+this.props.product.images.filename
        const storageRef = firebase.storage().ref()

        storageRef.child(ruta).getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                var img = document.getElementById(this.props.product._id);
                img.setAttribute('src', url);
            })
            .catch((error) => {
                // Handle any errors
            });
    }
    render(){
        return (
            <div className="content">
                <div className="image"><img id={this.props.product._id} width="324" height="200" alt=""/></div>
                <h2>{this.props.product.name}</h2>
                <p>{this.props.product.description}</p>
                <Link  to={'/productos/'+ this.props.product._id} className="button" >Carrito</Link>
            </div>

        )
    }


}
export default ContentComponents
