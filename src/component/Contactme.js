import React from "react";
import styled from "styled-components";
import ImageExpander from "./imageExpander";
import { useEffect } from "react";
import image from "../images/ppic.jpeg"
// Styled components for the About page layout
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
`;

const Contactme = () => {
  useEffect(() => {
    document.body.classList.add("contact");

    return () => {
      document.body.classList.remove("contact");
    };
  }, []);
  return (
    <AboutContainer>
      <ImageExpander src={image} alt="Profile" />

      <h2>Pankaj Pandey</h2>
      <h4>React Developer</h4>
      <h5>
        this is a Note WebSite which stores your note data Online . your data is
        Safe . it cannot access by Hackers
      </h5>
      <h5>
        Mail me at:{" "}
        <a href="mailto:pankajpkp77@gmail.com">mailto:pankajpkp77@gmail.com</a>
      </h5>
      <h5>
        Contact me at: <a href="Contactat:pankajpkp77@gmail.com">7724092612</a>
      </h5>
    </AboutContainer>
  );
};

export default Contactme;
