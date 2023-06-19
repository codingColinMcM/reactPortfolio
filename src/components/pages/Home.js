import React from 'react';

// reactstrap components
import {
  Button,
  Input,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

// core components
import LandingPageHeader from "../Kit/LandingPageHeader.js";
import DefaultFooter from "../Kit/DefaultFooter.js";

export default function Home() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  let pageHeader = React.createRef();

  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who am I?</h2>
                <h5 className="description">
                Hello, I'm Colin McMurtray, a passionate software developer with a Bachelor's Degree in Geography and a Computer Science Minor from the University of Mary Washington. My academic journey as a computer science minor at Mary Washington provided me with a well-rounded skill set that complements my practical knowledge gained through the UNC Chapel Hill Coding Bootcamp. I thrive on solving complex problems and have hands-on experience applying cutting-edge technologies to develop innovative solutions.

                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Mary_Washington.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "A good programmer is someone who always looks both ways before crossing a one-way street." <br></br>
                      <br></br>
                      <small>Doug Linder</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Problem_solving.jpeg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br>
                  <p>CPSC 240: Object-oriented Analysis and Design focused on object-oriented analysis and design principles. Through this course, I developed a structured approach to software development with an emphasis on code modularity and reusability.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Binary_Tree.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br>
                  <p>CPSC 350: Applications of Databases introduced me to the practical applications of databases. It equipped me with the skills to design and implement efficient data storage solutions. I aquired hands-on experience with SQL, Redis, and MongoDB. Moreover, I successfully deployed a Flask application on Google Cloud utilizing Python, Django, HTML, and CSS to showcase my proficiency in these technologies.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Info_Storage.webp") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br> 
                  <p>CPSC 414: Networking broadened my understanding of networking. This course covered topics such as protocols, security, and network architectures to enhance my ability to develop robust and secure networked applications.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/fullstack_weekend.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <p>Beyond technical expertise, I bring a strong sense of leadership, discipline, and meticulous planning to every project I undertake. As an Eagle Scout, I value teamwork, meeting deadlines, and delivering high-quality results.</p>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/UNC.jpg") + ")"
                    }}
                  ></div>
                  <p>
                  Throughout my coursework, I delved into various computer science subjects that have shaped my technical expertise. These courses equipped me with programming skills, problem-solving abilities, and a strong foundation in computer science concepts.
                  </p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br><br></br><br></br>
                  <p>In the course CPSC 220: Computer Programming and Problem Solving, I honed my programming skills and problem-solving abilities, allowing me to gain proficiency in languages such as Java and Python.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/OOP.png") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br>
                  <p>CPSC 284: Applied Discreet Mathematics provided me with a solid understanding of the mathematical foundations of computer science, including algorithms, logic, and graph theory. This knowledge has proven invaluable when tackling complex programming challenges.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/DB.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br>
                  <p>CPSC 370A9: Information Storage and Retrieval, I gained insights into information storage and retrieval techniques, expanding my knowledge of organizing and retrieving data in large-scale systems. I developed a search engine utilizing term-ID doc-ID pairs, gaining proficiency in Regex, implementing the Naive Bayes theorem, and computed distance and similarity measures using vectors.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Networking.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br>
                  <p>During my time in the bootcamp, I had the opportunity to work on various projects that challenged my skills in React.js, which is the primary technology behind my portfolio. Through these projects, I gained practical experience in building responsive and interactive web applications, leveraging React.js components, state management, and routing.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Eagle_Scout.jpg") + ")"
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                
                <h5 className="description">
                Combining my academic knowledge as a computer science minor at Mary Washington with the hands-on experience I gained during the bootcamp, I am well-prepared to tackle real-world challenges and contribute to innovative software development projects.
                </h5>
                <br></br> <br></br>
                <h5 className="description">
                I am excited to leverage my comprehensive skill set, encompassing both theoretical concepts and practical applications, to excel in a software development role. Please explore my portfolio to see examples of my work, and don't hesitate to reach out for further discussions or potential collaboration opportunities.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
