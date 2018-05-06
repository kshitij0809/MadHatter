import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
     <div className="intro-header">
      <div className="bg-overlay">
        <div className="container">
  

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Mad Hatters India</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="https://twitter.com/Ferreir4Thiago" target="_blank" className="btn btn-default btn-lg"><i className="fab fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/ThiagoFerreir4" target="_blank" className="btn btn-default btn-lg "><i className="fab fa-facebook fa-fw"></i> <span className="network-name">facebook</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/thiagoferreir4" target="_blank" className="btn btn-default btn-lg"><i className="fab fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                            </li>
                            <li>
                                <a href="https://www.freecodecamp.com/thiagoferreira" target="_blank" className="btn btn-default btn-lg"><i className="fab fa-instagram fa-fw"></i> <span className="network-name">instagram</span></a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
      </div>
    </div>
    </div>
    )
  }
}
