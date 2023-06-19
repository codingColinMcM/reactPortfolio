import React from 'react';
import { SocialIcon } from 'react-social-icons';
import HeaderBackground from '../HeaderBackground';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
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
const cardStyle = {
  width: "600px", // Set the desired width percentage
  height: "1075px",
};
const blackOutline = {
  color: "#fff",
  "text-shadow": "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000"
};

export default function About() {
  const [pills, setPills] = React.useState(null);
  const [pillsMag, setPillsMag] = React.useState(null);
  const [pillsDB, setPillsDB] = React.useState(null);
  const [pillsEC, setPillsEC] = React.useState(null);
  const [pillsNote, setPillsNote] = React.useState(null);
  const [pillsW, setPillsW] = React.useState(null);
  return (
    <div>
      
      <div className="page-header clear-filter page-header-small">
        <HeaderBackground/>
        <Container>
        <h1 style={blackOutline}>My Portfolio!</h1>
        <h3 style={blackOutline}>Here you will see the projects I complete related to my software development career</h3>
        <h4 style={blackOutline}>Click the project image to be taken to the deployed website or demo video of the project</h4>
        <h4 style={blackOutline}>Click the associated GitHub icons to be taken to each project's respective GitHub repository</h4>

        </Container>
        
      </div>
      <table>
                <tr><th colspan="4" id = "aboutMe">
                </th></tr>
                <tr>
                  <td>
                    <Card style={cardStyle}>
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
                              href="#antonio"
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
                              href="#antonio"
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
                              href="#antonio"
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
                              href="#antonio"
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
                        <div className = "firsApp">
                          <a href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/">
                            <img src={filmDexImg} style={thisSize}></img>
                          </a>
                        </div>
                      </CardBody>
                    </Card>
                  </td>
                  <td>
                    <Card style={cardStyle}>
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
                              className={pillsMag === "5" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPillsMag("5");
                              }}
                            >
                              Description
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pillsMag === "6" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPillsMag("6");
                              }}
                            >
                              Problem and Solution
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pillsMag === "7" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPillsMag("7");
                              }}
                            >
                              Tools and Technologies
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={pillsMag === "8" ? "active" : ""}
                              href="#pablo"
                              onClick={(e) => {
                                e.preventDefault();
                                setPillsMag("8");
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
                          activeTab={"pills" + pillsMag}
                        >
                          <TabPane tabId="pills5">
                            <p>
                            "Magpie Gallery" is a group project that empowers artists to showcase their creations while providing art enthusiasts with a captivating space to explore contemporary artwork.
                            With this application, our team craeted a platform where artists can easily upload their work, gaining a platform to share their talent and creativity with a wider audience. Art enthusiasts, on the other hand, have the opportunity to immerse themselves in the world of contemporary art, accessing a diverse range of captivating artwork.
                            Through this platform, artists and art enthusiasts come together, fostering a vibrant community that celebrates artistic expression and encourages the discovery of new and exciting artwork. Does adding more to this description solve my problem?
                            <br></br><br></br>
                            </p>
                          </TabPane>
                          <TabPane tabId="pills6">
                            <p>
                            Problem: Artists lack a centralized platform to showcase their work and connect with fellow artists, hindering their ability to build a vibrant and inclusive community.<br></br><br></br>
                            Solution: Magpie Gallery is a full-stack web application that provides artists with a platform to showcase their work, connect with others, and foster a vibrant community of creators.
                            </p>
                          </TabPane>
                          <TabPane tabId="pills7">
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
                          <TabPane tabId="pills8">
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
                        <div className = "secondApp">
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
                      <Card style={cardStyle}>
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
                                className={pillsDB === "9" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsDB("9");
                                }}
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsDB === "10" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsDB("10");
                                }}
                              >
                                Problem and Solution
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsDB === "11" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsDB("11");
                                }}
                              >
                                Tools and Technologies
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsDB === "12" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsDB("12");
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
                            activeTab={"pills" + pillsDB}
                          >
                            <TabPane tabId="pills9">
                              <p>
                              I developed a command-line application using Node.js and MySQL2 package that allows business owners to view and manage departments, roles, and employees in their company. The application provides options to view all departments, roles, and employees in a formatted table, as well as add departments, roles, and employees. It also allows for updating an employee's role in the database. The application utilizes Inquirer for user input and console.table for formatting and displaying MySQL rows. With this application, users can perform these actions in their terminal: view departments, roles, and employees; add departments, roles, and employees; and update an employee's role. It effectively organizes and plans businesses by providing the necessary functionality for managing company information.
                              <br></br><br></br>
                              </p>
                            </TabPane>
                            <TabPane tabId="pills10">
                              <p>
                              Problem: Business owners require an application that enables them to conveniently view, manage, and update information about departments, roles, and employees in their company, eliminating the need for manual data organization.<br></br><br></br>
                              Solution: I developed a command-line application using Node.js and MySQL2 package, providing business owners with a user-friendly interface to interact with a MySQL database. The application allows users to view all departments, roles, and employees in formatted tables, add new departments, roles, and employees, and update an employee's role, streamlining the management process effectively.
                              </p>
                            </TabPane>
                            <TabPane tabId="pills11">
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
                            <TabPane tabId="pills12">
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
                          <div className = "thirdApp">
                            <a href="https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link">
                              <img src={companyDBImg} style={thisSize}></img>
                            </a>
                          </div>
                        </CardBody>
                      </Card>
                    </td>
                    <td>
                      <Card style={cardStyle}>
                        <h3 style={thisPosition}>E-Commerce <SocialIcon url="https://github.com/codingColinMcM/eCommerce" network='github' bgColor="#918c8a"/></h3>
                        <CardHeader>
                          <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={pillsEC === "13" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsEC("13");
                                }}
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsEC === "14" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsEC("14");
                                }}
                              >
                                Problem and Solution
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsEC === "15" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsEC("15");
                                }}
                              >
                                Tools and Technologies
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsEC === "16" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsEC("16");
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
                            activeTab={"pills" + pillsEC}
                          >
                            <TabPane tabId="pills13">
                              <p>
                              I have built the back end for an e-commerce site by configuring an Express.js API to use Sequelize for MySQL database interaction. This involved setting up environment variables and Sequelize configuration, defining models for data entities, running database migrations, seeding the development database, and testing API routes with Insomnia Core. This solution offers a reliable and efficient way for developers to manage their e-commerce site's back end, utilizing Sequelize and MySQL for seamless data management.
                              <br></br><br></br>
                              </p>
                            </TabPane>
                            <TabPane tabId="pills14">
                              <p>
                              Problem: eCommerce sites require a robust and efficient backend solution to manage their data effectively, including setting up an Express.js API and connecting it to a MySQL database using Sequelize.<br></br><br></br>
                              Solution: I addressed this problem by developing a backend solution for an eCommerce site, utilizing a functional Express.js API integrated with Sequelize, an ORM tool, to establish a seamless connection with a MySQL database. The solution involved configuring environment variables, defining Sequelize models for data entities, performing database migrations, seeding the development database, and thoroughly testing the API routes for reliable functionality. This approach offers developers a streamlined process to set up an Express.js API with Sequelize and efficiently manage data in a MySQL database.
                              </p>
                            </TabPane>
                            <TabPane tabId="pills15">
                              <p>
                              JavaScript<br></br>
                              MySQL<br></br>
                              Sequelize<br></br>
                              Express.js<br></br>
                              Node.js<br></br>
                              Insomnia<br></br>
                              GitHub<br></br>
                              dotenv
                              </p>
                            </TabPane>
                            <TabPane tabId="pills16">
                              <p>
                              Backend development<br></br>
                              Express.js framework<br></br>
                              API configuration and routing<br></br>
                              MySQL database management<br></br>
                              Sequelize ORM integration<br></br>
                              Environment variable setup<br></br>
                              Database Schema Design<br></br>
                              Migration and database seeding<br></br>
                              API testing (using Insomnia Core or similar tools)<br></br>
                              Data management and CRUD operations.
                              </p>
                            </TabPane>
                          </TabContent>
                          <div className = "fourthApp">
                            <a href="https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view">
                              <img src={eCommerceDBImg} style={thisSize}></img>
                            </a>
                          </div>
                        </CardBody>
                      </Card>
                    </td>
                </tr>
                <tr>
                <td>
                      <Card style={cardStyle}>
                        <h3 style={thisPosition}>Note Taker<SocialIcon url="https://github.com/codingColinMcM/Note-Taker-Express" network='github' bgColor="#918c8a"/></h3>
                        <CardHeader>
                          <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={pillsNote === "17" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsNote("17");
                                }}
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsNote === "18" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsNote("18");
                                }}
                              >
                                Problem and Solution
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsNote === "19" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsNote("19");
                                }}
                              >
                                Tools and Technologies
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsNote === "20" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsNote("20");
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
                            activeTab={"pills" + pillsNote}
                          >
                            <TabPane tabId="pills17">
                              <p>
                              I have created a note-taking application to address the challenge of disorganized thoughts and tasks for small business owners. The application includes a landing page designed with HTML and CSS, which leads to a functional notes page built with vanilla JavaScript, HTML, and CSS. The notes page displays existing notes on the left-hand column and offers three empty fields for new notes on the right-hand column. Using JavaScript's state management, user input is handled and new notes are stored. A save icon in the navigation bar allows users to save their notes to a JSON file. Smooth navigation between the landing page and notes page is facilitated by an Express router. This note-taking application provides small business owners with a straightforward and powerful solution for organizing their thoughts and tasks, offering a reliable and efficient system for note-taking and management.
                              <br></br><br></br>
                              </p>
                            </TabPane>
                            <TabPane tabId="pills18">
                              <p>
                              Problem: Small business owners face difficulties in organizing and tracking important tasks and thoughts, leading to disorganization, lost information, missed opportunities, and unfinished tasks.<br></br><br></br>
                              Solution: To address this challenge, I have developed a note-taking application that provides small business owners with a reliable and efficient solution. The application includes a well-designed landing page with a link to the notes page, a functional notes page built with vanilla JavaScript, HTML, and CSS, JavaScript's native state management for handling user input and storing notes, a save icon for saving notes to a JSON file, and an Express router for seamless navigation. This solution offers a dependable system for organizing, managing, and referencing tasks and thoughts effectively.                              </p>
                            </TabPane>
                            <TabPane tabId="pills19">
                              <p>
                              JavaScript<br></br>
                              HTML<br></br>
                              CSS<br></br>
                              Express.js<br></br>
                              Node.js<br></br>
                              Heroku<br></br>
                              GitHub<br></br>
                              JSON
                              </p>
                            </TabPane>
                            <TabPane tabId="pills20">
                              <p>
                              Web application development<br></br>
                              HTML and CSS for page layout and styling<br></br>
                              Vanilla JavaScript for functionality<br></br>
                              State management in JavaScript<br></br>
                              JSON file handling<br></br>
                              Express router for navigation<br></br>
                              User input handling<br></br>
                              User interface design and usability<br></br>
                              Data management and CRUD operations.
                              </p>
                            </TabPane>
                          </TabContent>
                          <div className = "fifthApp">
                            <a href="https://fierce-spire-62517.herokuapp.com/">
                              <img src={noteTakerImg} style={thisSize}></img>
                            </a>
                          </div>
                        </CardBody>
                      </Card>
                    </td>
                  <td>
                      <Card style={cardStyle}>
                        <h3 style={thisPosition}>Weather Dashboard<SocialIcon url="https://github.com/codingColinMcM/weatherDashboard" network='github' bgColor="#918c8a"/></h3>
                        <CardHeader>
                          <Nav
                            className="nav-tabs-neutral justify-content-center"
                            data-background-color="blue"
                            role="tablist"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                className={pillsW === "21" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsW("21");
                                }}
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsW === "22" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsW("22");
                                }}
                              >
                                Problem and Solution
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsW === "23" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsW("23");
                                }}
                              >
                                Tools and Technologies
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={pillsW === "24" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setPillsW("24");
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
                            activeTab={"pills" + pillsW}
                          >
                            <TabPane tabId="pills21">
                              <p>
                              I have developed a weather dashboard application to address the challenge of planning trips without knowing the weather outlook for multiple cities. This user-friendly application allows travelers to search for multiple cities and view the current and future weather conditions for each city. It features an intuitive display of information retrieved from the openweathermap.org API, including city name, date, weather condition icons, temperature, humidity, and wind speed. The application also offers a 5-day forecast for future weather conditions. Users can conveniently add cities to their search history for easy access to weather information later. The weather dashboard application provides a comprehensive and invaluable solution for travelers to stay informed about weather conditions and plan their trips accordingly.
                              <br></br><br></br>
                              </p>
                            </TabPane>
                            <TabPane tabId="pills22">
                              <p>
                              Problem: Travelers face difficulties in planning trips without access to weather information for multiple cities, leading to time-consuming searches and overwhelming tracking of weather conditions<br></br><br></br>
                              Solution: To address this challenge, I have developed a weather dashboard application that offers a convenient and user-friendly solution for travelers. The application allows users to search for multiple cities and view current and future weather conditions. By leveraging the openweathermap.org API, the application retrieves and displays weather information in a clear and intuitive format, including city name, date, weather icon, temperature, humidity, and wind speed. Additionally, the application offers a search history feature for easy access to previously searched cities' weather data. This solution empowers travelers to plan their trips effectively based on comprehensive and up-to-date weather information.
                              </p>
                            </TabPane>
                            <TabPane tabId="pills23">
                              <p>
                              JavaScript<br></br>
                              HTML<br></br>
                              CSS<br></br>
                              Third-Party-API's<br></br>
                              Bootstrap<br></br>
                              GitHub
                              </p>
                            </TabPane>
                            <TabPane tabId="pills24">
                              <p>
                              Web application development<br></br>
                              API integration (openweathermap.org)<br></br>
                              User input handling<br></br>
                              Data retrieval and display<br></br>
                              Search history management<br></br>
                              User interface design and usability<br></br>
                              Weather data interpretation.
                              </p>
                            </TabPane>
                          </TabContent>
                          <div className = "sixthApp">
                            <a href="https://codingcolinmcm.github.io/weatherDashboard/">
                              <img src={weatherAppImg} style={thisSize}></img>
                            </a>
                          </div>
                        </CardBody>
                      </Card>
                    </td>
                </tr>
            </table>
    </div>
  );
}
