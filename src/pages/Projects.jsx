import React, { useState } from 'react';
import '/src/styles/Projects.css'; // Import du fichier CSS

const Projects = () => {
  // Liste des projets
  const projects = [
    {
      title: 'Portfolio',
      description: 'Un site web pour montrer mes compétences.',
      image: 'portfolio.png',
      details: 'Ce projet est un portfolio personnel que j\'ai créé pour montrer mes compétences et projets.',
    },
   
  ];

  // État pour afficher ou masquer la modale
  const [selectedProject, setSelectedProject] = useState(null);

  // Fonction pour ouvrir la modale
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Fenêtre modale */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <p>{selectedProject.details}</p>
            <button className="back-btn" onClick={closeModal}>Retour aux projets</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
