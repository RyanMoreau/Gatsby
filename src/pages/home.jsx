import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import Home from "../components/Home/Home";
import config from "../../data/SiteConfig";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="home-container">
          <Helmet title={`Welcome | ${config.siteTitle}`} />
          <Home />
        </div>
      </Layout>
    );
  }
}

export default HomePage;