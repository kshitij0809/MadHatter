import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div>
       <section className="ourservices">
          <h3 className="services-heading">Our Services</h3>
          <p  className="section-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="services-grid">
            <div className="service service1">
              <i className="ti-bar-chart"></i>
              <h4> Social Media Marketing</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

            <div className="service service2">
              <i className="ti-light-bulb"></i>
              <h4>Website/ UX/UI designing</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

            <div className="service service3">
              <i className="ti-money"></i>
              <h4>Content Creation & Content Management</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read more <span className="ti-angle-right"></span></a>
            </div>
          </div>
           <div className="services-grid">
            <div className="service service1">
              <i className="ti-bar-chart"></i>
              <h4>Graphic Designing</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

            <div className="service service2">
              <i className="ti-light-bulb"></i>
              <h4>Brand Management and Brand Consultation</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

            <div className="service service3">
              <i className="ti-money"></i>
              <h4>Shooting for short films</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read more <span className="ti-angle-right"></span></a>
            </div>
          </div>
           <div className="services-grid">
            <div className="service service1">
              <i className="ti-bar-chart"></i>
              <h4>Photography</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

            <div className="service service2">
              <i className="ti-light-bulb"></i>
              <h4>Styling</h4>
              <p className="services-para">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <a href="#" className="cta service-link">Read More <span className="ti-angle-right"></span></a>
            </div>

           
          </div>
        </section>
      </div>
    )
  }
}
