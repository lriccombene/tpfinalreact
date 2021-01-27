import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Table } from 'reactstrap'

class ProductosTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productos: props.productos.docs
    }
  }

  render() {
    const productos = this.state.productos

    if (productos.length === 0) {
      return <div></div>
    } else {
      return (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto,i) => (
              <tr key={producto._id}>
                <td>{i+1}</td>
                <td>{producto.name}</td>

                <td>
                  <Link className="btn btn-success" to={`/productosabm/${producto._id}/edit`}>Editar</Link>{' '}
                  <Link className="btn btn-danger" to={`/productosabm/${producto._id}/delete`}>Borrar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }
  }
}

export default ProductosTable
