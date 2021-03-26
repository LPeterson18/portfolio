import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './cards'
import Cards2 from './cards2'
import ListGroup from 'react-bootstrap/ListGroup'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'



class Projects extends Component{


  render(){
    return(
      <>
      <section id="projects">
      <br></br>
      <br></br>
      <br></br>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className="justify-content-md-center">
        <h1>Projects</h1>
      </Row>
        <Row className="justify-content-lg-center">
          <Col sm={4} md={{ offset: 2 }}>
            <ListGroup>
            <ListGroup.Item>Select A Project</ListGroup.Item>
              <ListGroup.Item action variant="dark" action href="#link1">
                Jungle Cat Tic-Tac-Toe
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" action href="#link2">
                Second Project
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" action href="#link3">
                Second Project
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" action href="#link4">
                Second Project
              </ListGroup.Item>
              <ListGroup.Item action variant="dark" action href="#link5">
                Second Project
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={6} >
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Cards />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Cards2 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Cards2 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <Cards2 />
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <Cards2 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </section>
      </>
    )
  }
}
export default Projects
