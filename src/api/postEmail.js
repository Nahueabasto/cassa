import axios from "./axios";

export const registerEmail = (emailData) => axios.post(`/email`, emailData); // Función para enviar el correo
