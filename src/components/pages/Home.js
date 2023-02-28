import React from 'react';
const filmDexImg = require("./../../assets/images/PXL_20220627_185955559.jpg");

const thisSize = {
  width: "25%"
}

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <a href="https://mdlahey1.github.io/Project1-Front-End-App-Group6/">
        <img src={filmDexImg} style={thisSize}></img>
      </a>
      <p>
      I am Coding Bootcamp student that has experience with a multitude of technologies. Class of 2022 Computer Science Minor hungry 
      to learn more about the field with years of academic experience in Computer Science. Trustworthy Eagle Scout with leadership 
      skills and planning skills.  Able to perform tasks that require strength, dedication, and careful consideration.
      </p>
    </div>
  );
}
