import axios from "axios";

let baseURL = "http://localhost:3000";  // URL por defecto para entorno de desarrollo

// Verifica si el hostname es localhost, y si es así, utiliza la URL de desarrollo
if (window.location.hostname === 'localhost') {
    baseURL = 'http://localhost:3000';
} else {
    // Si no es localhost, asume que está en producción y utiliza la URL de producción
    baseURL = 'https://cassa-psi.vercel.app/?vercelToolbarCode=3_qSWPWE1OdLGa6/';
}

// Crea una instancia de axios con la URL correspondiente
const instancia = axios.create({
    baseURL: baseURL,
    withCredentials: true
});

export default instancia;