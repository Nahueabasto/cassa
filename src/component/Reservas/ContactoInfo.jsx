import React, { useState } from 'react';
import "./ContactoInfo.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({
          firstName: '',
          email: '',
          message: '',
        });
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='containe'>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Formulario de contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='firstName'>Nombre:</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Correo electrónico:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Mensaje:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Enviar
            </button>
          </form>
        </div>
        <div className='col-md-6'>
          <h3>Ubicación</h3>
          <div className='map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27093.745263410543!2d-64.75093310327338!3d-31.914254288276027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2ca62efc6e437%3A0xef69decb8b3dc9cb!2sVilla%20Berna%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1728328398932!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: '0' }}  // Corregido el estilo
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
