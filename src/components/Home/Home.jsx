import React from "react";
// I dunno why I didn't see this before, but you were importing graphql form react
// Should be from gatsty
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "test-fox.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <Img fluid={data.file.childImageSharp.fluid} alt="Testing" />
    </div>
  );
};

export default Home;
