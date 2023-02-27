import React from 'react';
const downloadResume = require("./../../assets/docs/Post-BootCamp.docx");

export default function Blog() {
  return (
    <div>
      <h1>My Resume</h1>
      <h4>Download my <a href={downloadResume} download="resume">resume</a></h4>
      <ul>
        <li>Languages</li>
        <ul>
          <li>SQL</li>
          <li>JavaScript ES6</li>
          <li>Java</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <li>Database Managment Systems</li>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>MariaDB</li>
          <li>Redis DB</li>
        </ul>
        <li>Back - End tools</li>
        <ul>
          <li>OOP</li>
          <li>Express</li>
          <li>Node</li>
          <li>Seqelize</li>
          <li>Mongoose</li>
        </ul>
        <li>Front - End tools</li>
        <ul>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Fetch APIs</li>
          <li>JSON</li>
          <li>Bootstrap</li>
        </ul>
        <li>Miscellaneous Skills</li>
        <ul>
          <li>Web Crawling</li>
          <li>Regex</li>
          <li>Traditional/machine learning based ranking</li>
          <li>Link - based algorithms</li>
          <li>Metadata usage</li>
          <li>OPI layers</li>
          <li>GraphQL</li>
          <li>Jest</li>
        </ul>
      </ul>
    </div>
  );
}
