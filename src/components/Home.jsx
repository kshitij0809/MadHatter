import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
// import CustomNavbar from './CustomNavbar.jsx'

import $ from 'jquery'; 





export default class Home extends Component {


  // constructor(props) {
  //   super(props);
  //   this.state = {isToggleOn: true};

  //   // This binding is necessary to make `this` work in the callback
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {

  //  var url=window.location.href;
  //  console.log(url);
  //  if(url==`/services`){
  //   console.log("got");
  //   url=`/#about`;
  //   console.log(url);
  //  }
  // else if(url==`http://localhost:3000/`){
  //   console.log('clicked');
  //     $('a[href^="#"]').click(function(e) {
  //         e.preventDefault();
  //         var target = this.hash, $target = $(target);
  //         $('html, body').stop().animate({
  //             'scrollTop': $target.offset().top
  //         }, 900, 'swing', function() {
  //             window.location.hash = target;
  //         });
  //     });
  //     console.log('inside');

  //   }
  //   // this.setState(prevState => ({
  //   //   isToggleOn: !prevState.isToggleOn
  //   // }));
  // }



  render() {
    return (
      <div className="homepage">
     <div className="intro-header">
      <div className="bg-overlay">
        <div className="container">
  

            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Violet Arrow Communications</h1>
                        <h3 className="intro-message-tag">Breaking The Social Spectrum for you....</h3>
                       
                    </div>
                    </div>
                </div>
      </div>
    </div>

    </div>
    <div id="about" className="content-section-a">
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
      </div>
      <div className="content-section-b"> 
      <div className="backgroung-image-two"> 
            <div className="row section-b">
                <div className="col-lg-4 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading mobile">Our Mission</h2>
                         <p className="lead one">To help brands find their business value and help them grow in the most natural and organic way without having to sacrifice on values and integrity.</p>
                    </div>
                
            
                <div className="col-lg-4 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading">Our Vision</h2>
                         <p className="lead one">To become the most trusted advisor to our clients and help all businesses reach their true potential.</p>
                     </div>
                
            
                <div className="col-lg-4 col-sm-12">
                    
                    <div className="clearfix"></div>
                         <h2 className="section-heading">Our technique</h2>
                         <p className="lead one">We use tools like story-telling, customer journey maps, among other creative tools, to take your brand to your target audience.</p>
                   </div>
                
            </div>   
            </div>    
     </div>
    </div>
    )
  }
}


// <script type="text/javascript">
    
  //    $(document).ready(function(){
  //     $('a[href^="#"]').click(function(e) {
  //         e.preventDefault();
  //         var target = this.hash, $target = $(target);
  //         $('html, body').stop().animate({
  //             'scrollTop': $target.offset().top
  //         }, 900, 'swing', function() {
  //             window.location.hash = target;
  //         });
  //     });
  // });
//   </script>
