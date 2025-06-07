import React from 'react';
import {Link} from "react-router-dom";
import Signup from '../signup/SignUp';

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="images/homeHero.png" alt='Hero Image' className='mb-5' />
                <h1 className='mt-3'>Invest in Everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <div className="col-12 col-md-6 col-lg-3 mx-auto mb-5">
                    <Link style={{textDecoration: "none"}} to="/signup">
                    <button className='btn fs-5 btn-primary mt-3 w-100 p-2 fw-semibold'>
                         Sign up for free
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
