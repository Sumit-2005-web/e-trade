import React from 'react'

function Team() {
    return ( 
       <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div className="row p-5 mb-5">
         <div className="col-lg-6 col-md-12 text-center">
         <img src="images/sumit.jpg" alt="people image" style={{borderRadius: "100%", width: "50%"}} className='img-fluid'/>
         <h4 className='mt-3'>Sumit Yadav</h4>
         <p>Founder & CEO E-Trade</p>
         </div>
         <div className="col-lg-6 col-md-12">
           <p>Sumit bootstrapped and founded E-Trade in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, E-Trade has changed the landscape of the Indian broking industry.</p>
           <p className='mt-3'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
           <p className='mt-3'>Playing cricket is his zen.</p>
           <p>Connect on <a href="https://www.linkedin.com/in/sumit-devlash-yadav-380a6233b/?profileId=ACoAAFVoXZABhx-3_Z3UeUeHwW2dkas_iNGzfv8" style={{textDecoration: "none"}}>Linkedin</a> /  <a href="https://github.com/Sumit-2005-web/" style={{textDecoration: "none"}}>Github</a></p>
         </div>
      </div>
    </div>
     );
}

export default Team;