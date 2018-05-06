import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <Grid>       
        <Row className="show-grid text-center">
          <Col xs={7} sm={7} md={7} className="col-contact-image">
            <Image src="assets/bg-01.jpg" className="Contact-image"/>
         </Col>  
          <Col xs={5} sm={5} md={5} className="person-wrapper">
           <span class="contact100-form-title">
          Contact Us with
        </span>
         <span class="contact100-number">
          +91898765421
        </span>
         <span class="contact100-number">
          +91898765421
        </span>
         <span class="contact100-email">
          kshitijpratap0809@gmail.com
        </span>

<footer id="social">
  <div id="container">
  <h1 class="footer-heading">SOCIAL LINKS</h1>
          <ul class="social-liks-list">

              <li class='highlight'>
                  <a class="fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i class="fab fa-behance-square fa-stack-2x"></i></a>
              </li>

              
               <li class='highlight'>
                  <a class="fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i class="fab fa-medium-m fa-stack-2x"></i></a>
              </li>
              
              <li class='highlight'>
                  <a class="fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i class="fab fa-dribbble fa-stack-2x"></i></a>
              </li>


               <li class='highlight'>
                  <a class="fa-stack fa-1x footer-anchor" href="@@@@@" target="_blank"><i class="fab fa-linkedin fa-stack-2x"></i></a>
              </li>

          </ul>
       </div>
    </footer>



         </Col>         
        </Row>
      </Grid>
    )
  }
}
