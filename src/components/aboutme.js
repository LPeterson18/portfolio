import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../pictures/p1.JPG'
import './aboutme.css'



class AboutMe extends Component{


  render(){
    return(
      <>
      <section id ='aboutme'>
      <div className='aboutmebox'>
      <br></br>
      <br></br>
      <Container fluid>
        <Row>
          <Col md={{offset:3}}>
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row fluid>
          <Col xs={4} md={4} lg={3}>
            <Image src={Profile} fluid/>
          </Col>
          <Col>
          <p>
            I'm a full stack web developer experienced with extensive project background individually and in pair and mob programming teams. Previously a mechanical engineer, I now get to apply my problem solving skills to the challenges that arise while programming. I enjoy finding creative and interesting solutions, and am always looking to level up my skills.
          </p>
          <h2 style={{fontFamily: 'Montserrat, Helvetica, Arial, sans-serif', fontWeight:"bold"}}>Contact Information</h2>
          <Row>
            <ul>
              <li>lpeterson@chorus.net</li>
              <li><a href='https://www.linkedin.com/in/lex-peterson/'>LinkedIn</a></li>
              <li><a href='https://github.com/LPeterson18'>GitHub</a></li>
            </ul>
          </Row>
        </Col>
        </Row>
      </Container>
      </div>
      </section>

      </>
    )
  }
}
export default AboutMe
