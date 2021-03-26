import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
      <br></br>
      <Container fluid>
        <Row className="justify-content-md-center">
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
        <Row className="justify-content-md-center">
          <Col  xs lg="10">
            <p>
              In tincidunt aliquet lorem tempor euismod. Pellentesque vel velit scelerisque est pretium gravida. In fermentum eleifend lacus at egestas. Maecenas ultricies nisi at scelerisque auctor. Etiam mi justo, sodales id fermentum eget, pulvinar ac urna. Maecenas at diam sollicitudin, scelerisque mauris ut, scelerisque dui. Cras placerat viverra felis. Praesent vitae auctor orci, sit amet tincidunt risus. Aenean ac blandit mauris. Nullam vitae finibus eros. Donec sit amet dui vitae tortor convallis euismod id ornare diam. Aenean in suscipit turpis. Nunc pulvinar laoreet augue ut posuere.
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
