import React from 'react';

function Education() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img src="images/education.svg" alt="Education Image" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 px-3 text-center text-md-start">
                    <h1 className='mt-3'>Free and open market education</h1>
                    
                    <div className='mb-4 mt-4'>
                        <p className='text-muted'>
                            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                        </p>
                        <a href="/" className=' text-decoration-none'>Varsity &rarr;</a>
                    </div>

                    <div className='mb-3'>
                        <p className='text-muted'>
                            TradingQ&A, the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="/" className=' text-decoration-none'>TradingQ&A &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
