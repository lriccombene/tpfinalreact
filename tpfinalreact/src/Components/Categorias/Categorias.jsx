import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Alert } from 'reactstrap'
import CategoriasTable from './CategoriasTable'

const Api = require('./Api.js')

class Categorias extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    Api.getCategorias()
      .then(response => {
        const [error, data] = response
        if (error) {
          this.setState({
            isLoaded: true,
            categorias: [],
            error: data
          })
        } else {
          this.setState({
            isLoaded: true,
            categorias: data
          })
        }
      })
  }

  render() {
    const { error, isLoaded, categorias } = this.state

    if (error) {

      return (
        <Alert color="danger">
          Error: {error}
        </Alert>
      )

    } else if (!isLoaded) {

      return (
        <Alert color="primary">
          Loading...
        </Alert>
      )

    } else {

      return (
        <Container>
          <Row>
            <Col>
              <CategoriasTable categorias={categorias}></CategoriasTable>
              <Link className="btn btn-primary" to="/categorias/new">Agregar Categoria</Link>
            </Col>
          </Row>
        </Container>
      )

    }

  }
}

export default Categorias
