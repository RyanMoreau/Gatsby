import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./default.css";

import Header from "./header";
import Footer from "./footer";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
          {children}
        <Footer />
      </div>
    );
  }
}
