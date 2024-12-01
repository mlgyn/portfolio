import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";  // Importer react-tsparticles
import Starfield from 'react-starfield';  // Importer react-starfield
import "/src/styles/Home.css";  // Assurez-vous que votre CSS est bien importé

const Home = () => {
  return (
    <div className="home">
      {/* Fond d'étoiles avec react-starfield */}
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        zIndex={-2}  // Assurez-vous que Starfield est en arrière-plan
      />

      {/* Fond d'étoiles avec react-tsparticles */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 1000 },
            color: { value: "#ffffff" },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
          },
          background: { color: { value: "#000000" } },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1, // Starfield en arrière, puis particles
        }}
      />

      {/* Bannière Visuelle avec titre animé */}
      <div className="home-banner">
        {/* Animation du titre avec framer-motion */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 1 }}   
        >
          Bienvenue dans mon univers !
        </motion.h1>            
      </div>

      {/* Section CV - Mise en avant */}
      <div className="cv-preview">
        <h2>Mon CV</h2>
        <p>
        Actuellement en cours de développement
        </p>
        <a href="/public/vita.png" download className="cv-btn">
          Télécharger mon CV
        </a>
      </div>

      {/* Section "À propos" */}
      <div className="about-preview">
        <h2>À propos de moi</h2>
        <p>
          Je suis un développeur passionné par la création de solutions modernes
          et intuitives. J'aime concevoir des expériences utilisateurs
          exceptionnelles et je travaille principalement avec React.js et
          Tailwind CSS.
        </p>
        <a href="/about" className="about-btn">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default Home;
