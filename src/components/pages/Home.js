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

export default function Home() {

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
                <h2 className="title">Hi, I'm Colin 👋</h2>
                <h5 className="description">
	  	I'm a passionate software developer who thrives on building innovative solutions to complex problems. With a unique background combining Geography and Computer Science from the University of Mary Washington, I bring a fresh perspective to software development.
	  <br></br><br></br>
	  	Core Skills:
	  	<ul className="no-bullets">
			<li> Full Stack Development (MERN Stack, Spring Framework) </li>
			<li> Database Management (SQL, MongoDB, Redis)</li>
			<li> Object-Oriented Programming (Java, Python, Node.js)</li>
			<li> Network Architecture & Security</li>
			<li> System Design & Architecture</li>
		</ul>
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
	  	</Col>
	  	<Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/UNC.jpg") + ")"
                    }}
                  ></div>
		</Col>
	      </Row>
	    </div>
          </Container>
	  <br></br><br></br><br></br>
        </div>
      </div>
    </>
  );
}
