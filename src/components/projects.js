import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap'
import './projects.css'
import Cards from './cards/cards'
import Cards2 from './cards/cards2'
import Cards3 from './cards/cards3'
import Cards4 from './cards/cards4'
import Cards5 from './cards/cards5'

class Projects extends Component{


  render(){
    return(
      <>
      <section id="projects">
      <br></br>
      <br></br>
      <Container fluid>
      <Tab.Container id="projects" defaultActiveKey="#link1">
      <Row className="justify-content-sm-center">
        <h1>Projects</h1>
      </Row>
        <Row className="justify-content-lg-center">
          <Col sm={4} md={{ offset: 2 }}>
            <ListGroup>
            <ListGroup.Item>Select A Project</ListGroup.Item>
              <ListGroup.Item action variant="dark" href="#link1">
                Jungle Cat Tic-Tac-Toe
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" href="#link2">
                Pig Latin Translator
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" href="#link3">
                Blog App
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" href="#link4">
                Wildlife Tracker
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" href="#link5">
                Cat Tinder
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Cards />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Cards2 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Cards3 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Cards4 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <Cards5 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
      </section>
      </>
    )
  }
}
export default Projects
