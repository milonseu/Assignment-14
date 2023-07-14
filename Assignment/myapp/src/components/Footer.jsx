import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu libero sed lorem cursus accumsan.</p>
          </div>
          <div className="col-md-4">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Address: 123 Main Street, Mirpur-14, Dhaka</li>
              <li>Email: info@example.com</li>
              <li>Phone: +1 123-456-7890</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">© {new Date().getFullYear()}  Website. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;