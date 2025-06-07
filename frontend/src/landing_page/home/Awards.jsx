import React from 'react';

function Awards() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
                    <img src="images/largestBroker.svg" alt="Awards Image" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-start mt-md-5">
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mt-3 fs-5'>
                        2+ million ZyTrade clients to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className="row">
                        <div className="col-6">
                            <ul className='lh-lg'>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className='lh-lg'>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Growth</li>
                            </ul>
                        </div>
                    </div>
                    <img src="images/pressLogos.png" alt="Media image" className='img-fluid mt-4' />
                </div>
            </div>
        </div>
    );
}

export default Awards;
