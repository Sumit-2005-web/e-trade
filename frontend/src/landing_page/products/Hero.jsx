import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row mt-5 text-center">
                <h1>E-Trade Products</h1>
                <p className='fs-4 mt-2 text-muted'>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-2'>Check more <Link to="/about" style={{textDecoration: "none"}}>about us</Link> →</p>
            </div>
        </div>
     );
}

export default Hero;