import React, {useState} from "react"
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap';
import {Venta} from '../../Services/VentasServices'
import NetContext from "../../Context/NetContext";
function ProductoComponents({producto,verDetalle}) {

    const [image,setImage] = useState([]);


    const handleClick = async (e)=>{
        e.preventDefault();
        let result = await Venta({
            "products":[producto._id]
        })
        console.log(result)
        if(result["data"]["mp"]){
            window.open(result["data"]["mp"]["body"]["init_point"],'_blank');
        }
    }
    return(
        <NetContext.Consumer>
            {context=>(
                <Card style={{ width: '18rem',marginTop:"10px" }}>
                    <Card.Img variant="top" src={producto.image_path} />
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                        {producto.price_currency}

                        </Card.Text>
                        <Card.Text>

                            {producto.description}
                        </Card.Text>

                        {
                            verDetalle &&
                            <Link to={"/productos/"+producto.id}><Button variant="primary">Ver Detalle</Button></Link>
                        }

                        {
                            !verDetalle &&
                            <Card.Text>

                                 {producto.category.name}
                                </Card.Text> &&
                            <Card.Text>

                                {producto.sku}
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