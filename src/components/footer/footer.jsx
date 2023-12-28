import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>
            {" "}
            <p>
              <strong className="bid">Bid</strong>
              <em className="wisee">wise</em> &copy; 2023 All rights reserved.
            </p>
          </h3>
          <p>
            Addresse: Avenue Allal Al Fasi,Al Irfane, Rabat , Maroc<br></br>{" "}
            Phone: 0612 121 212 12
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
