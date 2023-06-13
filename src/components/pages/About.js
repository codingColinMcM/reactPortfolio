import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
const filmDexImg = require("./../../assets/images/Screenshot 2022-11-01 184004.png");
const magPieGalleryImg = require("./../../assets/images/Screenshot 2023-02-27 010038.png")
const companyDBImg = require("./../../assets/images/Screenshot 2023-02-16 220621.png");
const eCommerceDBImg = require("./../../assets/images/216521080-b8715e4d-ff57-4dc3-bf47-58db92542cfd.png");
const noteTakerImg = require("./../../assets/images/Screenshot 2023-02-20 134924.png");
const weatherAppImg = require("./../../assets/images/198859584-5e880983-e237-40c7-a936-3ef0d05e6b39.png");


const thisSize = {
  width: "100%"
}
const thisPosition = {
  "text-align": "center"
}

export default function About() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <div>
      <h1>Portfolio</h1>
      <table>
                <tr><th colspan="4" id = "aboutMe"><p>My Portfolio! Here you will see the projects I complete related to my software development career.</p>
                <p>Click the associated GitHub icons to be taken to each project's respective GitHub repository</p>
                </th></tr>
                <tr>
                  <td>
                    <Card>
                      <h3 style={thisPosition}>FilmDex <SocialIcon url="https://github.com/mdlahey1/Project1-Front-End-App-Group6" network='github' bgColor="#918c8a"/></h3>
                      <CardHeader>
                        <Nav
                          className="nav-tabs-neutral justify-content-center"
                          data-background-color="blue"
                          role="tablist"
                          tabs
                        >
                          <NavItem>
                            <NavLink
                              className={pills === "1" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("1");
                              }}
                            >
                              Description
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "2" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("2");
                              }}
                            >
                              Problem and Solution
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "3" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("3");
                              }}
                            >
                              Tools and Technologies
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "4" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("4");
                              }}
                            >
                              Core Concepts
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"pills" + pills}
                        >
                          <TabPane tabId="pills1">
                            <p>
                            
                          The "FilmDex" is a collaborative effort resulting in a web application that utilizes multiple third-party APIs to provide comprehensive Movie & TV Show information, including reviews and streaming access from over 150+ services.

                          With this project, our team aimed to develop an application that seamlessly merges the time-consuming process of searching for your next Movie/TV Show into a unified and intuitive user experience. Instead of individually searching for reviews, streaming availability, and recommendations, the "FilmDex" simplifies and expedites this process, offering a convenient solution for users.
                            </p>
                          </TabPane>
                          <TabPane tabId="pills2">
                            <p>
                            Problem: Users face the inconvenience of navigating multiple platforms to access comprehensive information on movies and TV shows, including reviews, streaming availability, and recommendations. <br></br><br></br>
                            Solution: Filmdex is a web application that offers a centralized platform, integrating multiple third-party APIs, to streamline the process of finding and accessing comprehensive information on movies and TV shows, eliminating the need to navigate between various platforms.
                            </p>
                          </TabPane>
                          <TabPane tabId="pills3">
                            <p>
                            JavaScript<br></br>
                            HTML<br></br>
                            CSS<br></br> 
                            GitHub<br></br>
                            Third Party APIs.
                            </p>
                          </TabPane>
                          <TabPane tabId="pills4">
                            <p>
                            
                              Web application development<br></br>
                              Third-party API integration<br></br>
                              Data aggregation and retrieval<br></br>
                              User interface design<br></br>
                              User experience optimization<br></br>
                              Information display and organization<br></br>
                              Search functionality<br></br>
                              Data filtering and sorting<br></br>
                              Recommendations algorithms<br></br>
                              Streamlining access to reviews and streaming availability
                            </p>
                          </TabPane>
                        </TabContent>
                        <div class = "firsApp">
                          <a href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/">
                            <img src={filmDexImg} style={thisSize}></img>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </td>
                  <td>
                    <Card>
                      <h3 style={thisPosition}>Magpie Gallery <SocialIcon url="https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project" network='github' bgColor="#918c8a"/></h3>
                      <CardHeader>
                        <Nav
                          className="nav-tabs-neutral justify-content-center"
                          data-background-color="blue"
                          role="tablist"
                          tabs
                        >
                          <NavItem>
                            <NavLink
                              className={pills === "1" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("1");
                              }}
                            >
                              Description
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "2" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("2");
                              }}
                            >
                              Problem and Solution
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "3" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("3");
                              }}
                            >
                              Tools and Technologies
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pills === "4" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPills("4");
                              }}
                            >
                              Core Concepts
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </CardHeader>
                      <CardBody>
                        <TabContent
                          className="text-center"
                          activeTab={"pills" + pills}
                        >
                          <TabPane tabId="pills1">
                            <p>
                            "Magpie Gallery" is a group project that empowers artists to showcase their creations while providing art enthusiasts with a captivating space to explore contemporary artwork.
                            With this application, our team craeted a platform where artists can easily upload their work, gaining a platform to share their talent and creativity with a wider audience. Art enthusiasts, on the other hand, have the opportunity to immerse themselves in the world of contemporary art, accessing a diverse range of captivating artwork.
                            Through this platform, artists and art enthusiasts come together, fostering a vibrant community that celebrates artistic expression and encourages the discovery of new and exciting artwork. Does adding more to this description solve my problem?
                            <br></br><br></br>
                            </p>
                          </TabPane>
                          <TabPane tabId="pills2">
                            <p>
                            Problem: Artists lack a centralized platform to showcase their work and connect with fellow artists, hindering their ability to build a vibrant and inclusive community.<br></br><br></br>
                            Solution: Magpie Gallery is a full-stack web application that provides artists with a platform to showcase their work, connect with others, and foster a vibrant community of creators.
                            </p>
                          </TabPane>
                          <TabPane tabId="pills3">
                            <p>
                            JavaScript<br></br>
                            HTML<br></br> 
                            CSS<br></br>
                            MySQL<br></br> 
                            Sequelize<br></br>
                            Express.js<br></br>
                            Node.js<br></br>
                            Handlebars<br></br>
                            Heroku<br></br>
                            GitHub<br></br>
                            body-parser<br></br>
                            cookie-parser<br></br>
                            morgan<br></br>
                            hbs<br></br>
                            bcrypt<br></br>
                            dcrypt<br></br>
                            dotenv<br></br>
                            express-session<br></br>
                            express-handlebars
                            </p>
                          </TabPane>
                          <TabPane tabId="pills4">
                            <p>
                            Full-stack web development<br></br>
                            User authentication and authorization<br></br>
                            Database management (MySQL)<br></br>
                            Server-side scripting (Node.js)<br></br>
                            Web framework (Express.js)<br></br>
                            Templating engine (Handlebars)<br></br>
                            Front-end interactivity (JavaScript)<br></br>
                            User interface design<br></br>
                            Data security and privacy measures<br></br>
                            Community building and engagement features
                            </p>
                          </TabPane>
                        </TabContent>
                        <div class = "secondApp">
                          <a href="https://murmuring-ocean-73396.herokuapp.com/dashboard">
                            <img src={magPieGalleryImg} style={thisSize}></img>
                          </a>
                        </div>
                        <br></br>
                        <br></br>
                      </CardBody>
                    </Card>
                  </td>
                </tr>
                <tr>
                  <td>
                      <Card>
                        <h3 style={thisPosition}>Company Database <SocialIcon url="https://github.com/codingColinMcM/company_database" network='github' bgColor="#918c8a"/></h3>
                        <CardHeader>
                          <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={pills === "1" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPills("1");
                                }}
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pills === "2" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPills("2");
                                }}
                              >
                                Problem and Solution
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pills === "3" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPills("3");
                                }}
                              >
                                Tools and Technologies
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pills === "4" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPills("4");
                                }}
                              >
                                Core Concepts
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </CardHeader>
                        <CardBody>
                          <TabContent
                            className="text-center"
                            activeTab={"pills" + pills}
                          >
                            <TabPane tabId="pills1">
                              <p>
                              Solo Project: SQL database for a company
                              <br></br><br></br>
                              </p>
                            </TabPane>
                            <TabPane tabId="pills2">
                              <p>
                              Problem: Business owners require an application that enables them to conveniently view, manage, and update information about departments, roles, and employees in their company, eliminating the need for manual data organization.<br></br><br></br>
                              Solution: I developed a command-line application using Node.js and MySQL2 package, providing business owners with a user-friendly interface to interact with a MySQL database. The application allows users to view all departments, roles, and employees in formatted tables, add new departments, roles, and employees, and update an employee's role, streamlining the management process effectively.
                              </p>
                            </TabPane>
                            <TabPane tabId="pills3">
                              <p>
                              MySQL<br></br>
                              Express.js<br></br>
                              Node.js<br></br>
                              JavaScript<br></br>
                              GitHub<br></br>
                              Inquirer<br></br>
                              console.table
                              </p>
                            </TabPane>
                            <TabPane tabId="pills4">
                              <p>
                              Command-line application development<br></br>
                              Node.js programming<br></br>
                              Database management (MySQL)<br></br>
                              User input handling (Inquirer package)<br></br>
                              Data display and formatting (console.table package)<br></br>
                              CRUD operations (Create, Read, Update, Delete)<br></br>
                              Data retrieval and querying<br></br>
                              User interface design<br></br>
                              Data organization and relationships (departments, roles, employees)<br></br>
                              User management and role assignment<br></br>
                              </p>
                            </TabPane>
                          </TabContent>
                          <div class = "thirdApp">
                            <a href="https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link">
                              <img src={companyDBImg} style={thisSize}></img>
                            </a>
                          </div>
                        </CardBody>
                      </Card>
                    </td>
                    
          
                  <td><h3>E-Commerce <SocialIcon url="https://github.com/codingColinMcM/eCommerce" network='github' bgColor="#918c8a"/></h3>
                    <h5>Solo Project: Online store that uses seqelize to store department and product information</h5>
                    <h5>Problem: eCommerce sites require a robust and efficient backend solution to manage their data effectively, including setting up an Express.js API and connecting it to a MySQL database using Sequelize.</h5>
                    <h5>Solution: I addressed this problem by developing a backend solution for an eCommerce site, utilizing a functional Express.js API integrated with Sequelize, an ORM tool, to establish a seamless connection with a MySQL database. The solution involved configuring environment variables, defining Sequelize models for data entities, performing database migrations, seeding the development database, and thoroughly testing the API routes for reliable functionality. This approach offers developers a streamlined process to set up an Express.js API with Sequelize and efficiently manage data in a MySQL database.</h5>
                    <h5>Tools/Technologies Used: JavaScript, MySQL, Sequelize, Express.js, Node.js, Insomnia, GitHub, dotenv.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Backend development</li>
                      <li>Express.js framework</li>
                      <li>API configuration and routing</li>
                      <li>MySQL database management</li>
                      <li>Sequelize ORM integration</li>
                      <li>Environment variable setup</li>
                      <li>Database Schema Design</li>
                      <li>Migration and database seeding</li>
                      <li>API testing (using Insomnia Core or similar tools)</li>
                      <li>Data management and CRUD operations.</li>
                    </ul>
                    <div class = "fourthApp">
                      <a href="https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view">
                        <img src={eCommerceDBImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>

                </tr>
                <tr>

                  <td><h3>Note Taker <SocialIcon url="https://github.com/codingColinMcM/note-taker" network='github' bgColor="#918c8a"/></h3>
                    <h5>Solo Project: Express.js application that allows you to write, save, and delete notes</h5>
                    <h5>Problem: Small business owners face difficulties in organizing and tracking important tasks and thoughts, leading to disorganization, lost information, missed opportunities, and unfinished tasks.</h5>
                    <h5>Solution: To address this challenge, I have developed a note-taking application that provides small business owners with a reliable and efficient solution. The application includes a well-designed landing page with a link to the notes page, a functional notes page built with vanilla JavaScript, HTML, and CSS, JavaScript's native state management for handling user input and storing notes, a save icon for saving notes to a JSON file, and an Express router for seamless navigation. This solution offers a dependable system for organizing, managing, and referencing tasks and thoughts effectively.</h5>
                    <h5>Tools/Technologies Used: JavaScript, HTML, CSS, Express.js, Node.js, Heroku, GitHub, JSON.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Web application development</li>
                      <li>HTML and CSS for page layout and styling</li>
                      <li>Vanilla JavaScript for functionality</li>
                      <li>State management in JavaScript</li>
                      <li>JSON file handling</li>
                      <li>Express router for navigation</li>
                      <li>User input handling</li>
                      <li>User interface design and usability</li>
                      <li>Data management and CRUD operations.</li>
                    </ul>
                    <div class = "fifthApp">
                      <a href="https://fierce-spire-62517.herokuapp.com/">
                        <img src={noteTakerImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  <td><h3>Weather Dashboard <SocialIcon url="https://github.com/codingColinMcM/weatherDashboard" network='github' bgColor="#918c8a"/></h3>
                    <h5>Solo Project: A website that accesses an open source weather API and allows the user to search for the weather</h5>
                    <h5>forcast of a week for a city they search for.</h5>
                    <h5>Problem: Travelers face difficulties in planning trips without access to weather information for multiple cities, leading to time-consuming searches and overwhelming tracking of weather conditions.</h5>
                    <h5>Solution: To address this challenge, I have developed a weather dashboard application that offers a convenient and user-friendly solution for travelers. The application allows users to search for multiple cities and view current and future weather conditions. By leveraging the openweathermap.org API, the application retrieves and displays weather information in a clear and intuitive format, including city name, date, weather icon, temperature, humidity, and wind speed. Additionally, the application offers a search history feature for easy access to previously searched cities' weather data. This solution empowers travelers to plan their trips effectively based on comprehensive and up-to-date weather information.</h5>
                    <h5>Tools/Technologies Used: JavaScript, HTML, CSS, Express.js, Node.js, Heroku, GitHub, JSON.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Web application development</li>
                      <li>API integration (openweathermap.org)</li>
                      <li>User input handling</li>
                      <li>Data retrieval and display</li>
                      <li>Search history management</li>
                      <li>User interface design and usability</li>
                      <li>Weather data interpretation</li>
                    </ul>
                    <div class = "sixthApp">
                      <a href="https://codingcolinmcm.github.io/weatherDashboard/">
                        <img src={weatherAppImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  
                </tr>
            </table>
    </div>
  );
}
