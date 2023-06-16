# Software-Development-Portfolio-React

I updated a bunch of descriptions but soon I'll have to go to Moe's :'(

## Description 
### Problem:

As an employer seeking candidates experienced in building web applications, I need a way to assess potential employees by viewing their deployed React portfolio of work samples. The portfolio should adhere to specific criteria, enabling me to determine if the candidate is suitable for an open position.

### Solution:

To address this requirement, I have developed a single-page application portfolio for web developers. The portfolio satisfies the given acceptance criteria, providing a seamless and intuitive experience for employers evaluating candidates. The solution involves the following steps:

1. Creating a well-structured React application that encompasses the entire portfolio.
2. Designing a header section that prominently displays the developer's name and incorporates a navigation menu for easy access to different sections of the portfolio.
3. Implementing navigation titles, such as "About Me," "Portfolio," "Contact," and "Resume," which are presented in the header section. The current section's title is highlighted, providing visual feedback to the user.
4. Employing smooth navigation behavior that allows clicking on a navigation title to display the corresponding section below the header without reloading the entire page. The selected title remains highlighted, enhancing the user experience.
5. Setting the default selection to the "About Me" section when loading the portfolio for the first time, ensuring that employers immediately receive an overview of the developer.
6. Crafting the "About Me" section to showcase a recent photo or avatar of the developer along with a concise bio, providing employers with an initial impression of the candidate.
7. Developing the "Portfolio" section, which presents titled images of six applications developed by the developer. Each image links to both the deployed application and the corresponding GitHub repository, allowing employers to explore the candidate's work in detail.
8. Constructing the "Contact" section, which features a user-friendly form with fields for name, email address, and a message. Employers are notified when a field is required or when an invalid email address is entered, ensuring accurate and complete information.
9. Implementing the "Resume" section, including a link to download the developer's resume and a comprehensive list of the developer's proficiencies, enabling employers to assess the candidate's skill set.
10. Designing a footer that presents text or icon links to the developer's GitHub and LinkedIn profiles, as well as their profile on a third platform such as Stack Overflow or Twitter. This facilitates further exploration of the developer's online presence.

By following these steps, I have created a polished and comprehensive single-page application portfolio for web developers. Employers can confidently evaluate potential candidates based on their React portfolio, assess their capabilities, and make informed decisions regarding employment opportunities.

## Table of Contents
- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Demo Video](#demo)
- [License](#license)
- [Questions?](#quest)

## Overview 

The file structure of the React portfolio application is organized as follows:

* The main directory contains the public folder with index.html, manifest.json, robot.txt, logo.png files, and a logo.ico file.
* The main directory also includes the src folder with an assets folder, a components folder, App.css, App.js, App.test.js, index.css, index.js, logo.svg, reportWebVitals.js, and setupTests.js files.
* The assets folder within src contains a css folder with style.css, a docs folder with the resume, and an images folder with a headshot for the About Me page and project screenshots.
* The components folder within src includes a pages folder with React components for About, Portfolio, Resume, and Contact pages.
The components folder within src also contains a LinkedSites.js file for handling hyperlinks and icons of GitHub, LinkedIn, StackOverflow, and Twitter.
* The components folder within src also includes a NavTabs.js file for managing navigation tabs.
* The components folder within src further contains a PortfolioContainer.js file for handling page changes.
* The main directory additionally includes .gitignore, LICENSE, README.md, package-lock.json, and package.json files.

Overall, this file structure organizes the React portfolio application's components, assets, pages, and necessary files in a logical manner. It provides a clear and coherent structure for development, making it easier to locate and manage different aspects of the application.

## Installation
To run this project, install it locally using npm:

```npm install```

## Usage
After installing npm packages, the application will be invoked by using the following command:

npm start
Deployment
Install gh-pages:

```npm install -D gh-pages```

Edit package.json:

```
"homepage": "http://<username>.github.io/photo-port",
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

Then run:

```npm run deploy```
  
## Screenshot

![image](https://user-images.githubusercontent.com/112663656/221924444-b2a890f0-652e-4967-bf23-9874287776b9.png)

## Deployed URL

<a href="https://codingcolinmcm.github.io/reactPortfolio/">Portfolio</a>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<pre>
The MIT License

© Colin McMurtray University at North Carolina Chapel Hill Coding Bootcamp MIT License Copyright (c) 2023 Permission is hereby granted, free of charge, to 
any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to 
whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
</pre>

## Questions? <a name="quest"></a>

If you have any questions, please reach out to me using one of the following:

- [Email](mailto:mcmurtraycolin@gmail.com)
- [GitHub Profile](https://github.com/codingColinMcM)
