// app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/route.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://cassa-psi.vercel.app"],
    credentials: true,
}));
app.use(express.json());
app.use(route); // Conectar el enrutador aquí

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

export default app;
