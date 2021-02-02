import React, {Component} from 'react'
import { Redirect } from 'react-router'
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import AlertCustom from "../AlertCustom";

const Api = require('./Api.js')

class CategoriasForm extends Component {
  constructor(props) {
    super(props)
    //  const [loading,setLoading] = useState(false);

    this.state = {
      alert:{
        variant:"",text:""
    },
      categoria: {
        _id: this.getCategoriaId(props),
        name: '',
      },
      redirect: null,
      errors: []
    }

    this.setName = this.setName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getCategoriaId(props) {
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
      newState.categoria[field] = newVal
      return newState
    })
  }


   handleSubmit (e){
    //setLoading(true)
    //console.log(form);
     let categoria = {
       name: this.state.categoria.name,
     }
     console.log(categoria)
     Api.saveCategoria(categoria)
        .then(data=>{
              //console.log('grabo okey')
          if(data.data){
            console.log('grabo okey')
            this.setState({
              alert:{
                variant:"success",
                text:"La categoria se grabo correctamente"
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
    if (this.state.categoria._id) {
      Api.getCategorias(this.state.categoria._id)
        .then(response => {
          const [error, data] = response
          if (error) {
            this.setState({
              errors: data
            })
          } else {
            this.setState({
              categoria: data,
              errors: []
            })
          }
        })
    }
  }

  render() {
    const { redirect, categoria, errors } = this.state

    if (redirect) {
      return (
        <Redirect to={redirect} />
      )
    } else {

      return (
        <Container>
          <Row>
            <Col>
              <h3>Editar categoria</h3>

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
                  <Input type="text" name="name" id="name" value={categoria.name} placeholder="Ingrese nombre" onChange={this.setName} />
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

export default CategoriasForm
