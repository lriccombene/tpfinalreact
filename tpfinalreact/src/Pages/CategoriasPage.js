import React,{useState} from "react"
import {Form,Container} from 'react-bootstrap'

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

            </Container>
        </>
    )

}
export default CategoriasPage

