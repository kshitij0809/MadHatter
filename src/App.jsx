import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Clients from './components/Clients';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Testimonials" component={Testimonials} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Clients" component={Clients} />
        </div>
      </Router>
    );
  }
}

export default App;
