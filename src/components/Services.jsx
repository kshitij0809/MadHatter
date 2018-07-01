import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Services.css';
// import social from './servicesImages/social.jpg'
// import web from './servicesImages/web.jpg'
// import content from './servicesImages/content.jpg'
// import graphic from './servicesImages/graphic.jpg'
// import business from './servicesImages/business.jpg'
// import shooting from './servicesImages/shooting.jpg'
// import photography from './servicesImages/photography.jpg'
// import styling from './servicesImages/styling.jpg'

export default class Services extends Component {
  render() {
    return (
      <div className="service-section">
       <section className="ourservices">
          <h3 className="services-heading">Our Services</h3>
            <div class="row">
              <div class="col-md-7">
                <h4 className="service-sub-heading"> Social Media Marketing</h4>
                <p className="services-para">
                    Finding the right Social Media Marketing strategy can be as tough as the search for the Holy Grail. It’s a crowded space, where it’s easy for your brand to get lost in the chaos.
                    At Violet Arrow Communications, we understand brands, and understand how important it is for any brand to have a voice and personality that should stand out, even at their Social Media Platforms. We combine, our knowledge of strategy formulation, unique designing ability with quality content to give you a perfect magic formula of Social Media Marketing that actually works! 
                    We narrate the story of your brand, using the attributes and personality of your brand, that strikes a sync with your end consumers, and make it a hit! 
                    Not just that, by means of doing regular Social Media Campaigns that are closely aligned with your own Sales & Marketing goals we ensure that you get the ROI on all of your Social Media Marketing efforts. 
                    We’d be happy to devise a unique Social Media Marketing strategy for your brand, all you have to do is, get in touch with us today!
                </p>
              </div>
              <div class="col-md-5 service-photos">
                <img src='servicesImages/social.jpg' className="service-image"/>
              </div>
            </div>
             <div class="row">
              <div class="col-md-5 service-photos">
                <img src='servicesImages/web.jpg' className="service-image"/>
              </div>
              <div class="col-md-7">
                <h4 className="service-sub-heading">Website/ UX/UI designing</h4>
                <p className="services-para">
                  A website is like your company’s resume, it needs to have everything that you stand for, it needs to look neat, good, and should have enough material on it, to attract and inform your target audience. 
                  We believe in simplicity and it reflects in our work too. We create websites that are technologically savvy, aesthetically appealing and that convey the values that your brand stands for!
                  Be it a simple WordPress-pager or a super designer dynamic one, we do it all, and we do it well! 
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <h4 className="service-sub-heading">Content Creation & Content Management</h4>
                <p className="services-para">Just like Gary Vaynerchuk said, 
                  ‘If you’re not putting out relevant content,
                  In relevant places, - You don’t exist!’
                  Creating meaningful content, is more important than ever! Good news is, we have experience of more than ten years, in creating content. It also helps, that we have a team, that’s been on the editorial team of some of the most reputed names in publication/marketing, like Hindustan Times, Outlook, Tehelka, to name a few. 
                  Content is like a recipe, you need to put all of the ingredients of writing, and then garnish with it a flavor of marketing, so it reaches to the people, who would not only read it, but also share it. This take hours of research, contemplation over words, and hours and hours of writing a perfect piece!
                  We at Violet Arrow Communications, understand the value and importance of content, so when you trust us with your project, we ensure, that we only deliver the best to you!
                </p>
              </div>
              <div class="col-md-5 service-photos">
                <img src='servicesImages/content.jpg' className="service-image"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 service-photos">
                <img src='servicesImages/graphic.jpg' className="service-image"/>
              </div>
              <div class="col-md-7">
                <h4 className="service-sub-heading">Graphic Designing</h4>
                <p className="services-para">
                    We like to think of ourselves as brand makers who draw and execute brand strategies, but formulation of strategies alone cannot make brands. You need impeccable design resources to transform your vision, into results that resonate with your brand as, well as your target audience.
                    Be it logos, social media creatives, website banners, or wedding invites – we design them with such craftsmanship, that you’ll keep coming back for more designs!
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-7">
                <h4 className="service-sub-heading">Brand Management and Brand Consultation</h4>
                <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="col-md-5 service-photos">
                <img src='servicesImages/business.jpg' className="service-image"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 service-photos">
                <img src='servicesImages/shooting.jpg' className="service-image"/>
              </div>
              <div class="col-md-7">
                <h4 className="service-sub-heading">Shooting for short films</h4>
                <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-7">
                <h4 className="service-sub-heading">Photography</h4>
                <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class="col-md-5 service-photos">
                <img src='servicesImages/photography.jpg' className="service-image"/>
              </div>
            </div>

            <div class="row">
              <div class="col-md-5 service-photos">
                <img src='servicesImages/styling.jpg' className="service-image"/>
              </div>
              <div class="col-md-7">
                <h4 className="service-sub-heading">Styling</h4>
                <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

         

           
        </section>
      </div>
    )
  }
}
