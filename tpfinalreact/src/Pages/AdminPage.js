import React,{useContext, useState} from "react"
import {Form,Container} from 'react-bootstrap'
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import {loginAdmin} from "../Services/UsuariosServices"
import AlertCustom from "../Components/AlertCustom"
import NetContext from "../Context/NetContext"


function AdminPage(){
        const context = useContext(NetContext);
    const [form,setForm] = useState({email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        setLoading(true)
        console.log(form);
        loginAdmin(form)
            .then(data=>{
                    console.log("Data",data)
                    if(data.data.token){
                        context.loginUser(data.data.token);
                        const rol= 'admin';
                        localStorage.setItem("rol",rol)

                        setAlert({variant:"success",text:"Bienvenido/a"})
                        //history.push("/")
                    }else{
                        setAlert({variant:"danger",text:"Ha ocurrido un error"})
                    }
                    setLoading(false)
                },
                error=>{
                    console.log("error",error)
                    setLoading(false)
                })
        e.preventDefault()
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>

                <FormGroup label="Usuario" type="text" placeholder="Ingrese su usuario" name="user" value={form.user} change={handleChange}/>
                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>

                <ButtonWithLoading text="Ingresar" loading={loading}/>
            </Form>
            <AlertCustom variant={alert.variant} text={alert.text} />
        </Container>
    )

}
export default AdminPage