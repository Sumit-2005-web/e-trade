import React from 'react'

function CreateTicket() {
    return ( 
        <div className="container">
            <h2 className='text-muted mb-5'>To create a ticket, select a relevant topic</h2>

        <div className="row p-5">

            <div className="col-lg-4 col-md-6">
               <p className='fs-5'><i class="fa-regular fa-plus"></i>&nbsp; Account Opening</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Resident individual</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Minor</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Non Resident Indian (NRI)</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Company, Partnership, HUF and LLP</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Glossary</a></li>
             </ul>  
            </div>

            <div className="col-lg-4 col-md-6">
             <p className='fs-5'><i class="fa-regular fa-circle-user"></i>&nbsp; Your Zerodha Account</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Your Profile</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Account Modification</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Nomination</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Transfer and conversion of securities</a></li>
             </ul>
            </div>

            <div className="col-lg-4 col-md-12">
                 <p className='fs-5'><i class="fa-regular fa-chart-bar"></i>
&nbsp; Kite</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>IPO</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Trading FAQs</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Charts & Orders </a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Alerts, and nudges</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>General</a></li>
             </ul>
            </div>
        </div>


           <div className="row p-5">

            <div className="col-lg-4 col-md-6">
               <p className='fs-5'><i class="fa-regular fa-credit-card"></i>&nbsp; Funds</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Add money</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Withdraw money</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Add Bank accounts</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>eMandates</a></li>
             </ul>  
            </div>

            <div className="col-lg-4 col-md-6">
             <p className='fs-5'><i class="fa-regular fa-circle"></i>&nbsp; Console</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Portfolio</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Corporate actions</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Funds statement</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Reports</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Profile</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Segments</a></li>
             </ul>
            </div>

            <div className="col-lg-4 col-md-12">
                 <p className='fs-5'><i class="fa-solid fa-coins"></i>
&nbsp; Coin</p>
             <ul style={{lineHeight: "2"}}>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Understanding mutual funds and Coin</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Coin app</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Coin web</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>Transactions and reports</a></li>
                <li className='list-unstyled'><a href="/" style={{textDecoration: "none"}}>National Pension Scheme (NPS)</a></li>
             </ul>
            </div>
        </div>
        </div>
     );
}

export default CreateTicket;