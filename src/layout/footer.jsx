import React from "react";
import { Helmet } from "react-helmet";

export default class Footer extends React.Component {
  render() {
    return (
      <section id="connect">
      <section class="contact-section bg-black">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4>SAY HELLO, WE'LL HELP YOU<br />GROW YOUR BRAND</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="mailto:hello@cannab.agency">hello@cannab.agency</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
            </div>
          </div>


          <div class="social d-flex justify-content-center">
            <a href="https://twitter.com/AgencyCannab" class="mx-2">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/cannabagency/" class="mx-2">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/cannabagency/" class="mx-2">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.instagram.com/cannabagency/" class="mx-2">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <footer>
            <p>Copyright &copy; Cannab Agency 2020</p>
          </footer>
        </div>
      </section>
      </section>
    );
  }
}
