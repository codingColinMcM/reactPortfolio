/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import LinkedSites from "../LinkedSites";

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div style={{float: "left"}}><LinkedSites /></div>
          <div className="copyright" id="copyright"> 
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            . Implemented by Colin McMurtray.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
