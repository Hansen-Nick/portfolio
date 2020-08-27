import React from "react";

const Navigation = () => {
  return (
    <div className="nav-container">
      <a
        onClick={(e) => {
          e.preventDefault();

          document
            .querySelector("#home")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="nav-item"
        href="#home"
      >
        Home
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();

          document
            .querySelector("#about")
            .scrollIntoView({ behavior: "smooth" });
        }}
        href="#about"
        className="nav-item"
      >
        About
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();

          document
            .querySelector("#projects")
            .scrollIntoView({ behavior: "smooth" });
        }}
        href="#projects"
        className="nav-item"
      >
        Projects
      </a>
      <a href="#contact" className="nav-item">
        Contact
      </a>
    </div>
  );
};

export default Navigation;
