
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

export const deleteCategorias = (id)=>{

  return instance.delete("/categories/"+id);
}

export const deleteCategorias2 = (id) => {
  let response_ok = null
  return fetch(`${apiHost}/api/categories/${id}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    response_ok = response.ok
    if (response.status === 204) {
      return ''
    } else {
      return response.json()
    }
  })
  .then(response => {
    if (response_ok) {
      return [false, response]
    } else {
      return [true, collectErrors(response)]
    }
  })
}

export const getCategorias = () => {
  let response_ok = null
  return fetch(`${apiHost}/categories`, {
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

export const getCategoria = (id) => {
  let response_ok = null
  return fetch(`${apiHost}/categories/${id}`, {
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
export const saveCategoria = (data)=>{

  return  instance.post("/categories/",data)
}
export const saveCategoria2 = (data, id=null) => {
  let apiUrl = `${apiHost}/categories`
  let apiMethod = 'categories'
  if (id) {
    apiUrl = `${apiUrl}/${id}`
    apiMethod = 'put'
  }

  const body = JSON.stringify({
    categoria: data
  })

  let response_ok = null
  return fetch(apiUrl, {
    method: apiMethod,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  })
  .then(response => {
    response_ok = response.ok
    return response.json()
  })
  .then(response => {
    if (response_ok) {
      return [false, null]
    } else {
      return [true, collectErrors(response)]
    }
  })
}
/*
module.exports = {
  saveCategoria: saveCategoria,
  getCategoria: getCategoria,
  deleteCategorias: deleteCategorias,
  getCategorias: getCategorias
}
*/