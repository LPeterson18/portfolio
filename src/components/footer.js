import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../pictures/p1.JPG'

class Footer extends Component{


  render(){
    return(
      <>
      <Container fluid>
        <Row className="justify-content-sm-center">
          <p> Made in San Diego by Lex Peterson</p>
        </Row>
      </Container>
      </>
    )
  }
}
export default Footer
