import React,{useState} from "react"
import {Form,Button,Container} from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {create} from "../Services/UsuariosServices"
function CategoriasPage(){
    const [form,setForm] = useState({name:'',email:'',password:''});
    const [loading,setLoading] = useState(false);
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        setLoading(true)
        console.log(form);
        create(form)
            .then(data=>{
                    console.log("Data",data)
                    setLoading(false)
                },
                error=>{
                    console.log("error",error)
                    setLoading(false)
                })
        e.preventDefault()
    }
    return(
        <>
        <Container>
            <Form onSubmit={handleSubmit}>

                <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="name" value={form.name} change={handleChange}/>


                <ButtonWithLoading text="Guardar" loading={loading}/>
            </Form>
        </Container>
            <Container>
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </Table>
            </Container>
        </>
    )

}
export default CategoriasPage

