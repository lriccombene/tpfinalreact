import React, { Component } from 'react'
import { Redirect } from 'react-router'

const Api = require('./Api.js')
class CategoriasDelete extends Component {
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
    Api.deleteCategorias(this.state.id)
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

        <Redirect  to='/categorias' />
      )
    }


}

export default CategoriasDelete
