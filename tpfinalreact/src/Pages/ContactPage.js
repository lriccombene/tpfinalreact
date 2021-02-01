import React from 'react'
import '../style.css';

class ContactPage extends React.Component{

    // inicializamos nuestro estado inicial
    constructor(props) {
        super(props);
        this.state = {
            form: [],
            alert: false,
            alertData: {}
        };
    }
    showAlert(type, message) {
        this.setState({
            alert: true,
            alertData: { type, message }
        });
        setTimeout(() => {
            this.setState({ alert: false });
        }, 4000)
    }

    // Con esta funcion borramos todos los elementos del formulario
    resetForm() {
        this.refs.contactForm.reset();
    }

    // Funcion para enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
        // Detiene la acción predeterminada del elemento
        e.preventDefault();

        // Creamos un objeto con los valores obtenidos de los inputs
        const params = {
            name: this.inputName.value,
            email: this.inputEmail.value,
            city: this.inputCity.value,
            phone: this.inputPhone.value,
            message: this.textAreaMessage.value
        };

        // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
        if (params.name && params.email && params.phone && params.phone && params.message) {
            // enviamos nuestro objeto "params" a firebase database

            // limpiamos nuestro formulario llamando la funcion resetform
            this.resetForm();
        } else {
            // En caso de no llenar los elementos necesario despliega un mensaje de alerta
            this.showAlert('warning', 'Please fill the form');
        };
    }

    render(){
        return (
            <div>

                <div className='container' style={{ padding: `40px 0px` }}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h2>Formulario de Contacto</h2>
                            <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >
                                <div className='form-group'>
                                    <label htmlFor='name'>Nombre</label>
                                    <input type='text' className='form-control' id='name'
                                           placeholder='Name' ref={name => this.inputName = name}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='exampleInputEmail1'>Email</label>
                                    <input type='email' className='form-control' id='email'
                                           placeholder='Email' ref={email => this.inputEmail = email}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='city'>Ciudad</label>
                                    <select className='form-control' id='city' ref={city => this.inputCity = city}>
                                        <option value='Bs As'>Bs AS</option>
                                        <option value='CABA'>CABA</option>
                                        <option value='Mar del Plata'>Mar del Plata</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='phone'>Telefono</label>
                                    <input type='number' className='form-control' id='phone'
                                           placeholder='+52 1' ref={phone => this.inputPhone = phone}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='message'>Mensaje</label>
                                    <textarea className='form-control' id='message'
                                              rows='3' ref={message => this.textAreaMessage = message}>
                  </textarea>
                                </div>
                                <button type='submit' className='btn btn-primary'>Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ContactPage
