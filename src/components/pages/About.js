import React from 'react';
import { SocialIcon } from 'react-social-icons';
const filmDexImg = require("./../../assets/images/Screenshot 2022-11-01 184004.png");
const magPieGalleryImg = require("./../../assets/images/Screenshot 2023-02-27 010038.png")
const companyDBImg = require("./../../assets/images/Screenshot 2023-02-16 220621.png");
const eCommerceDBImg = require("./../../assets/images/216521080-b8715e4d-ff57-4dc3-bf47-58db92542cfd.png");
const noteTakerImg = require("./../../assets/images/Screenshot 2023-02-20 134924.png");
const weatherAppImg = require("./../../assets/images/198859584-5e880983-e237-40c7-a936-3ef0d05e6b39.png");

const thisSize = {
  width: "45%"
}

export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>
      <table>
                <tr><th colspan="4" id = "aboutMe"><p>My Portfolio! Here you will see the projects I complete related to my software development career.</p>
                <p>Click the associated GitHub icons to be taken to each project's respective GitHub repository</p>
                </th></tr>
                <tr>

                  <td><h3>FilmDex <SocialIcon url="https://github.com/mdlahey1/Project1-Front-End-App-Group6" network='github' bgColor="#918c8a"/></h3>
                    <h5>Group project: Exclusively frontend application that allows the user to search for movies.</h5>
                    <h5>Problem: Users face the inconvenience of navigating multiple platforms to access comprehensive information on movies and TV shows, including reviews, streaming availability, and recommendations.</h5>
                    <h5>Solution: Filmdex is a web application that offers a centralized platform, integrating multiple third-party APIs, to streamline the process of finding and accessing comprehensive information on movies and TV shows, eliminating the need to navigate between various platforms.</h5>
                    <h5>Tools/Technologies Used: JavaScript, HTML, CSS, GitHub, and Third Party APIs.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Web application development</li>
                      <li>Third-party API integration</li>
                      <li>Data aggregation and retrieval</li>
                      <li>User interface design</li>
                      <li>User experience optimization</li>
                      <li>Information display and organization</li>
                      <li>Search functionality</li>
                      <li>Data filtering and sorting</li>
                      <li>Recommendations algorithms</li>
                      <li>Streamlining access to reviews and streaming availability.</li>
                    </ul>
                    <div class = "firsApp">
                      <a href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/">
                        <img src={filmDexImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  <td><h3>Magpie Gallery <SocialIcon url="https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project" network='github' bgColor="#918c8a"/></h3>
                    <h5>Group Project: An online art gallery where artists can sign up and upload their art and search for art</h5>
                    <h5>Problem: Artists lack a centralized platform to showcase their work and connect with fellow artists, hindering their ability to build a vibrant and inclusive community.</h5>
                    <h5>Solution: Magpie Gallery is a full-stack web application that provides artists with a platform to showcase their work, connect with others, and foster a vibrant community of creators.</h5>
                    <h5>Tools/Technologies Used: JavaScript, HTML, CSS, MySQL, Sequelize, Express.js, Node.js, Handlebars, Heroku, GitHub, body-parser, cookie-parser, morgan, hbs, bcrypt, dcrypt, dotenv, express-session, and express-handlebars.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Full-stack web development</li>
                      <li>User authentication and authorization</li>
                      <li>Database management (MySQL)</li>
                      <li>Server-side scripting (Node.js)</li>
                      <li>Web framework (Express.js)</li>
                      <li>Templating engine (Handlebars)</li>
                      <li>Front-end interactivity (JavaScript)</li>
                      <li>User interface design</li>
                      <li>Data security and privacy measures</li>
                      <li>Community building and engagement features</li>
                    </ul>
                    <div class = "secondApp">
                      <a href="https://murmuring-ocean-73396.herokuapp.com/dashboard">
                        <img src={magPieGalleryImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  
                    
                </tr>
                <tr>

                  <td><h3>Company Database <SocialIcon url="https://github.com/codingColinMcM/company_database" network='github' bgColor="#918c8a"/></h3>
                    <h5>Solo Project: SQL database for a company</h5>
                    <h5>Problem: Business owners require an application that enables them to conveniently view, manage, and update information about departments, roles, and employees in their company, eliminating the need for manual data organization.</h5>
                    <h5>Solution: I developed a command-line application using Node.js and MySQL2 package, providing business owners with a user-friendly interface to interact with a MySQL database. The application allows users to view all departments, roles, and employees in formatted tables, add new departments, roles, and employees, and update an employee's role, streamlining the management process effectively.</h5>
                    <h5>Tools/Technologies Used:MySQL, Express.js, Node.js, JavaScript, GitHub, Inquirer, console.table.</h5>
                    <h5>Core Concepts:</h5>
                    <ul>
                      <li>Command-line application development</li>
                      <li>Node.js programming</li>
                      <li>Database management (MySQL)</li>
                      <li>User input handling (Inquirer package)</li>
                      <li>Data display and formatting (console.table package)</li>
                      <li>CRUD operations (Create, Read, Update, Delete)</li>
                      <li>Data retrieval and querying</li>
                      <li>User interface design</li>
                      <li>Data organization and relationships (departments, roles, employees)</li>
                      <li>User management and role assignment.</li>
                    </ul>
                    <div class = "thirdApp">
                      <a href="https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link">
                        <img src={companyDBImg} style={thisSize}></img>
                      </a>
                    </div>
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
