import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();
// Inicializar el enrutador
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { firstName, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: `${firstName} <onboarding@resend.dev>`,  // Correo fijo desde dominio verificado
      to: ['nahuel7474@gmail.com'],  // Tu correo fijo como destinatario
      subject: `Message from ${firstName}`,
      html: `<p><strong>Name:</strong> ${firstName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
