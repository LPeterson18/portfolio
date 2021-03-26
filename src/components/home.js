import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from '../pictures/p1.JPG'
import './home.css'



class Home extends Component{


  render(){
    return(
      <>
      <div className='homestyle'>
      <Container>
        <Row className="justify-content-md-center">
          <h1 className='name'>Lex Peterson</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h2 className='title'>Full Stack Developer</h2>
        </Row>
      </Container>
      </div>
      </>
    )
  }
}
export default Home
