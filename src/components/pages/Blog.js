import React from 'react';
import HeaderBackground from '../HeaderBackground';
import { Container, Row, Col } from 'reactstrap';

const downloadResume = require("./../../assets/docs/Tech_CV.docx");

const blackOutline = {
  color: "#fff",
  "text-shadow": "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
};

export default function Blog() {
  return (
    <div>
      <div className="page-header clear-filter page-header-small">
        <HeaderBackground/>
        <Container>
        <h1 style={blackOutline}>My Resume!</h1>
        <h3 style={blackOutline}>Here you will see the skills I have aquired through my educational career</h3>
        <h4 style={blackOutline}>Here is a a hyerlink to download my <a href={downloadResume} download="resume">resume</a></h4>

        </Container>
        
      </div>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="0">
            <h4>Languages</h4>
              <ul>
                <li>SQL</li>
                <li>JavaScript ES6</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JSON</li>
              </ul>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="1">
            <h4>DBMS</h4>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>MariaDB</li>
                <li>RedisDB</li>
              </ul>
          </Col>
          <Col className="ml-auto mr-auto text-center" md="2">
            <h4>Front - End tools</h4>
              <ul>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Fetch APIs</li>
                <li>Bootstrap</li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="0">
            <h4>Back - End tools</h4>
              <table>
                <tr>
                  <td>
                    <ul>
                      <li>OOP</li>
                      <li>Express</li>
                      <li>Node</li>
                      <li>Seqelize</li>
                      <li>Mongoose</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Multer</li>
                      <li>NumPy</li>
                      <li>Python os library</li>
                      <li>Python ArgParse library</li>
                      <li>Python Collections library</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Pandas</li>
                      <li>ArcPy</li>
                      <li>csv</li>
                      <li>java.io.File</li>
                      <li>java.io.FileInputStream</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>java.util.Locale</li>
                      <li>java.io.FileNotFoundException</li>
                      <li>java.util.stream</li>
                      <li>java.io.File</li>
                      <li>java.util.Hashtable</li>
                      <li>java.io.IOException</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="0">
            <h4>Miscellaneous Skills</h4>
              <table>
                <tr>
                  <td>
                    <ul>
                      <li>Web Crawling</li>
                      <li>Regex</li>
                      <li>Traditional based ranking</li>
                      <li>Machine-Learning based ranking</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Link-based algorithms</li>
                      <li>Metadata usage</li>
                      <li>GraphQL</li>
                      <li>Jest</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>OPI layers</li>
                      <li>Jupyter Notebook</li>
                      <li>Agile programming</li>
                      <li>Google Cloud</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>AWS</li>
                      <li>Heroku</li>
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>GitLab</li>
                    </ul>
                  </td>
                </tr>
              </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
