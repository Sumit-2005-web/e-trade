import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5 pt-4" style={{ fontSize: "14px", color: "#666" }}>
      <div className="container">
        <div className="row mb-4">
          {/* Left Column: Logo and Social Icons */}
          <div className="col-md-3">
            <img
              src="images/E-Trade-Logo.png"
              alt="Logo"
              style={{ height: "40px" }}
              className="mb-3"
            />
            <p>
              © 2010 - 2030, E-Trade Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* Social Icons Top */}
            <div className="d-flex gap-3 mt-3">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <hr className="my-3" style={{ maxWidth: "220px" }} />

            {/* Social Icons Bottom */}
            <div className="d-flex gap-3">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>

          {/* Right Columns: Footer Navigation Links */}
          <div className="col-md-9 mt-4 mt-md-0">
            <div className="row">
              {/* Account */}
              <div className="col-6 col-md-3 mb-3">
                <h6 className="fw-bold text-dark">Account</h6>
                <ul className="list-unstyled">
                  <li><a href="/open-account" className="text-decoration-none text-muted">Open demat account</a></li>
                  <li><a href="/minor-account" className="text-decoration-none text-muted">Minor demat account</a></li>
                  <li><a href="/nri-account" className="text-decoration-none text-muted">NRI demat account</a></li>
                  <li><a href="/commodity" className="text-decoration-none text-muted">Commodity</a></li>
                  <li><a href="/dematerialisation" className="text-decoration-none text-muted">Dematerialisation</a></li>
                  <li><a href="/fund-transfer" className="text-decoration-none text-muted">Fund transfer</a></li>
                  <li><a href="/mtf" className="text-decoration-none text-muted">MTF</a></li>
                  <li><a href="/referral" className="text-decoration-none text-muted">Referral program</a></li>
                </ul>
              </div>

              {/* Support */}
              <div className="col-6 col-md-3 mb-3">
                <h6 className="fw-bold text-dark">Support</h6>
                <ul className="list-unstyled">
                  <li><a href="/contact" className="text-decoration-none text-muted">Contact us</a></li>
                  <li><a href="/support" className="text-decoration-none text-muted">Support portal</a></li>
                  <li><a href="/complaints" className="text-decoration-none text-muted">How to file a complaint?</a></li>
                  <li><a href="/status" className="text-decoration-none text-muted">Status of your complaints</a></li>
                  <li><a href="/bulletin" className="text-decoration-none text-muted">Bulletin</a></li>
                  <li><a href="/circular" className="text-decoration-none text-muted">Circular</a></li>
                  <li><a href="/blog" className="text-decoration-none text-muted">E-Connect blog</a></li>
                  <li><a href="/downloads" className="text-decoration-none text-muted">Downloads</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-6 col-md-3 mb-3">
                <h6 className="fw-bold text-dark">Company</h6>
                <ul className="list-unstyled">
                  <li><a href="/about" className="text-decoration-none text-muted">About</a></li>
                  <li><a href="/philosophy" className="text-decoration-none text-muted">Philosophy</a></li>
                  <li><a href="/media" className="text-decoration-none text-muted">Press & media</a></li>
                  <li><a href="/careers" className="text-decoration-none text-muted">Careers</a></li>
                  <li><a href="/csr" className="text-decoration-none text-muted">E-Trade Cares (CSR)</a></li>
                  <li><a href="/tech" className="text-decoration-none text-muted">E-Trade.tech</a></li>
                  <li><a href="/open-source" className="text-decoration-none text-muted">Open source</a></li>
                </ul>
              </div>

              {/* Quick links */}
              <div className="col-6 col-md-3 mb-3">
                <h6 className="fw-bold text-dark">Quick links</h6>
                <ul className="list-unstyled">
                  <li><a href="/ipos" className="text-decoration-none text-muted">Upcoming IPOs</a></li>
                  <li><a href="/brokerage" className="text-decoration-none text-muted">Brokerage charges</a></li>
                  <li><a href="/holidays" className="text-decoration-none text-muted">Market holidays</a></li>
                  <li><a href="/calendar" className="text-decoration-none text-muted">Economic calendar</a></li>
                  <li><a href="/calculators" className="text-decoration-none text-muted">Calculators</a></li>
                  <li><a href="/markets" className="text-decoration-none text-muted">Markets</a></li>
                  <li><a href="/sectors" className="text-decoration-none text-muted">Sectors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Text */}
        <div className="row mt-4">
          <div className="col">
            <p style={{ fontSize: "12px", color: "#999" }}>
              E-Trade Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633
              CDSL/NSDL: Depository services through E-Trade Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through E-Trade Commodities Pvt. Ltd. MCX: 46025;
              NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: E-Trade Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
              Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to
              securities broking please write to{" "}
              <a href="mailto:complaints@e-trade.com">complaints@e-trade.com</a>, for DP related to{" "}
              <a href="mailto:dp@e-trade.com">dp@e-trade.com</a>. Please ensure you carefully read
              the Risk Disclosure Document as prescribed by SEBI |{" "}
              <a href="https://scores.gov.in" target="_blank" rel="noreferrer">
                ICF
              </a>
            </p>
          </div>
        </div>

        <div className="row">
            <div className="col">
                <ul className="text-muted d-flex justify-content-center align-items-center gap-5 list-unstyled">
                <li>NSE</li>
                <li>BSE</li>
                <li>SEBI</li>
                <li>Bombay</li>
                <li>E-Trade</li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
