import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rohit Gupta </span>
            from <span className="purple"> Bhopal, India.</span> <br />
            <br />
            Aspiring Full Stack Web Developer at <span className="purple">MASAI SCHOOL,</span> Bengaluru, Karnataka.
            Looking forward graduate from University of{" "}
            <span className="purple">
              {" "}
              Devi Ahilya Vishwavidyalaya, Indore{" "}
            </span>
            with Bachelor of Computer Science.
            <br />
            Have done numerous projects involving Front and Back end
            technologies. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self Improvment Books
            </li>
          </ul> 

          <p style={{ color: "rgb(155 126 172)" }}>
            "Any fool can write code that a computer can understand. <br /> 
            Good programmers write code that humans can understand."{" "}
          </p>
          <footer className="blockquote-footer">Martin Fowler</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
