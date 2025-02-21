import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import HeaderBackground from "../HeaderBackground";

// core components

function LandingPageHeader() {
  return (
    <>
        <div
        className="page-header clear-filter page-header-small"
        >
        <HeaderBackground/>
        <Container>
            <div className="photo-container">
              <img width="400" alt="..." className="rounded-circle img-raised" src={require("../../assets/img/Colin.jpg")}></img>
            </div>
          <h3 className="title shadow-background">Colin McMurtray</h3>
          <p className="category shadow-background" >Full Stack Developer</p>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
