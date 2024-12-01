import React, { useState } from 'react';
import '/src/styles/Contact.css'; // Import du fichier CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // On soumet le formulaire vers Formspree
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then(() => alert('Message envoyé avec succès !'))
      .catch((error) => alert('Erreur lors de l\'envoi du message'));
  };

  return (
    <div className="contact">
      <h1>Contactez-moi</h1>
      <p>Vous avez des questions ou des propositions ? N'hésitez pas à me contacter !</p>

      <form action="https://formspree.io/f/mrbgrbbj" method="POST">
  <div className="form-group">
    <label htmlFor="name">Nom</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit" className="submit-btn">Envoyer</button>
</form>

    </div>
  );
};

export default Contact;
