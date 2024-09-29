import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import Summary from '../component/Summary';
//import CardProduct from "../components/CardProduct";


export default function Home(){
    return(
        <div>
       <Navbar />
       <Slider />
       <Summary />
       <Footer />
        </div>
    )
} 