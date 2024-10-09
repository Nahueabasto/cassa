import express from 'express';
import cors from 'cors';  // Importar cors
import dotenv from 'dotenv';
import route from './routes/route.js';  // Importar las rutas de emails

// Cargar las variables de entorno
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/send-email', route);  // Usando la ruta del archivo routeSend.js

export default app;