import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'
import AboutMe from './components/aboutme'
import NavBar from './components/navbar'
import Experience from './components/experience'
import TechnicalSkills from './components/technicalskills'
import Projects from './components/projects'
import ContactMe from './components/contactme'
import Footer from './components/footer'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <>
      <section id="home">
      </section>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <TechnicalSkills />
      <Projects />
      <ContactMe />
      <Footer />
      </>
    );
  }
}
export default App;
