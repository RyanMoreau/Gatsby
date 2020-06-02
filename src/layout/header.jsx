import React from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

export default class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <img src={'/fox-logo.svg'} width="63" height="63" />
        </a> 
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#about">About Us</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#principles">Our Principles</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="#principals">Principals &amp; Producers</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#services">Our Specialties</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#connect">Connect</Link>
            </li>
            <li class="nav-item social-links">
              <a href="https://www.instagram.com/cannabagency/"><i class="fab fa-instagram"></i></a> <a href="https://twitter.com/AgencyCannab"><i class="fab fa-twitter"></i></a> <a href="https://www.facebook.com/cannabagency/"><i class="fab fa-facebook"></i></a> <a href="https://www.linkedin.com/company/cannab-agency/"><i class="fab fa-linked"></i></a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    );
  }
}
