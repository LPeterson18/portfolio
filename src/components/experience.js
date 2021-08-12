import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import './experience.css'
import { Document, Page, pdfjs} from 'react-pdf';

import resume from "../documents/Alexander_Peterson_Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Experience extends Component{
  state = {
          file: resume,
          numPages: null,
          pageNumber: 1,
      }

      onDocumentLoadSuccess = ({ numPages }) => {
          this.setState({ numPages });
      }

  render(){
    const { file, pageNumber } = this.state;
    return(
      <>
      <section id="experience">
      <div className='experiencebox'>
      <br></br>
      <br></br>
      <Container fluid>
        <Row className='justify-content-sm-center'>
          <h1>Experience</h1>
        </Row>
        <br></br>
        <Row className='justify-content-sm-center'>
          <div id="ResumeContainer">
              <Document className={"PDFDocument"} file={file} onLoadSuccess={this.onDocumentLoadSuccess}>
                  <Page className={"PDFPage PDFPageOne"} pageNumber={pageNumber} renderTextLayer={false} renderInteractiveForms={false} renderAnnotationLayer={false}/>
              </Document>
          </div>
        </Row>
        <Row className='justify-content-sm-center'>
          <a href='https://github.com/LPeterson18/resume/raw/main/Alexander_Peterson_Software_Engineer_Resume.pdf'>Download</a>
        </Row>
        <br></br>
      </Container>
      </div>
      </section>
      </>
    )
  }
}
export default Experience
