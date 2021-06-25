import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import PokeDeck from '../../pictures/pokedeckgif.gif'


class Cards extends Component{


  render(){
    return(
      <>
      <section id="#link6">
      <Card>
        <Card.Img variant="top" src={PokeDeck} />
        <Card.Body>
          <Card.Title>React|JavaScript|HTML|CSS</Card.Title>
          <Card.Text>
            Full stack, Pokemon trading card collection game with React frontend and rails backend.  View available cards, create account to collect and favorite cards and to compete with other users for highest value deck.
          </Card.Text>
          <Button variant="dark" href='https://pokedeck-game.herokuapp.com/'>Check out live website!</Button>
          <Button variant="dark" href='https://github.com/LPeterson18/pokedeck_capstone_app/tree/main'>Check out Repo!</Button>

        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards;
