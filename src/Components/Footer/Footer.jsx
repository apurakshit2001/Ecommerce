import React from 'react';
import logo from '../../assets/loginBg.jpeg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer footerSection">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <section className="widget widget-light-skin">
            <h3 className="widget-title">Get In Touch With Us</h3>
            <p className="text-white">Phone: 00 33 169 7720</p>
            <ul className="list-unstyled text-sm text-white">
              <li><span className="opacity-50">Monday-Friday:</span>9.00 am - 8.00 pm</li>
              <li><span className="opacity-50">Saturday:</span>10.00 am - 6.00 pm</li>
            </ul>
            <p><a className="navi-link-light" href="#">support@unishop.com</a></p><a className="social-button shape-circle sb-facebook sb-light-skin" href="#"><i className="socicon-facebook"></i></a><a className="social-button shape-circle sb-twitter sb-light-skin" href="#"><i className="socicon-twitter"></i></a><a className="social-button shape-circle sb-instagram sb-light-skin" href="#"><i className="socicon-instagram"></i></a><a className="social-button shape-circle sb-google-plus sb-light-skin" href="#"><i className="socicon-googleplus"></i></a>
          </section>
        </div>
        <div className="col-lg-3 col-md-6">
          <section className="widget widget-light-skin">
            <h3 className="widget-title">Our Mobile App</h3><a className="market-button apple-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">App Store</span></a><a className="market-button google-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Google Play</span></a><a className="market-button windows-button mb-light-skin" href="#"><span className="mb-subtitle">Download on the</span><span className="mb-title">Windows Store</span></a>
          </section>
        </div>
        <div className="col-lg-3 col-md-6">
          <section className="widget widget-links widget-light-skin">
            <h3 className="widget-title">About Us</h3>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Unishop</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Our Blog</a></li>
            </ul>
          </section>
        </div>
        <div className="col-lg-3 col-md-6">
          <section className="widget widget-links widget-light-skin">
            <h3 className="widget-title">Account &amp; Shipping Info</h3>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Shipping Rates &amp; Policies</a></li>
              <li><a href="#">Refunds &amp; Replacements</a></li>
              <li><a href="#">Taxes</a></li>
              <li><a href="#">Delivery Info</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </section>
        </div>
      </div>
      <hr className="hr-light mt-2 margin-bottom-2x"/>
      <div className="row">
        <div className="col-md-7 padding-bottom-1x"></div>
        <div className="col-md-5 padding-bottom-1x">
          <div className="margin-top-1x hidden-md-up"></div>
          <form className="subscribe-form" action="#" method="post" target="_blank" novalidate="">
            <div className="clearfix">
              <div className="input-group input-light">
                <input className="form-control" type="email" name="EMAIL" placeholder="Your e-mail"/><span className="input-group-addon"><i className="icon-mail"></i></span>
              </div>
              <button className="btn btn-primary mt-2" type="submit">Suscbribe</button>
            </div><span className="form-text text-sm text-white opacity-50">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</span>
          </form>
        </div>
      </div>
      <p className="footer-copyright"><a>&copy; All rights reserved.</a></p>
    </div>
  </footer>
  );
};

export default Footer;
