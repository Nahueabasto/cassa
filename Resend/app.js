// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/route.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://villa-berna.vercel.app"],
    credentials: true,
    methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(route); // Conectar el enrutador aquí


export default app;
