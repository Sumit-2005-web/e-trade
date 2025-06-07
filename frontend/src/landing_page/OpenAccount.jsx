import React from 'react';
import { Link } from "react-router-dom";
import Login from './login/Login';
import Signup from './signup/SignUp';


function OpenAccount() {
    return ( 
         <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className='mt-3'>Open a E-Trade account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

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

export default OpenAccount;