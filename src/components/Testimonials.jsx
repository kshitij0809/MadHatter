import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './Testimonials.css';
import ImageOne from './MasalaCentral.jpg'

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <div class="row section-banner">
      <div class="col-md-offset-1 col-md-7">
        <div>
           <div class="card-test">
              <div class="row">
                <div class="col-sm-5 image-work" >
                  <img class="kunal-work" src={ImageOne}/>
                </div>
                <div class="col-sm-7 mobile-padding">
                  <div>
                    <h2 class="work-subheading">Featured Testimonial</h2>
                    <p class="work-para">" Violet Arrow Communications is one of those agencies, that establish your faith in agency-brand relationships. They are professional, deliver within timelines, and understand that every brand needs a unique brand strategy. Extremely, driven and customer-centric, they give attention to every minute detail.</p>
                    <p class="collapse" id="collapseExample">Isha, along with her team has helped us reach out to our target audience, conduct effective Social Media & Influencer campaigns. If you're a start-up, this is the agency you should be working with! Highly recommended! "
                    
                    </p>
                    <button class="work-subbutton" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">READ MORE</button>
                    
                    <div class="name-testimonial">Nisheet,<br/>Co-founder, Masala Central</div>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
      </div>
    </div> <div class="row section-banner">
      <div class="col-md-offset-1 col-md-7">
        <div>
           <div class="card-test">
              <div class="row">
                <div class="col-sm-5 image-work" >
                  <img class="kunal-work" src="assets/photo.jpg"/>
                </div>
                <div class="col-sm-7 mobile-padding">
                  <div>
                    <h2 class="work-subheading">Featured Testimonial</h2>
                    <p class="work-para">" Working with Isha has been an absolutely fantastic experience!
                                           Violet Arrow Communications, is one of the most professional agencies that we have ever worked with. The quality of work, turn-around times are better than what you can ever imagine and, expect from even your own in-house teams. One thing that sets them apart from the others is that they genuinely care and do their due diligence to understand the brand and try to put in the extra effort.</p>
                    <p class="collapse" id="collapseExampleTwo">They deliver an output which is in resonance with the entire brand communication strategy.have always and will continue to recommend her to any start-up out there looking at getting the best services possible at extremely economical prices! "</p>
                    <button class="work-subbutton" data-toggle="collapse" data-target="#collapseExampleTwo" aria-expanded="false" aria-controls="collapseExampleTwo">READ MORE</button>
                    <div class="name-testimonial">Nikhil,<br/>Co-founder & CEO, Schoolkart.com</div>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
      </div>
    </div> <div class="row section-banner">
      <div class="col-md-offset-1 col-md-7">
        <div>
           <div class="card-test">
              <div class="row">
                <div class="col-sm-5 image-work" >
                  <img class="kunal-work" src="assets/photo.jpg"/>
                </div>
                <div class="col-sm-7 mobile-padding">
                  <div>
                    <h2 class="work-subheading">Featured Testimonial</h2>
                    <p class="work-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button class="work-subbutton">READ STORY</button>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
      </div>
    </div>
      </div>
    )
  }
}


