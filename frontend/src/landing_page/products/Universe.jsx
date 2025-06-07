import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The E-Trade Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {[...Array(6)].map((_, index) => (
          <div className="col-6 col-md-4 p-3 mt-5" key={index}>
            <img src="images/smallcaseLogo.png" className="img-fluid" alt="Platform" />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
        ))}

        <div className="col-12 d-flex justify-content-center mt-4 mb-5">
          <button className="btn btn-primary fs-5 px-4 py-2">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
