import React from 'react';

import profilePic from '../assets/profile/profile-pic.jpeg';
import linkedInPic from '../assets/icons/linkedin.png';
import gitHubPic from '../assets/icons/github.png';

const Profile: React.FC = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="Todd Sandler profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Todd Sandler</h1>
        <p className="section__text__p2">Full Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/Todd Sandler Resume.pdf')}>Download CV</button>
          <button className="btn btn-color-1" onClick={() => window.scrollTo({ top: document.getElementById('contact')!.offsetTop, behavior: 'smooth' })}>Contact</button>
        </div>
        <div id="socials-container">
          <img src={linkedInPic} alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://www.linkedin.com/in/todd-sandler-5978a320b/', '_blank', 'noopener noreferrer')} />
          <img src={gitHubPic} alt="My GitHub profile" className="icon" onClick={() => window.open('https://github.com/ToddMS', '_blank', 'noopener noreferrer')} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
