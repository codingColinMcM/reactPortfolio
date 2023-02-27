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
                    <div class = "firsApp">
                      <a href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/">
                        <img src={filmDexImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  <td><h3>Magpie Gallery <SocialIcon url="https://github.com/marysgreenwood/Spaghetti-on-the-Wall-Project" network='github' bgColor="#918c8a"/></h3>
                    <h5>Group Project: An online art gallery where artists can sign up and upload their art and search for art</h5>
                    <div class = "secondApp">
                      <a href="https://murmuring-ocean-73396.herokuapp.com/dashboard">
                        <img src={magPieGalleryImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  
                    
                </tr>
                <tr>

                  <td><h3>Company Database <SocialIcon url="https://github.com/codingColinMcM/company_database" network='github' bgColor="#918c8a"/></h3>
                    <h5>SQL database for a company</h5>
                    <div class = "thirdApp">
                      <a href="https://drive.google.com/file/d/1Ru1HgPWMflV5q_3wtXiLwdxUPVTR_oOe/view?usp=share_link">
                        <img src={companyDBImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  <td><h3>E-Commerce <SocialIcon url="https://github.com/codingColinMcM/eCommerce" network='github' bgColor="#918c8a"/></h3>
                    <h5>Online store that uses seqelize to store department and product information</h5>
                    <div class = "fourthApp">
                      <a href="https://drive.google.com/file/d/1XdVn1MfiiEsmpfYC9HA0WPymaHQdRvsc/view">
                        <img src={eCommerceDBImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>

                </tr>
                <tr>

                  <td><h3>Note Taker <SocialIcon url="https://github.com/codingColinMcM/note-taker" network='github' bgColor="#918c8a"/></h3>
                    <h5>Express.js application that allows you to write, save, and delete notes</h5>
                    <div class = "fifthApp">
                      <a href="https://fierce-spire-62517.herokuapp.com/">
                        <img src={noteTakerImg} style={thisSize}></img>
                      </a>
                    </div>
                  </td>
                  <td><h3>Weather Dashboard <SocialIcon url="https://github.com/codingColinMcM/weatherDashboard" network='github' bgColor="#918c8a"/></h3>
                    <h5>A website that accesses an open source weather API and allows the user to search for the weather</h5>
                    <h5>forcast of a week for a city they search for.</h5>
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
