import React, {Component, useState} from 'react'
import axios from "axios"
import { Redirect } from 'react-router'
import { Container, Row, Col, Alert, Button,Form, FormGroup, Label, Input } from 'reactstrap'
import Select from "react-select";
import ImageUpload from '../Forms/ImageUploadComponent'
import firebase from 'firebase'
import * as admin from "firebase-admin";

const Api = require('./Api.js')

class ProductosForm extends Component {

  constructor(props) {
    super(props)
    //  const [loading,setLoading] = useState(false);

    this.state = {
      alert:{
        variant:"",text:""
    },
      loading:false,
      producto: {
        _id: this.getProductoId(props),
        name: '',
        sku:'',
        category :'',
        price:'',
        quantity:'',
        description:'',
        tags:[],
        images:{
          fieldname: "",
          originalname: "",
          encoding: "",
          mimetype: "",
          destination: "",
          filename: "",
          path: "",
          size: ""
        },
        uploadValue:0
      },
      redirect: null,
      errors: [],
      selectOptions : [],
      id: "",
      name: '',
      selectOptionsTag : [],
      valueTag:[],

    }

    this.setName = this.setName.bind(this)
    this.setSku = this.setSku.bind(this)
    this.setCategory = this.setCategory.bind(this)
    this.setPrice = this.setPrice.bind(this)
    this.setQuantity = this.setQuantity.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.setTag = this.setTag.bind(this)
    this.setImage= this.setImage.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)

  }




  async getOptions(){
    const res = await axios.get('http://localhost:3000/categories')
    const data = res.data

    const options = data.map(d => ({
      "value" : d._id,
      "label" : d.name

    }))

    this.setState({selectOptions2: options})
    this.setState({selectOptions: options})
  }


  handleChange(e){
    this.setState({id:e.value, name:e.label})
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
  setSku(event) {
    let newVal = event.target.value || ''
    this.setFieldState('sku', newVal)
  }
  setCategory(event) {
    let newVal = event.target.value || ''
    this.setFieldState('category', newVal)
  }
  setPrice(event) {
    let newVal = event.target.value || ''
    this.setFieldState('price', newVal)
  }
  setQuantity(event) {
    let newVal = event.target.value || ''
    this.setFieldState('quantity', newVal)
  }
  setDescription(event) {
    let newVal = event.target.value || ''
    this.setFieldState('description', newVal)
  }
  config(){
    var admin = require("firebase-admin");

    var serviceAccount = require('../../Config/serviceAccountKey.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  setImage(event) {

    this.setFieldState2('picture',event.target.files[0])
    console.log(this.state.picture)

    let newVal ={
      fieldname: 'image',
      originalname: event.target.files[0].name,
      encoding: "a",
      mimetype: event.target.files[0].type,
      destination: "firebase",
      filename:event.target.files[0].name,
      path: '/utnimages/'+event.target.files[0].name ,
      size: event.target.files[0].size
    }

    this.setFieldState('images', newVal)
  }

  setTag(event) {
    //console.log(event[0].label)
    let newVal =[]
    event.map(tag=>
        newVal.push( {name: tag.label})
    )
    this.setFieldState('tags', newVal)
  }

  setFieldState(field, newVal) {
    this.setState((prevState) => {
      let newState = prevState
      newState.producto[field] = newVal
      return newState
    })
  }

  setFieldState2(field, newVal) {
    this.setState((prevState) => {
      let newState = prevState
      newState[field] = newVal
      return newState
    })
  }


  handleSubmit (e){
   // this.state.loading(true)
   // console.log(e);
    var admin = require("firebase-admin");

    var serviceAccount = require('../../Config/serviceAccountKey.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });


    const ruta = '/utnimages/'+ this.state.picture.name
    const storageRef = firebase.storage().ref(ruta)
    const task = storageRef.put(this.state.picture)
    console.log( task)
    task.on('state_changed',snapshot=>{
          let percentage=(snapshot.bytesTransferred/snapshot.totalBytes)* 100;

          this.setState({
            uploadValue:percentage
          })},error => {console.log(error.message)},
        ()=>{
          this.setState({
            uploadValue:100,
            picture: task.snapshot.downloadURL
          });
        })

    console.log(this.state.picture)




    let producto = {
      name: this.state.producto.name,
      sku: this.state.producto.sku,
      category: this.state.producto.category,
      price: this.state.producto.price,
      quantity: this.state.producto.quantity,
      description: this.state.producto.description,
      tags: this.state.producto.tags,
      images:{
        fieldname: this.state.producto.images.fieldname,
        originalname: this.state.producto.images.originalname,
        encoding: "a",
        mimetype: this.state.producto.images.mimetype,
        destination: this.state.producto.images.destination,
        filename: this.state.producto.images.filename,
        path: this.state.producto.images.path,
        size: this.state.producto.images.size}
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
    this.getOptions()
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
                  <Input  type="text" name="name" id="name" value={producto.name} placeholder="Ingrese nombre" onChange={this.setName} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Sku</Label>
                  <Input type="text" name="sku" id="sku" value={producto.sku} placeholder="Ingrese sku" onChange={this.setSku} />
                </FormGroup>

                <FormGroup>
                  <Label for="tag">Tag </Label>
                  <div>

                    <Select  name="tag" id="tag" options={this.state.selectOptions2} onChange={this.setTag} isMulti />
                    {
                      this.state.valueTag === null ? "" : this.state.valueTag.map(v => <h4>{v.label}</h4>)
                    }
                  </div>

                </FormGroup>

                <FormGroup>
                  <Label for="category">Categorias</Label>
                  <Input type="select" name="category" id="category" onChange={this.setCategory}>
                    {this.state.selectOptions.map((list ,i)=>
                        <option key={i} value={list.value}>{list.label}
                        </option>)}
                  </Input>
                </FormGroup>



                <FormGroup>
                  <Label for="name">Precio</Label>
                  <Input  type="text" name="price" id="price" value={producto.price} placeholder="Ingrese precio" onChange={this.setPrice} />
                </FormGroup>
                <FormGroup>
                  <Label for="name">Cantidad </Label>
                  <Input  type="text" name="quantity" id="name" value={producto.quantity} placeholder="Ingrese cantidad" onChange={this.setQuantity} />
                </FormGroup>



                <FormGroup>
                  <Label for="name">Descripcion </Label>
                  <Input  type="text" name="description" id="name" value={producto.description} placeholder="Ingrese descripcion" onChange={this.setDescription} />
                </FormGroup>

                <ImageUpload change={this.setImage} />

                <Button color="success">Guardar</Button>


              </Form>

            </Col>
          </Row>

        </Container>
      )
    }
  }
}

export default ProductosForm
