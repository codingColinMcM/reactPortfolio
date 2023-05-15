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
     Hello, I'm Colin McMurtray, a passionate software developer with a Bachelor's Degree in Geography and a Computer Science Minor from the University of Mary Washington. My academic journey as a computer science minor at Mary Washington provided me with a well-rounded skill set that complements my practical knowledge gained through the UNC Chapel Hill Coding Bootcamp. I thrive on solving complex problems and have hands-on experience applying cutting-edge technologies to develop innovative solutions.

Throughout my coursework, I delved into various computer science subjects that have shaped my technical expertise. These courses equipped me with programming skills, problem-solving abilities, and a strong foundation in computer science concepts.

In the course CPSC 220: Computer Programming and Problem Solving, I honed my programming skills and problem-solving abilities, allowing me to gain proficiency in languages such as [mention relevant languages].

CPSC 240: Object-oriented Analysis and Design focused on object-oriented analysis and design principles. Through this course, I developed a structured approach to software development with an emphasis on code modularity and reusability.

CPSC 284: Applied Discreet Mathematics provided me with a solid understanding of the mathematical foundations of computer science, including algorithms, logic, and graph theory. This knowledge has proven invaluable when tackling complex programming challenges.

Furthermore, CPSC 350: Applications of Databases introduced me to the practical applications of databases. It equipped me with the skills to design and implement efficient data storage solutions.

In CPSC 370A9: Information Storage and Retrieval, I gained insights into information storage and retrieval techniques, expanding my knowledge of organizing and retrieving data in large-scale systems.

Lastly, CPSC 414: Networking broadened my understanding of networking. This course covered topics such as protocols, security, and network architectures, enhancing my ability to develop robust and secure networked applications.

During my time in the bootcamp, I had the opportunity to work on various projects that challenged my skills in React.js, which is the primary technology behind my portfolio. Through these projects, I gained practical experience in building responsive and interactive web applications, leveraging React.js components, state management, and routing.

Beyond technical expertise, I bring a strong sense of leadership, discipline, and meticulous planning to every project I undertake. As an Eagle Scout, I value teamwork, meeting deadlines, and delivering high-quality results.

Combining my academic knowledge as a computer science minor at Mary Washington with the hands-on experience I gained during the bootcamp, I am well-prepared to tackle real-world challenges and contribute to innovative software development projects.

I am excited to leverage my comprehensive skill set, encompassing both theoretical concepts and practical applications, to excel in a software development role. Please explore my portfolio to see examples of my work, and don't hesitate to reach out for further discussions or potential collaboration opportunities.
      </p>
    </div>
  );
}
