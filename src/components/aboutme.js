import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../pictures/p1.JPG'
import './aboutme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



class AboutMe extends Component{


  render(){
    return(
      <>
      <section id ='aboutme'>
      <div className='aboutmebox'>
      <br></br>
      <br></br>
      <Container fluid>
        <Row className="justify-content-center">
          <h1>About Me</h1> 
        </Row>
        <Row>
          <Col md={{ offset: 1 }} lg={3}>
            <Image src={Profile} fluid/>
            <Row className="justify-content-center">
              <div>
                <a href='https://www.linkedin.com/in/lex-peterson/'><FontAwesomeIcon icon={faLinkedin} size="3x" style={{color: "black"}}/> </a>
                <a href='https://github.com/LPeterson18'><FontAwesomeIcon icon={faGithub} size="3x" style={{color: "black"}}/></a>
              </div>
            </Row>
          </Col>
          <Col sm={6}>
            <h2>Lex Peterson</h2>
            <h3><FontAwesomeIcon icon={faMapMarkerAlt} size="xs"/> San Diego, CA</h3>
            <h3><FontAwesomeIcon icon={faEnvelope} size="xs"/> avspeterson@gmail.com</h3>
            <p>
              I'm a full stack web developer experienced with extensive project background individually and in pair and mob programming teams. Previously a mechanical engineer, I now get to apply my problem solving skills to the challenges that arise while programming. I enjoy finding creative and interesting solutions, and am always looking to level up my skills.
            </p>
          </Col>
        </Row>
      </Container>
      </div>
      </section>

      </>
    )
  }
}
export default AboutMe
