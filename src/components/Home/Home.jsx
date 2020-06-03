import React from "react";
// I dunno why I didn't see this before, but you were importing graphql form react
// Should be from gatsby
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/*
 * This component was originally structured as a "page component,""
 * so the pattern you were using wouldn't work.
 * The way you had it set up, your query was what they call a "page query,"
 * or something like that I think.
 *
 * For a non-page component in Gatsby, there are a few ways to get your data,
 * this time I used the useStaticQuery hook.
 *
 * If this file, the way you had it build, were put into /pages, and graphql were
 * being imported from gatsby instead of react, it would have worked properly, I think.
 *
 * It also would have worked as a page template file with a content file such as an MD
 * file in /pages and using gatsby-node to assign it as the MD file's template.
 */

const Home = () => {
  // Pass your query into the usestaticquery hook
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
      {/* Pass that shit on to the image component */}
      <Img fluid={data.file.childImageSharp.fluid} alt="Testing" />
    </div>
  );
};

export default Home;
