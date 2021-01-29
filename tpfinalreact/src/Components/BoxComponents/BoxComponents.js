import React, {useEffect, useState} from 'react'
import '../../style.css';

import axios from 'axios';
import ContentComponents from "./ContentComponents";
import {getProductos,getProductosTop} from "../../Services/ProductosServices";

const api = axios.create({
    baseURL:'http://localhost:3000/products',


})

function BoxComponents(props) {
    const [products,setProductos] = useState([]);
    const [buscar,setBuscar] = useState("");
    const [loading,setLoading] = useState(true);
    const [tbox,setTbox] = useState('tbox');

    useEffect(
() => {
    async function fetchData() {
        setLoading(true);
        const response = await getProductos()
        //console.log("Data",response)
        const result=[];
        if(props.top ==='1'){
            //console.log( response.data.docs[1])
            result.push( response.data.docs[0])
            result.push(response.data.docs[1])
            result.push(response.data.docs[3])
            setProductos(result);
        }else if(props.top ==='2'){
            //console.log( response.data.docs[4] +'---'+response.data.docs[5]+ '---'+ response.data.docs[6])
            result.push( response.data.docs[4])
            result.push(response.data.docs[5])
            result.push(response.data.docs[6])
            setProductos(result);
        }else if(props.top ==='3'){
            //console.log( response.data.docs[1])
            result.push( response.data.docs[5])
            result.push(response.data.docs[6])
            result.push(response.data.docs[7])
            setProductos(result);
        }else if(props.top ==='4'){
            //console.log( response.data.docs[1])
            result.push( response.data.docs[8])
            result.push(response.data.docs[9])
            result.push(response.data.docs[10])
            setProductos(result);
        }
       // console.log(result)
        /*}else if(){
            setProductos(response.data.docs);
        }else{
        }*/




        //setProductos(response.data.docs);



        setLoading(false);
    }
    fetchData();
    }, [buscar],);
    const handleChange = (e)=>{
        setBuscar(e.target.value)
    }

        return (
            <div id="three-column" className="container">
                {products.map((product,i)=>

                    <div className={ tbox +(i+1)}>
                        <div className="box-style box-style01">
                            <ContentComponents product={product}/>
                        </div>
                    </div>
                )}
            </div>
        )


}

export default BoxComponents