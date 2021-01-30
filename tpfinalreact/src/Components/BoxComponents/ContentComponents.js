import React, {useContext, useEffect, useState} from 'react'
import '../../style.css';
import {Link} from "react-router-dom";
import ProductoComponents from "./ProductoComponents";

import firebase from "firebase";
import {Button} from "react-bootstrap";
import {Venta} from "../../Services/VentasServices";
import NetContext from "../../Context/NetContext";
import LinkDetalleComponents from "../Forms/LinkDetalleComponents";

function ContentComponents (props){

    const context = useContext(NetContext);
    const [image,setImage] = useState([]);

    const handleClick = async (e)=>{
        e.preventDefault();
        let result = await Venta({
            "products":[props.product._id]
        })
        console.log(result)
        if(result["data"]["mp"]){
            window.open(result["data"]["mp"]["body"]["init_point"],'_blank');
        }
    }
    useEffect(
        () => {

            async function getImage  (e) {
        //const conte = useContext(NetContext);
        //this.state.context=conte;

       // console.log(this.props.product.images.filename)
       // console.log( this.props.product.images.filename )
        const ruta = '/utnimages/'+props.product.images.filename
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
                var img = document.getElementById(props.product._id);
                img.setAttribute('src', url);
                setImage(url);

            })
            .catch((error) => {
                // Handle any errors
            });
    }
            getImage();
}, []);

        return (
            <div className="content">
                <div className="image"><img id={props.product._id} src={image} width="324" height="200" alt=""/></div>
                <h2>{props.product.name}</h2>
                <p>{'Precio $' + props.product.price.toFixed(2) }</p>
                <p>{props.product.description}</p>
                {
                    props.verDetalle &&

                    <Link  to={'/productos/'+ props.product._id} className="button" >Detalle</Link>
                }{props.login &&

                    <LinkDetalleComponents  tostring='/productos/'  product={props.product} click={handleClick} value='comprar' />


            }


            </div>

        )



}
export default ContentComponents
