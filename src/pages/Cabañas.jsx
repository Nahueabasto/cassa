import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Cabañastext from '../component/Cabañas/Cabañastext';
import Texto from '../component/Cabañas/Texto';
import Footer from '../component/Footer';

export default function Cabañas(){
    return(
        <div>
       <Navbar />
       <Texto />
       <Cabañastext />
       <Footer />
        </div>
    )
} 