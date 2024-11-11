import React, { useState } from 'react';
import './LoginSignupForm.css';

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="loginContainer">
      <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login Form' : 'Signup Form'}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} onChange={handleLoginClick} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={handleSignupClick} />
          <label htmlFor="login" className="slide login" onClick={handleLoginClick}>Login</label>
          <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form className="login">
              <div className="field">
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member? <a href="#" onClick={handleSignupClick}>Signup now</a>
              </div>
              <p className='registerText'>Or login with social platforms</p>
              <div className="social-icons">
                <a href="#"><i className="bx bxl-google"></i></a>
                <a href="#"><i className="bx bxl-facebook"></i></a>
              </div>
            </form>
          ) : (
            <form className="signup">
              <div className="field">
                <i className="bx bxs-envelope"></i>
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <i className="bx bxs-lock-alt"></i>
                <input type="password" placeholder="Confirm password" required />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
              <p className='registerText'>Or register with 
                social platforms</p>

              <div className="social-icons">
                <a href="#"><i className="bx bxl-google"></i></a>
                <a href="#"><i className="bx bxl-facebook"></i></a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginSignupForm;
