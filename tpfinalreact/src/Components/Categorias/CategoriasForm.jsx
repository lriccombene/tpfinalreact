import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Container, Row, Col, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Api = require('./Api.js')

class CategoriasForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

  handleSubmit(event) {
    event.preventDefault()

    let categoria = {
      name: this.state.categoria.name,
    }

    Api.saveCategoria(categoria, this.state.categoria.id)
      .then(response => {
        const [error, errors] = response
        if (error) {
          this.setState({
            errors: errors
          })
        } else {
          this.setState({
            redirect: '/categoria'
          })
        }
      })
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
        </Container>
      )
    }
  }
}

export default CategoriasForm
