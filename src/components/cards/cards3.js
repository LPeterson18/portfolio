import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import Blog from '../../pictures/blogappimage.png'


class Cards3 extends Component{


  render(){
    return(
      <>
      <section id="#link2">
      <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src={Blog} />
        <Card.Body>
          <Card.Title>Ruby|Rails|HTML</Card.Title>
          <Card.Text>
            Full stack blogging web app with full CRUD functionality. Users can create new blog posts and read, update, and delete old posts.
          </Card.Text>
          <Button variant="dark" href='https://github.com/LPeterson18'>Check it out!</Button>
        </Card.Body>
      </Card>
      </section>
      </>
    )
  }
}
export default Cards3;
