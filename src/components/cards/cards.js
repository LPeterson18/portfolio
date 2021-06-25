import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import TicTac from '../../pictures/tictactoeimage.png'


class Cards extends Component{


  render(){
    return(
      <>
      <section id="#link1">
      <Card>
        <Card.Img variant="top" src={TicTac} />
        <Card.Body>
          <Card.Title>React|JavaScript|HTML|CSS</Card.Title>
          <Card.Text>
            A jungle cat themed Tic-Tac-Toe game made using React.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18/tic-tac-toe'>Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards;
