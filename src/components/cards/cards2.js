import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import PigLatin from '../../pictures/piglatinimage.png'


class Cards2 extends Component{


  render(){
    return(
      <>
      <section id="#link2">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={PigLatin} />
        <Card.Body>
          <Card.Title>React|JavaScript|HTML|CSS</Card.Title>
          <Card.Text>
            A website built using react that translates a user's input text to pig latin.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18'>Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards2;
