import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

function LinkedSites() {

  const styleSocials = {
    listStyleType:"none",
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "16px",
    textDecoration: "none"
  } 
  return (
    <ul className="link linked-sites">
      
      <li className="linked-site" style={styleSocials}>
        <SocialIcon url="https://github.com/codingColinMcM" network='github'/>
      </li>

      <li className="linked-site" style={styleSocials}> 
        <SocialIcon url="https://linkedin.com/in/colin-mcmurtray-5a0a1424a" network='linkedin'/>
      </li>

      <li className="linked-site" style={styleSocials}>  
        <SocialIcon url="https://twitter.com/CodingColinMcM" network='twitter'/>
      </li>

      <li className="linked-site" style={styleSocials}>
          <SocialIcon url="https://stackoverflow.com/users/21230554/colin-mcmurtray" network='stackoverflow'/>
      </li>
    </ul>
  );
}

export default LinkedSites;