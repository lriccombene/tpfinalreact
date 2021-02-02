import React, {useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
import {Venta} from '../../Services/VentasServices'
import NetContext from "../../Context/NetContext";

import firebase from "firebase";

function ProductoComponents(props) {

    const [image,setImage] = useState([]);


    const handleClick = async (e)=>{
        e.preventDefault();
        let result = await Venta({
            "products":[props.producto._id]
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
                const ruta = '/utnimages/'+props.producto.images.filename
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
                        var img = document.getElementById('a');
                        img.setAttribute('src', url);
                        setImage(url);

                    })
                    .catch((error) => {
                        // Handle any errors
                    });
            }
            getImage();
        }, []);



    return(
        <NetContext.Consumer>
            {context=>(
                <Card style={{ width: '18rem',marginTop:"10px" }}>
                    <Card.Img variant="top" src={image} id='a' />
                    <Card.Body>
                        <Card.Title>{props.producto.name}</Card.Title>
                        <Card.Text>
                        {props.producto.price_currency}

                        </Card.Text>
                        <Card.Text>

                            {props.producto.description}
                        </Card.Text>

                        {
                            props.verDetalle &&
                            <Link to={"/productos/"+props.producto.id}><Button variant="primary">Ver Detalle</Button></Link>
                        }

                        {
                            !props.verDetalle &&
                            <Card.Text>

                                 {props.producto.category.name}
                                </Card.Text> &&
                            <Card.Text>

                                {props.producto.sku}
                            </Card.Text>

                        }
                        {context.login &&
                            <Button variant="primary" onClick={handleClick}>Comprar</Button>
                        }
                        
                    </Card.Body>
                </Card>
            )}
        
        </NetContext.Consumer>
    )
    
}
export default ProductoComponents