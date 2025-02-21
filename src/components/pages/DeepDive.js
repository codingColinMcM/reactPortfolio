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

export default function DeepDive() {

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
	    <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Problem_solving.jpeg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br> <br></br> <br></br>
                  <p>Object-Oriented programming formed a crucial part of my learning journey. I gained proficiency in languages like Python, Java, and Node.js. Embracing encapsulation, abstraction, polymorphism, and inheritance, I encapsulated data and behavior, focused on essential characteristics, wrote flexible and reusable code, and utilized code reuse and hierarchical relationships. Exploring design patterns like the Factory and Singleton patterns provided proven solutions to software design problems. These concepts empowered me to write modular, maintainable, and scalable code, leveraging the benefits of Object-Oriented programming paradigms.</p>
                  <br></br> <br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Binary_Tree.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br> <br></br> <br></br>
                  <p>Exploring the practical applications of databases expanded my knowledge in SQL, Redis, and MongoDB. I leveraged SQL for managing relational databases. Redis, a versatile in-memory data structure store, provided me with fast and scalable data caching and real-time data processing capabilities. MongoDB, a NoSQL document database, introduced me to the flexibility of document-oriented storage and the power of JSON-like data models. I learned to optimize data organization and retrieval, ensuring efficient and seamless access to information. By utilizing indexing, query optimization techniques, and database normalization, I enhanced performance and data integrity.</p>
                  <br></br> <br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Info_Storage.webp") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br> 
                  <p>Delving into networking deepened my understanding of protocols, security, and architectures. From the physical layer to the application layer, I gained insights into data transmission, transport protocols, IP addressing, and network infrastructure. This knowledge enabled me to develop robust and secure networked applications, ensuring reliable communication and optimized performance. Applying security measures at multiple layers and considering network architectures, I achieved seamless data transfer and implemented encryption algorithms and secure protocols. Overall, my comprehensive understanding of networking empowered me to create reliable, secure, and high-performing projects in the interconnected world of computer networks.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br> <br></br><br></br> 
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/fullstack_weekend.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                  <p>Beyond technical expertise, I bring a strong sense of leadership, discipline, and meticulous planning to every project I undertake. As an Eagle Scout, I value teamwork, meeting deadlines, and delivering high-quality results.</p>
                </Col>
                <Col md="5">
                  <p>
                  Throughout my coursework, I delved into various computer science subjects that have shaped my technical expertise. I have a strong foundation in computer science concepts.
                  </p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br> <br></br><br></br><br></br>
                  <p>Throughout my learning journey, I dedicated significant time and effort to honing my programming skills and problem-solving abilities. With each challenge I encountered, I developed a structured approach to software development, enabling me to tackle complex problems effectively.</p>
                  <br></br> <br></br><br></br><br></br><br></br><br></br><br></br> <br></br><br></br><br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/OOP.png") + ")"
                    }}
                  ></div>
                  <br></br> <br></br> <br></br> 
                  <p>Studying discrete mathematics enriched my learning journey by providing essential mathematical foundations for computer science. Exploring topics like sets, matrices, trees, and binary numbers enhanced my problem-solving abilities. These concepts enabled efficient data manipulation, hierarchical modeling, and logical operations. Applying principles from discrete mathematics, such as combinatorics and probability theory, optimized algorithm efficiency. Overall, the integration of discrete mathematics empowered me to approach programming challenges with analytical thinking</p>
                  <br></br> <br></br> <br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/DB.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br>
                  <p>During my studies, I gained insights into data organization and retrieval within large-scale systems. I developed a search engine using term-ID doc-ID pairs for efficient indexing and retrieval of relevant information, enhancing my data handling skills. Working extensively with regular expressions (Regex), I efficiently processed and extracted structured information like phone numbers and emails, improving data retrieval accuracy. Exploring the Naive Bayes theorem deepened my understanding of probabilistic classification, enabling robust and accurate models for effective decision-making. Additionally, I utilized distance and similarity measures, including Euclidean distance with vectors, to quantify relationships and similarities between data items. This technique proved valuable in clustering, recommendation systems, and information retrieval tasks.</p>
                  <br></br> <br></br>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Networking.jpg") + ")"
                    }}
                  ></div>
                  <br></br> <br></br><br></br>
                  <p>Throughout my full stack web development journey, I have gained hands-on experience with a diverse range of technologies and tools. JavaScript and jQuery empowered me to add interactivity and functionality to web applications, while GraphQL enhanced data retrieval and manipulation, optimizing performance. Bootstrap facilitated the creation of visually appealing and mobile-friendly designs, and Express.js streamlined server-side development with its routing and middleware capabilities. I have also worked with Git and GitHub, enabling efficient collaboration and code management. Additionally, I successfully deployed a Flask application on Google Cloud, showcasing my proficiency in Python, Django, HTML, and CSS. Python served as the backbone for server-side logic, Django provided a powerful framework for web application development, and HTML/CSS ensured an engaging user interface. These experiences have equipped me with the skills to create responsive, feature-rich, and scalable web applications, delivering seamless user experiences.</p>
                  <br></br>
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

