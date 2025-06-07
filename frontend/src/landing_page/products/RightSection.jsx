import React from 'react';

function RightSection({
    imageURL,
    productTitle,
    productDescription,
    learnMore,
}) {
    return ( 
        <div className="container">
            <div className="row align-items-center p-3">
                <div className="col-lg-6 col-md-12  mb-lg-0">
                    <h1>{productTitle}</h1>
                    <p className="text-muted">{productDescription}</p>
                    <a href={learnMore} className="text-primary text-decoration-none">
                        Learn more →
                    </a>
                </div>
                <div className="col-lg-6 col-md-12 text-center">
                    <img src={imageURL} alt="product screenshot" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
