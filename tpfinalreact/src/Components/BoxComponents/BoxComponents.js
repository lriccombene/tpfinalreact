import React from 'react'
import '../../style.css';

import axios from 'axios';
import ContentComponents from "./ContentComponents";

const api = axios.create({
    baseURL:'http://localhost:3000/products',


})

class BoxComponents extends React.Component{
    nro=0;
    state = {
        products: []
    }


    constructor(){
        super();
        this.state={
            products:[],
            tbox:'tbox',


        }


    }
    componentDidMount() {
        axios.get('https://localhost:3000/products').then(res=>{
            console.log(res)
            this.state.products({products:res.data});
        })
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
                            <ContentComponents product={this.state.product}/>
                        </div>
                    </div>
                )}
            </div>
        )
    }

}

export default BoxComponents