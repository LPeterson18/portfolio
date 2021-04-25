import React, { Component } from 'react'
import { Container, Row, Col } from  'react-bootstrap'

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
        <Row>
          <Col sm={{span:3, offset: 2 }}>
            <Row style={{fontWeight:"bold", textDecoration:'underline'}}>Languages</Row>
            <Row>JavaScript</Row>
            <Row>Ruby</Row>
            <Row>SQL</Row>
            <Row>HTML</Row>
            <Row>CSS</Row>
          </Col>
          <Col sm={{span:3}}>
            <Row style={{fontWeight:"bold", textDecoration:'underline'}}>Frameworks</Row>
            <Row>React</Row>
            <Row>Ruby on Rails</Row>
            <Row>Bootstrap</Row>
          </Col>
          <Col sm={{span:3}}>
            <Row style={{fontWeight:"bold", textDecoration:'underline'}}>Miscellaneous</Row>
            <Row>PostreSQL</Row>
            <Row>Jest</Row>
            <Row>Rspec</Row>
            <Row>Git</Row>
            <Row>Figma</Row>
          </Col>
        </Row>
        <br></br>
      </Container>
      </section>
      </>
    )
  }
}
export default TechnicalSkills
