import React from "react";

function Hero() {
  return (
    <div className="container-fluid mb-5 py-5" style={{ backgroundColor: "#387ed1", color: "white" }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h4 className="fw-bold">Support Portal</h4>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8 col-12">
            <h5>Search for an answer or browse help topics to create a ticket</h5>
            <div className="input-group mt-3 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              />
              <button className="btn btn-light" type="button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="d-flex flex-column flex-md-row gap-3">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-md-4 col-12 mt-4 mt-md-0">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="mb-0">Featured</h5>
              <a href="#" className="text-white text-decoration-underline">
                Track tickets
              </a>
            </div>
            <ol className="ps-3">
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Rights Entitlements listing in May 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Surveillance measure on scrips - May 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
