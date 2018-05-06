import React, { Component } from 'react'
import { Row ,Grid, Col, Image } from 'react-bootstrap';
import './Clients.css';

export default class Clients extends Component {
  render() {
    return (
      <div>
        <h1 className="clients-heading shadow">OUR CLIENTS</h1>
        <Grid>
           <Row className="show-grid text-center">
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
         <Row className="show-grid text-center">
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
         <Row className="show-grid text-center">
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
         <Row className="show-grid text-center">
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Frank</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
          <Col xs={4} sm={4} className="person-wrapper card">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
        </Grid>
      </div>
    )
  }
}
