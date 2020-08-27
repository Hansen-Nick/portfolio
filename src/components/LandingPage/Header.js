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
          <a href="https://github.com/Hansen-Nick" class="fa fa-github">
            <span className="visually-hidden">Link to Github</span>
          </a>
          <a
            href="https://www.facebook.com/nick.hansen.54738"
            class="fa fa-twitter"
          >
            <span className="visually-hidden">Link to Facebook</span>
          </a>
          <a href="https://twitter.com/Hansen_Nick95" class="fa fa-facebook">
            <span className="visually-hidden">Link to Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-hansen-55789717b/"
            class="fa fa-linkedin"
          >
            <span className="visually-hidden">Link to LinkedIn</span>
          </a>
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
