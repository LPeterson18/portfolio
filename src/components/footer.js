import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component{


  render(){
    return(
      <>
      <Container fluid>
        <Row className="justify-content-sm-center">
          <span style={{marginRight: '.5em'}}> Made in San Diego by Lex Peterson</span>
          <a href='https://www.linkedin.com/in/lex-peterson/' style={{marginRight: '.5em'}}> <FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "black"}}/> </a>
          <a href='https://github.com/LPeterson18'><FontAwesomeIcon icon={faGithub} size="2x" style={{color: "black"}}/></a>
        </Row>
      </Container>
      </>
    )
  }
}
export default Footer
