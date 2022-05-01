import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
// import editor from "../../Assets/Projects/codeEditor.png";
import mednear from "../../Assets/Projects/mednear.png";
import kfc from "../../Assets/Projects/kfc.PNG";
import onbikes from "../../Assets/Projects/onbikes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mednear}
              isBlog={false}
              title="Mednear Clone"
              description="Mednear is the Primary Online Pharmacy in India that provides prescription, Over-the-counter medicines, and generic medicines all over India. The main motive of MedNear is to Ensuring Health for all. They make a simple way for people to Buy Prescription Medicine Online from anywhere in India and any time at the best prices."
              link="https://github.com/HrgChampion/Mednear-clone"
              live_link="mednear.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onbikes}
              isBlog={false}
              title="Onn-Bikes Clone"
              description="Whenever I go to a new city where I don’t know anyone or never been before it gets me little scared than, I really felt like I need my own bike to explore the city and go wherever I need, that’s exactly where our website will help you. it provides you every kind of bike whatever you’re looking for. Cruising, Sports, even a Scooter is available. you just need a driving license number and you’re ready to go. yeah! it is that simple."
              link="https://github.com/Ritesh6997/ONN-BIke-Complete-Project"
              live_link="sharp-brahmagupta-a8b2e3.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kfc}
              isBlog={false}
              title="KFC Clone"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/roohitgupta/KFC_Clone"
              live_link=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
