import React, { Component } from 'react'
import { Redirect } from 'react-router'

const Api = require('./Api.js')
class CategoriasDelete extends Component {
  constructor(props) {
    super(props)
    console.log(props.match.params.id);
    this.state = {

      id: props.match.params.id,
      redirect: null
    }
  }

  componentDidMount() {
    Api.deleteCategorias(this.state.id)
      .then(response => {
        const [error] = response
        if (error) {
          // TODO: set flash
        }
        this.setState({
          redirect: '/categorias'
        })
      })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={this.state.redirect} />
      )
    } else {
      return (
        <div></div>
      )
    }
  }

}

export default CategoriasDelete
