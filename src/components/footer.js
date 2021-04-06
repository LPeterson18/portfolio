import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

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
