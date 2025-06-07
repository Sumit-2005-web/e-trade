import React from 'react'
import {Link} from "react-router-dom";

function NotFound() {
    return ( 
         <div className="container p-5 mb-5">
            <div className="row text-start">
                <h1 className='mt-3'>404, Not Found</h1>
                <p>We couldn’t find the page you were looking for. Visit <Link to="/">E-Trade's home page</Link></p>

            </div>
        </div>
     );
}

export default NotFound;