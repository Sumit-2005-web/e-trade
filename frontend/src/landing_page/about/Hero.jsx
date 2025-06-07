import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row border-top mt-5 p-5 mb-5 d-flex justify-content-around lh-lg">
         <div className="col-lg-6 col-md-12 p-5">
            <p className="text-muted">
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company E-Trade, a combination of Electronics and "Trade", the English word for trade.
            </p>
            <p className="text-muted mt-4">
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
             <p className="text-muted mt-4">
               Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
            </p>
         </div>
         <div className="col-lg-6 col-md-12 p-5">
           <p className="text-muted">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
           <p className="text-muted mt-4">Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
           <p className="text-muted mt-4">And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
         </div>
      </div>
    </div>
  );
}

export default Hero;
