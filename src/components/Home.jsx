import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
     <div className="intro-header">
      <div className="bg-overlay">
        <div className="container">
  

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Violet Arrow</h1>
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
    <div className="content-section-a">
      <div className="bg-overlay2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading">About US</h2>
                         <p className="lead">Violet Arrow is a marketing agency that’s a one stop solution for all your marketing-related requirements. Founded on the firm belief, that a right communication strategy can help each and every business grow. We use our creative expertise, along with our experience of ten years in the industry, to create strategies that align the offline business initiatives with online marketing initiatives.
                                             <br/><br/>Our aim is to act as advisors to the brands, and help them grow organically and achieve their business objectives. </p>
                 </div>
                
            </div>
           </div>
      </div> 
      <div className="backgroung-image-two"> 
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading">Our Mission</h2>
                         <p className="lead">To help brands find their business value and help them grow in the most natural and organic way without having to sacrifice on values and integrity.</p>
                    </div>
                
            </div>
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading-two">Our Vision</h2>
                         <p className="lead">To become the most trusted advisor to our clients and help all businesses reach their true potential.</p>
                     </div>
                
            </div>
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading-two">Our technique</h2>
                         <p className="lead">We use tools like story-telling, customer journey maps, among other creative tools, to take your brand to your target audience.</p>
                   </div>
                
            </div>   
            </div>    
     </div>
    </div>
    )
  }
}
