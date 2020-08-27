import React from "react";
import aboutImage from "../images/aboutImage.jpg";

const About = () => {
  return (
    <div id="about">
      <h1 className="about-header">About Me</h1>
      <section className="img-aboutInfo">
        <img
          className="about-img"
          src={aboutImage}
          alt="Man looking at computer"
        />
        <div className="about-text">
          <h2>The Journey So Far</h2>
          <p>
            My coding adventure began in October of 2018 when I began learning
            Ruby through Launch School. It was an amazing school that taught my
            a lot, but I hit a rough patch financially and was unable to afford
            to continue on at that school.
          </p>
          <br />
          <p>
            By that point, I had already become addicted to code and was eager
            to find another way to learn. At first I taught myself, but I
            quickly became overwhelmed with the lack of direction and endless
            possibilities. Eventually, I was drawn to Lambda by their income
            share agreement. It meant I could afford to go back to an actual
            school! Deciding to enroll was one of the best decisions I have ever
            made.
          </p>
          <br />
          <p>
            Throughout my time at Lambda School, I have become proficient in a
            number of languages and frameworks. I learned both front end and
            back end development, and will soon be starting up Computer Science
            portion of the curriculum. I will be graduated by the middle of
            October.
          </p>
        </div>
      </section>
      <section className="tech-stack">
        <h1>Tech Stack</h1>
        <div className="stack-list">
          <p className="stack-item">React</p>
          <p className="stack-item">Javascript</p>
          <p className="stack-item">HTML/CSS</p>
          <p className="stack-item">Node</p>
          <p className="stack-item">Express</p>
          <p className="stack-item">Postgresql</p>
        </div>
      </section>
    </div>
  );
};

export default About;
