import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
      <Grid >       
        <Row>
          <Col xs={12} sm={8} md={8} className="col-contact-image">
            <Image src="assets/bg-01.jpg" className="Contact-image"/>
         </Col>  
          <Col xs={12} sm={4} md={4} className="person-wrapper">
           <span className="contact100-form-title">
          Contact Us With
        </span>
         <span className="contact100-number">
          +9538100580
        </span>        
         <span className="contact100-email">
          info@violetarrow.com
        </span>

            <footer id="social">
              <div id="container">
              <h1 className="footer-heading">SOCIAL LINKS</h1>
                    <ul className="social-liks-list">

                      <li className='highlight'>
                          <a className="social-media-link fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i className="fab fa-behance-square fa-stack-2x"></i></a>
                      </li>

                      
                       <li className='highlight'>
                          <a className="social-media-link fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i className="fab fa-medium-m fa-stack-2x"></i></a>
                      </li>
                      
                      <li className='highlight'>
                          <a className="social-media-link fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i className="fab fa-dribbble fa-stack-2x"></i></a>
                      </li>


                       <li className='highlight'>
                          <a className="social-media-link fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i className="fab fa-linkedin fa-stack-2x"></i></a>
                      </li>

                  </ul>
               </div>
            </footer>



         </Col>         
        </Row>
      </Grid>
      </div>
    )
  }
}
