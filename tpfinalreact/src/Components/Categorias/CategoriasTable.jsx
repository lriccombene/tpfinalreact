import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Table } from 'reactstrap'

class CategoriasTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categorias: props.categorias
    }
  }

  render() {
    const categorias = this.state.categorias
    if (categorias.length === 0) {
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
            {categorias.map((categoria,i) => (
              <tr key={categoria._id}>
                <td>{i+1}</td>
                <td>{categoria.name}</td>

                <td>
                  <Link className="btn btn-success" to={`/categorias/${categoria._id}/edit`}>Editar</Link>{' '}
                  <Link className="btn btn-danger" to={`/categorias/${categoria._id}/delete`}>Borrar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }
  }
}

export default CategoriasTable
