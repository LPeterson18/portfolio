import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import TicTac from '../pictures/tictactoeimage.png'


class Cards2 extends Component{


  render(){
    return(
      <>
      <section id="#link2">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={TicTac} />
        <Card.Body>
          <Card.Title>Second Project</Card.Title>
          <Card.Text>
            The second project I made.
          </Card.Text>
          <Button variant="dark">Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards2;
