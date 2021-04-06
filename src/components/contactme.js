import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './contactme.css'



class ContactMe extends Component{


  render(){
    return(
      <>
      <section id="contactme">
      <br></br>
      <br></br>
      <br></br>
      <Container sm="6" lg="10">
      <div className="contactmebox">
        <Row className="justify-content-sm-center">
        <Col xs lg="8">
        <h1 style={{ color:'#FFFFFF' }}>Contact Me:</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formBasicTextbox">
            <Form.Label>Leave me a message!</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        </Row>
      </div>
      </Container>
      </section>
      </>
    )
  }
}
export default ContactMe
