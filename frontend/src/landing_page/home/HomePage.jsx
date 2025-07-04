import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

// Outside Folder Importing in same main folder
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
       
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
       
        </>
     );
}

export default HomePage;