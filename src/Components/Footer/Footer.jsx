import React from 'react';
import logo from '../../assets/loginBg.jpeg'

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <h1 className="logo">Polo India</h1>
            <div className="lc-block mb-3">
              <a className="navbar-brand" href="https://library.livecanvas.com/sections/">
                <img
                  className="img-fluid me-1"
                  src= {logo}
                  alt="my brand"
                  width="100px"
                  height="100px"
                  style={{
                    transform: 'skew( -45deg)'
                  }}
                />
              </a>
            </div>
            <div className="lc-block">
              <div editable="rich">
                <p className="text-muted">© 2024 street man 2001</p>
              </div>
            </div>
          </div>
          <div className="col offset-md-2 mb-3">
            <div className="lc-block mb-4">
              <div editable="rich">
                <h4>Get Started</h4>
              </div>
            </div>
            <div className="lc-block small">
              <style>
                {`
                  .footer-links-list ul {
                    padding-left: 0;
                  }
                  .footer-links-list ul li {
                    margin-bottom: 15px;
                    list-style-type: none;
                    padding-left: 0;
                  }
                  .footer-links-list a {
                    text-decoration: none;
                    color: var(--bs-body-color);
                  }
                `}
              </style>
              <div editable="rich" className="footer-links-list">
                <ul>
                  <li><a href="#">One Item</a></li>
                  <li><a href="#">Second Item</a></li>
                  <li><a href="#">Third Item</a></li>
                  <li><a href="#">Fourth Item</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="lc-block mb-4">
              <div editable="rich">
                <h4>About us</h4>
              </div>
            </div>
            <div className="lc-block small">
              <div editable="rich" className="footer-links-list">
                <ul>
                  <li><a href="#">Story</a></li>
                  <li><a href="#">Work with us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="lc-block mb-4">
              <div editable="rich">
                <h4>Downloads</h4>
              </div>
            </div>
            <div className="lc-block small">
              <div editable="rich" className="footer-links-list">
                <ul>
                  <li><a href="#">First Element</a></li>
                  <li><a href="#">Second Element</a></li>
                  <li><a href="#">Third Element</a></li>
                  <li><a href="#">Fourth Element</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
