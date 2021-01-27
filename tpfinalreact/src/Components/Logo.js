import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
class Logo extends React.Component{
    render(){
        return (
            <div>
            <Container  id="logo" className="container">
                <Row>
                    <Col><h1><Link to="/">Ernestito</Link></h1>
                        <p>El almacen de tu barrio, siempre cerca!!! .</p>
                    </Col>
                </Row>
            </Container>



                            </div>
        )
    }

}

export default Logo
