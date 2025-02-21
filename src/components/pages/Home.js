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
	  I'm a software developer and technical leader who builds innovative solutions to complex challenges. As Tech Lead at FDM Group's Infinity Digital Banking Pod, I architected full-stack solutions and guided cross-functional teams. 
	  <br></br><br></br>
	  My rapid progression from automotive systems engineering at Revature to leading banking applications demonstrates my ability to quickly master new technologies and domains.
	  <br></br><br></br>
	  Combining geographical information systems from the University of Mary Washington with full-stack certification from UNC Chapel Hill, I bring both technical adaptability and fresh perspectives to software development.
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
		      zIndex: 10,
                      backgroundImage:
                        "url(" + require("../../assets/img/Mary_Washington.jpg") + ")"
                    }}
                  >
	  	  </div>
		  <div
	  	    className="image-container"
                    style={{
		      zIndex: 20,
		      marginTop: -30,
                      backgroundImage:
                        "url(" + require("../../assets/img/FDM_Office.png") + ")"
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
		      zIndex: 30,
                      backgroundImage:
                        "url(" + require("../../assets/img/UNC.jpg") + ")"
                    }}
                  ></div>
		  <div
                    className="image-container image-right"
                    style={{
                      zIndex: 0,
		      marginTop: -145,
		      left: 30,
                      backgroundImage:
                        "url(" + require("../../assets/img/revature_front_desk.jpg") + ")"
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
