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
			<br /> Full Stack Development (MERN Stack, Spring Framework)
			<br /> Database Management (SQL, MongoDB, Redis)
			<br /> Object-Oriented Programming (Java, Python, Node.js)
			<br /> Network Architecture & Security
			<br /> System Design & Architecture
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="mary-wash-home image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/Mary_Washington.jpg") + ")"
                    }}
                  >
	  	  </div>
	          <div
			className="fdm-home image-container"
		        style={{
			    backgroundImage: "url(" + require("../../assets/img/FDM_Office.png") + ")",
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
                    className="unc-home image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/UNC.jpg") + ")"
                    }}
                  ></div>
		  <div
                    className="revature-home image-container image-right"
                    style={{
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
