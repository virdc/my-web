import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src="/cv-foto.jpg"alt="Virginia Diaz Cappella"/>

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/virdc" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/virginia-diaz-cappella/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Virginia Diaz Cappella</h1>
          <p>Analista de sistemas || Desarrollo Full Stack</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/virdc" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/virginia-diaz-cappella/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;