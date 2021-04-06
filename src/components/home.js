import React, { Component } from 'react'
import { Container, Row } from  'react-bootstrap'
import './home.css'

class Home extends Component{


  render(){
    return(
      <>
      <div className='homestyle'>
      <Container>
        <Row className="justify-content-sm-center">
          <h1 className='name'>Lex Peterson</h1>
        </Row>
        <Row className="justify-content-sm-center">
          <h2 className='title'>Full Stack Developer</h2>
        </Row>
      </Container>
      </div>
      </>
    )
  }
}
export default Home
