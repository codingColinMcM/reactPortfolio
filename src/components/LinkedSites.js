import React from 'react';
import { SocialIcon } from 'react-social-icons';

function LinkedSites() {
  return (
    <ul className="linked-sites"  style={{listStyleType: "none"}}>
      <li>
        <SocialIcon url="https://github.com/codingColinMcM" network='github' className="linked-site" fgColor="white" />
      </li>
      <li>
        <SocialIcon url="https://linkedin.com/in/colin-mcmurtray-5a0a1424a" network='linkedin' className="linked-site" fgColor="white" />
      </li>
      <li>
        <SocialIcon url="https://twitter.com/CodingColinMcM" network='twitter' className="linked-site" fgColor="white" />
      </li>
      <li>
        <SocialIcon url="https://stackoverflow.com/users/21230554/colin-mcmurtray" network='stackoverflow' className="linked-site" fgColor="white" />
      </li>
    </ul>
  );
}

export default LinkedSites;

