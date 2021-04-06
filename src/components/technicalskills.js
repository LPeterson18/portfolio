import React, { Component } from 'react'
import { Container, Row, Col, Image } from  'react-bootstrap'
import HTML5 from '../pictures/html5.png'

class TechnicalSkills extends Component{


  render(){
    return(
      <>
      <section id="technical">
      <br></br>
      <br></br>
      <Container fluid>
        <Row className="justify-content-sm-center">
          <h1>Technical Skills</h1>
        </Row>
        <Row className="justify-content-sm-center" fluid>
          <Col lg={{ offset: 2 }} xs={4} md={4} lg={1}>
          <p>HTML5</p>
            <Image src={HTML5} fluid/>
          </Col>
          <Col lg={{ offset: 2 }} xs={4} md={4} lg={1}>
          <p>CSS</p>
            <Image src={HTML5} fluid/>
          </Col>
          <Col lg={{ offset: 2 }} xs={4} md={4} lg={1}>
          <p>Javascript</p>
            <Image src={HTML5} fluid/>
          </Col>
        </Row>
        <Row className="justify-content-sm-center">
          <Col  xs lg="10">
            <p>
              In tincidunt aliquet lorem tempor euismod. Pellentesque vel velit scelerisque est pretium gravida. In fermentum eleifend lacus at egestas. Maecenas ultricies nisi at scelerisque auctor. Etiam mi justo, sodales id fermentum eget, pulvinar ac urna. Maecenas at diam sollicitudin, scelerisque mauris ut, scelerisque dui. Cras placerat viverra felis. Praesent vitae auctor orci, sit amet tincidunt risus. Aenean ac blandit mauris. Nullam vitae finibus eros. Donec sit amet dui vitae tortor convallis euismod id ornare diam. Aenean in suscipit turpis. Nunc pulvinar laoreet augue ut posuere.
            </p>
          </Col>
        </Row>
      </Container>
      </section>
      </>
    )
  }
}
export default TechnicalSkills
