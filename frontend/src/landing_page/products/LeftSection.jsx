import React from 'react'

function LeftSection({
    imageURL,
    productTitle,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className="container">
            <div className="row p-3 mt-5">
                <div className="col-lg-6 col-md-12">
                    <img src={imageURL} alt="img" className='img-fluid'/>
                </div>
                <div className="col-lg-6 col-md-12 mt-5">
                    <h1>{productTitle}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo} style={{textDecoration: "none"}}>Try demo →</a>
                    <a href={learnMore} className='mx-3' style={{textDecoration: "none"}}>Learn more →</a>
                    <br />
                    <br />
                    <a href={googlePlay} className='mt-3'><img src="images/googlePlayBadge.svg" alt="google img" className='image-fluid' /></a>
                    <a href={appStore} className='mx-2'><img src="images/appstoreBadge.svg" alt="apple img" className='image-fluid'/></a>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;