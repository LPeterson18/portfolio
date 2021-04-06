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
        <Row className="justify-content-sm-center">
          <h1>About Me</h1>
        </Row>
        <Row fluid>
          <Col>
          </Col>
          <Col xs={4} md={4} lg={3}>
            <Image src={Profile} roundedCircle fluid/>
          </Col>
            <Col>
            </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col  xs lg="10">
            <p>
              Highly motivated full stack web developer experienced with extensive project background individually and in pair and mob programming teams. Strong analytical mind with ability to use technical knowledge to solve complex problems. Track record of consistently meeting project deadlines under challenging environments. Developed problem solving skills and enthusiasm for finding creative solutions from previous engineering background.
            </p>
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
