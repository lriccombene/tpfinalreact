import React from 'react'
import '../style.css';
import ContentComponents from "./ContentComponents";
class BoxComponents extends React.Component{
    nro=0;
    constructor(){
        super();
        this.state={
                products:[{
                            _id:1,
                            name:'Manzanas 2 KG $250',
                            description:'Manzanas de estacion Rojas oferta $150 x kg'
                          },
                          {
                              _id:2,
                              name : 'Heineken Pack 750cc $600',
                              description:'Cerveza en Lata  Pack x 6 Precio por por unidad $130 '
                          },
                          {
                              _id:3,
                              name:'Fideos Don Vicente $100',
                              description:'Fideos al HUevo por 500 gr '
                          }],
                tbox:'tbox',


        }

    }
    handleClickDetalle = ()=>{
        this.nro = this.nro+1;
    }
    render(){
        return (
            <div id="three-column" className="container">

                {this.state.products.map((product,i)=>

                    <div className={this.state.tbox +(i+1)}>
                        <div className="box-style box-style01">
                            <ContentComponents product={product}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }

}

export default BoxComponents
