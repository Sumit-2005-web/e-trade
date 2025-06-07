import React from 'react';

function Stats() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 px-3 mb-4 mb-md-0">
                    <h1 className='my-4 text-center text-md-start'>Trust with confidence</h1>

                    <div className='mb-5'>
                        <h2 style={{ fontSize: "20px" }}>Customer-first always</h2>
                        <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className='mb-5'>
                        <h2 style={{ fontSize: "20px" }}>No spam or gimmicks</h2>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/" style={{textDecoration: "none"}}>Our philosophies</a></p>
                    </div>

                    <div className='mb-5'>
                        <h2 style={{ fontSize: "20px" }}>The Zerodha universe</h2>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className='mb-5'>
                        <h2 style={{ fontSize: "20px" }}>Do better with money</h2>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 px-3 text-center">
                    <img src="images/ecosystem.png" alt="Statistics Image" className='img-fluid mt-4' />
                    <div className='mt-4 d-flex flex-column flex-md-row justify-content-center justify-content-md-around gap-3'>
                        <a href="/" className='fs-5' style={{textDecoration: "none"}}>Explore our products &rarr;</a>
                        <a href="/" className='fs-5' style={{textDecoration: "none"}}>Try Kite Demo &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
