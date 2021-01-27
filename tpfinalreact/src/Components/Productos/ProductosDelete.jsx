import React, { Component } from 'react'
import { Redirect } from 'react-router'

const Api = require('./Api.js')
class ProductosDelete extends Component {
  constructor(props) {
    super(props)
    console.log(props.match.params.id);
    this.state = {
      alert:{
        variant:"",text:""
      },
      id: props.match.params.id,
      redirect: null
    }
  }

  componentDidMount() {
    Api.deleteProductos(this.state.id)
        .then(data=>{
          //console.log('borro okey')
          if(data.data){
            console.log('borro okey')


            //history.push("/")
          }else{
            console.log('borro OUT')

          }
        })
  }

  render() {

      return (

        <Redirect  to='/productosabm' />
      )
    }


}

export default ProductosDelete
