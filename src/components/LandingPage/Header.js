import React from "react";
import image from "../../images/profile (1).jpg";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <div id="home" className="background-colors">
      <Navigation />

      <img className="circular" alt="Profile" src={image} />

      <header className="landing-header-background">
        <div className="landing-header">
          <h1>NICK HANSEN</h1>
          <p>Coder, Adventurer, and Your Future Developer</p>
          <a href="#" class="fa fa-github"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-linkedin"></a>
        </div>
      </header>
      <div class="arrow bounce">
        <a
          class="fa fa-arrow-down fa-2x"
          onClick={(e) => {
            e.preventDefault();

            document
              .querySelector("#about")
              .scrollIntoView({ behavior: "smooth" });
          }}
          href="#about"
        >
          <span class="visually-hidden">Home</span>{" "}
        </a>
      </div>
    </div>
  );
};

export default Header;
