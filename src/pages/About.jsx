import React from 'react';
import '/src/styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>À propos de moi</h1>
        <p className="about-intro">
          Bonjour ! Je m'appelle <span className="highlight">Mathis</span>, j'ai <span className="highlight">21 ans</span> 
          et je suis passionné par plusieurs univers : les <span className="highlight">jeux vidéo</span>, 
          le <span className="highlight">cinéma</span>, l’<span className="highlight">art en général</span>, 
          et le <span className="highlight">sport</span>, que j’aime autant pratiquer que regarder.
        </p>
        <p className="about-details">
          En tant que développeur, je suis motivé par la création et l'innovation. J'aime relever des défis en construisant des 
          solutions modernes et esthétiques grâce à mes compétences techniques et ma créativité.
        </p>
        <h2>Technologies que j'utilise :</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <img src="/public/html.png" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="tech-item">
            <img src="/public/css.png" alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="tech-item">
            <img src="/public/js.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="tech-item">
            <img src="/public/unreal.png" alt="Unreal Engine" />
            <p>Unreal Engine</p>
          </div>
          <div className="tech-item">
            <img src="/public/php.png" alt="PHP" />
            <p>PHP</p>
          </div>
          <div className="tech-item">
            <img src="/public/go.png" alt="Go" />
            <p>Go</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
