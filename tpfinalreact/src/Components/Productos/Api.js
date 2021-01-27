
import instance from "../../Config/axios";

const apiHost = 'http://localhost:3000'

// TODO: base posts url

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const collectErrors = (response) => {
  let errors = []

  if (response.status === 404) {
    errors.push(response.error)
    return errors
  }

  const fields = Object.keys(response)
  fields.forEach(field => {
    const prefix = capitalizeFirstLetter(field)
    response[field].forEach(message => {
      errors.push(`${prefix} ${message}`)
    })
  })
  return errors
}

export const deleteProductos = (id)=>{

  return instance.delete("/productos/"+id);
}


export const getProductos = () => {
  let response_ok = null
  return fetch(`${apiHost}/productos`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      response_ok = response.ok
      return response.json()
    })
    .then(response => {
      if (response_ok) {
        return [false, response]
      } else {
        return [true, collectErrors(response)]
      }
    })
}

export const getProducto = (id) => {
  let response_ok = null
  return fetch(`${apiHost}/productos/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    response_ok = response.ok
    return response.json()
  })
  .then(response => {
    if (response_ok) {
      return [false, response]
    } else {
      return [true, collectErrors(response)]
    }
  })
}
export const saveProducto = (data)=>{

  return  instance.post("/productos/",data)
}

/*
module.exports = {
  saveCategoria: saveCategoria,
  getCategoria: getCategoria,
  deleteCategorias: deleteCategorias,
  getCategorias: getCategorias
}
*/