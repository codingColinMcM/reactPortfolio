import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import HeaderBackground from "../HeaderBackground";

const blackOutline = {
  color: "#fff",
  "text-shadow": "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
}

// core components

function LandingPageHeader() {
  return (
    <>
        <div
        className="page-header clear-filter page-header-small"
        >
        <HeaderBackground/>
        <Container>
          <a href="https://www.youtube.com/watch?v=eBGIQ7ZuuiU">
            <div className="photo-container">
              <img width="400" alt="..." className="rounded-circle img-raised" src={require("../../assets/img/Colin.jpg")}></img>
            </div>
          </a>
          <h3 className="title">Colin McMurtray</h3>
          <p className="category" style={blackOutline}>Full Stack Developer</p>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
