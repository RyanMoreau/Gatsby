import React, { graphql } from "react";
import Img from "gatsby-image";

const Home = ({data}) => (
  <div className="home">
    <h1>
      Home Page
    </h1>
    <Img fluid={data.file.childImageSharp.fluid} alt="Testing" />
  </div>
);

export default Home;

export const query = graphql `
  query {
    file(relativePath: {eq: "test-fox.png"}) {
      id
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`