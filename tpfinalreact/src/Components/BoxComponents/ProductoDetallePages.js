import React,{useState,useEffect} from "react"
import ProductoComponents from "./ProductoComponents"
import {getProducto} from "../../Services/ProductosServices";
import {Link} from "react-router-dom";
import {Venta} from "../../Services/VentasServices";
import firebase from "firebase";
function ProductoDetallePages(props){
    const [producto,setProducto] = useState([]);
    const [loading,setLoading] = useState(true);

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
            async function fetchData() {
                const response = await getProducto(props.match.params.id)
                console.log(response.data.images.filename );
                setProducto(response.data);

                const ruta = '/utnimages/'+response.data.images.filename
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
                        var img = document.getElementById('myimagen');
                        img.setAttribute('src', url);
                        setImage(url);

                    })
                    .catch((error) => {
                        // Handle any errors
                    });







                setLoading(false);






            }
            fetchData();
        }, []);  
    return(
        <>
        {
            loading && <div>Loading ...</div>
        }
        {
            !loading && 
            <div>



                <div className="content">
                    <div className="image"><img id='myimagen' src={image} width="324" height="200" alt=""/></div>
                    <h2>{producto.name}</h2>
                    <p>{'Precio $' + producto.price.toFixed(2) }</p>
                    <p>{producto.sku}</p>
                    <p>{producto.description}</p>
                    <p>{producto.category.name}</p>


                    <Link  to={'/'} className="button"  onClick={handleClick} >Comprar</Link>




                </div>


            </div>
        }
        
        </>
    )
    
}
export default ProductoDetallePages