import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Reserva from '../component/Reservas/Reserva';

export default function Reservas(){
    return(
        <div>
       <Navbar />
       <Reserva />
       <Footer />
        </div>
    )
} 