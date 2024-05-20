// CarouselLoginSignup.js

import React from "react";
import { Carousel } from "react-bootstrap";
import Login from "./login";
import Signup from "./signup";

const CarouselLoginSignup = ({ showAlert , setLoggedIn , handleLogin }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <Login
          showAlert={showAlert}
          setLoggedIn={setLoggedIn}
          handleLogin={handleLogin}
        />
      </Carousel.Item>

      <Carousel.Item>
        <Signup showAlert={showAlert} />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselLoginSignup;
