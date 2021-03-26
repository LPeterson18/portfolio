import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
        <Row className="justify-content-md-center">
        <Col xs lg="8">
        <h1>Contact Me:</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
