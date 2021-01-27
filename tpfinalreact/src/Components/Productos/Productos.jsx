import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Row, Col, Alert } from 'reactstrap'
import ProductosTable from './ProductosTable'

const Api = require('./Api.js')

class Productos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      isLoaded: false,
      error: null
    }
  }

  componentDidMount() {
    Api.getProductos()
      .then(response => {
        const [error, data] = response
        if (error) {
          this.setState({
            isLoaded: true,
            productos: [],
            error: data
          })
        } else {
          //console.log(data)
          this.setState({
            isLoaded: true,
            productos: data
          })
        }
      })
  }

  render() {
    const { error, isLoaded, productos } = this.state

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
              <ProductosTable productos={productos}></ProductosTable>
              <Link className="btn btn-primary" to="/productosabm/new">Agregar productos</Link>
            </Col>
          </Row>
        </Container>
      )

    }

  }
}

export default Productos
