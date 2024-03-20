import React from 'react';
import HeaderBackground from '../HeaderBackground';
import { Container, Row, Col } from 'reactstrap';
const sqlLogo = require("./../../assets/img/SQL_Logo.png");
const jsLogo = require("./../../assets/img/JS_Logo.png");
const javaLogo = require("./../../assets/img/Java-Logo.png");
const pythonLogo = require("./../../assets/img/Python-Logo.png");
const htmlLogo = require("./../../assets/img/HTML-Logo.png");
const cssLogo = require("./../../assets/img/CSS_Logo.png");
const mySQLLogo = require("./../../assets/img/mySql_logo.png");
const mariaDBLogo = require("./../../assets/img/mariadb_logo.png");
const redisLogo = require("./../../assets/img/redis_logo.png");
const mongoLogo = require("./../../assets/img/MongoDB-Emblem.jpg")
const cassandraLogo = require("./../../assets/img/Cassandra_Logo.webp");
const neo4jLogo = require("./../../assets/img/neo4j-logo.png");
const jQueryLogo = require("./../../assets/img/jquery-logo.png");
const reactLogo = require("./../../assets/img/React-iconpng.png");
const bootstrapLogo = require("./../../assets/img/bootstrap-logo-vector.svg");
const expressLogo = require("./../../assets/img/expressjs_logo.png");
const nodeLogo = require("./../../assets/img/nodejs-logo.png");
const npmLogo = require("./../../assets/img/Npm-logo.png");
const sequelizeLogo = require("./../../assets/img/sequelize-logo.png");
const mongooseLogo = require("./../../assets/img/mongoose-logo.png");
const multerLogo = require("./../../assets/img/multer-logo.png");
const flaskLogo = require("./../../assets/img/flask-logo.png");
const djangoLogo = require("./../../assets/img/django-logo.png");
const handlebarsLogo = require("./../../assets/img/handelbars-logo.png");
const reduxLogo = require("./../../assets/img/redux-logo.svg");
const numpyLogo = require("./../../assets/img/numpy-logo.png");
const pandasLogo = require("./../../assets/img/pandas-logo.png");
const googleCloudLogo = require("./../../assets/img/Google-Cloud-logo.png");
const awsLogo = require("./../../assets/img/Amazon_Web_Services_Logo.png");
const herokuLogo = require("./../../assets/img/heroku-logo.png");
const jupyterLogo = require("./../../assets/img/jupyter-logo.png");
const wiresharkLogo = require("./../../assets/img/wireshark-logo.png");
const graphqlLogo = require("./../../assets/img/GraphQL_Logo.png");
const jestLogo = require("./../../assets/img/jest-logo.png");
const gitLogo = require("./../../assets/img/git-logo.png");
const gitLabLogo = require("./../../assets/img/GTLB-logo.png");


const thisSize = {
  width: "100px",
  heeigh: "100px"
}

const downloadResume = require("./../../assets/docs/Tech-Final.pdf");

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

        </Container>
        
      </div>
      <br></br><br></br>
      <h2 style={{textAlign: "center"}}>Here is a hyerlink to download my <a href={downloadResume} download="resume">resume</a></h2>
      <br></br>
      <Container>
        <h4 style={{textAlign: "center"}}>Languages</h4>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={sqlLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Structured<br></br>Query <br></br>Language</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={jsLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Java<br></br>Script</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={javaLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Java</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={pythonLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Python</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={htmlLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Hyper<br></br>Text<br></br>Markup<br></br>Language</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={cssLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Cascading<br></br>Style<br></br>Sheets</div>
                </div>
              </div>
            </Col>      
          </Row>
        <h4 style={{textAlign: "center"}}>Database Management Systems</h4>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={mySQLLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">mySQL</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={mariaDBLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">MariaDB</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={redisLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Redis</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={mongoLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">MongoDB</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={cassandraLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Cassandra</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={neo4jLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Neo4j</div>
                </div>
              </div>
            </Col>      
          </Row>
        <h4 style={{textAlign: "center"}}>Frontend Tools</h4>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={jQueryLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">jQuery</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={handlebarsLogo}  className='image-resume' style={{height: "75px"}}></img>
                <div className="middle-resume" style={{position: "absolute"}}>
                  <br></br><br></br><br></br>
                  <div className="text-resume">Handelebars</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={reactLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">React.js</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={bootstrapLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Bootstrap</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={reduxLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Redux</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={djangoLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Django</div>
                </div>
              </div>
            </Col> 
          </Row>
        <h4 style={{textAlign: "center"}}>Backendend Tools</h4>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={expressLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Express.js</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={nodeLogo}  className='image-resume' style={{height: "75px"}}></img>
                <div className="middle-resume">
                  <div className="text-resume">Node.js</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <br></br>
              <div className='container-resume'>
                <img src={npmLogo}  className='image-resume' style={{height: "50px"}}></img>
                <div className="middle-resume">
                  <div className="text-resume">Node<br></br>Package<br></br>Manager</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={sequelizeLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Sequelize</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={mongooseLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Mongoose</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={multerLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Multer</div>
                </div>
              </div>
            </Col>   
          </Row>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={flaskLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Flask</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={numpyLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">NumPy</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={pandasLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Pandas</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={googleCloudLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Google<br></br>Cloud</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={awsLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Amazon<br></br>Web<br></br>Services</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={herokuLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Heroku</div>
                </div>
              </div>
            </Col>   
          </Row>
        <h4 style={{textAlign: "center"}}>Miscellaneous Skills</h4>
          <Row style={{height: "150px"}}>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={jupyterLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Jupyter<br></br>Notebook</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={wiresharkLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Wireshark</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={graphqlLogo}  className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">GraphQL</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={jestLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Jest</div>
                </div>
              </div>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={gitLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Git</div>
                </div>
              </div>
            </Col> 
            <Col className="ml-auto mr-auto text-center" md="0" style={thisSize}>
              <div className='container-resume'>
                <img src={gitLabLogo} className='image-resume'></img>
                <div className="middle-resume">
                  <div className="text-resume">Git<br></br>Lab</div>
                </div>
              </div>
            </Col>      
          </Row>
      </Container>
    </div>
  );
}
