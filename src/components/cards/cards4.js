import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Wildlife from '../../pictures/wildlifetrackerimage.png'


class Cards4 extends Component{


  render(){
    return(
      <>
      <section id="#link2">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={Wildlife} />
        <Card.Body>
          <Card.Title>Ruby|Rails</Card.Title>
          <Card.Text>
            API allowing full CRUD functionality on a database containing animal characteristics and sightings.
          </Card.Text>
          <Button variant="dark">Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards4;
