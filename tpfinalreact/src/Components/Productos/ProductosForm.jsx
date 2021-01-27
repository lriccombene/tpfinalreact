import React, {Component, useState} from 'react'
import { Redirect } from 'react-router'
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import AlertCustom from "../AlertCustom";

const Api = require('./Api.js')

class ProductosForm extends Component {
  constructor(props) {
    super(props)
    //  const [loading,setLoading] = useState(false);

    this.state = {
      alert:{
        variant:"",text:""
    },
      producto: {
        _id: this.getProductoId(props),
        name: '',
      },
      redirect: null,
      errors: []
    }

    this.setName = this.setName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getProductoId(props) {
    try {
      return props.match.params._id
    } catch (error) {
      return null
    }
  }

  setName(event) {
    let newVal = event.target.value || ''
    this.setFieldState('name', newVal)
  }


  setFieldState(field, newVal) {
    this.setState((prevState) => {
      let newState = prevState
      newState.producto[field] = newVal
      return newState
    })
  }


   handleSubmit (e){
    //setLoading(true)
    //console.log(form);
     let producto = {
       name: this.state.producto.name,
     }
     console.log(producto)
     Api.saveProducto(producto)
        .then(data=>{
              //console.log('grabo okey')
          if(data.data){
            console.log('grabo okey')
            this.setState({
              alert:{
                variant:"success",
                text:"La producto se grabo correctamente"
              }
            })
            //history.push("/")
          }else{
            this.setState({
              alert:{
                variant:"danger",
                text:"ERROR"
              }
            })
          }
        })
    e.preventDefault()
  }



  componentDidMount() {
    if (this.state.producto._id) {
      Api.getProductos(this.state.producto._id)
        .then(response => {
          const [error, data] = response
          if (error) {
            this.setState({
              errors: data
            })
          } else {
            this.setState({
              producto: data,
              errors: []
            })
          }
        })
    }
  }

  render() {
    const { redirect, producto, errors } = this.state

    if (redirect) {
      return (
        <Redirect to={redirect} />
      )
    } else {

      return (
        <Container>
          <Row>
            <Col>
              <h3>Editar producto</h3>

              {errors.length > 0 &&
                <div>
                  {errors.map((error, index) =>
                    <Alert color="danger" key={index}>
                      {error}
                    </Alert>
                  )}
                </div>
              }

              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Nombre</Label>
                  <Input type="text" name="name" id="name" value={producto.name} placeholder="Ingrese nombre" onChange={this.setName} />
                </FormGroup>

                <Button color="success">Guardar</Button>
              </Form>

            </Col>
          </Row>
          <AlertCustom variant={this.state.alert.variant} text={this.state.alert.text} />
        </Container>
      )
    }
  }
}

export default ProductosForm
