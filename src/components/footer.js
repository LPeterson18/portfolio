import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../pictures/p1.JPG'



class Footer extends Component{


  render(){
    return(
      <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <p> Made in San Diego by Lex Peterson</p>
        </Row>
      </Container>
      </>
    )
  }
}
export default Footer
