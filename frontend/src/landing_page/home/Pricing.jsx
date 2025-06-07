import React from 'react';

function Pricing() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-5 mb-4 mb-md-0">
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p className='text-muted mb-3'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="/" className='fs-5 text-decoration-none'>See pricing &rarr;</a>
                </div>

                <div className="col-12 col-md-7">
                    <div className="row text-center g-3 mt-4 mt-md-0">
                        <div className="col-12 col-md-6">
                            <div className="p-3 border rounded h-100">
                                <h1 className='mb-3'>₹0</h1>
                                <p className='mb-0'>Free equity delivery and<br /> direct mutual funds</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="p-3 border rounded h-100">
                                <h1 className='mb-3'>₹20</h1>
                                <p className='mb-0'>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
