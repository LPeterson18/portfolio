import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import TicTac from '../../pictures/apartmentimage.png'


class Cards extends Component{


  render(){
    return(
      <>
      <section id="#link5">
      <Card>
        <Card.Img variant="top" src={TicTac} />
        <Card.Body>
          <Card.Title>React|JavaScript|HTML|CSS|Ruby|Rails</Card.Title>
          <Card.Text>
            Full stack, apartment listing website with React frontend and rails backend. View existing apartments and create account to add, edit, and delete your own.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18/apartment-app-LPeterson18'>Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards;
