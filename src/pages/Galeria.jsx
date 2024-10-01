import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import GaleriaFotos from '../component/Galeria/GaleriaFotos';
import Footer from '../component/Footer';

export default function Galeria(){
    return(
        <div>
       <Navbar />
       <GaleriaFotos />
       <Footer />
        </div>
    )
} 