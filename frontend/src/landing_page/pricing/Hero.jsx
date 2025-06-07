import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 border-bottom mt-3 text-center">
                <h1>Pricing</h1>
                <h4 className='text-muted mt-3'>Free equity investments and flat ₹20 intraday aand F&O trades.</h4>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col-lg-4 col-md-12">
                    <img src="images/pricingEquity.svg" alt="pricing image" className='img-fluid'/>
                    <h3 className='mt-3 '>Free equity delivery</h3>
                    <p className='mt-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-md-12">
                    <img src="images/intradayTrades.svg" alt="pricing MF" />
                    <h3 className='mt-3'>Intraday and F&O trades</h3>
                    <p className='mt-3 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4 col-md-12">
                      <img src="images/pricingEquity.svg" alt="pricing MF" />
                    <h3 className='mt-3'>Free direct MF</h3>
                    <p className='mt-3 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;