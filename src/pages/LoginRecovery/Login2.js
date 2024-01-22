import React, { useState } from 'react';
import './Login2.css';


function Login2() {
    const [mode, setMode] = useState('login');
    const [prevMode, setPrevMode] = useState(null);

    const changeMode = (newMode) => {
      setPrevMode(mode);
      setMode(newMode);
    };
  
    const getAnimationClass = () => {
      if (mode === 'signup' && prevMode === 'recovery') return 'moveFromCentertoLeft';
      if (mode === 'signup') return 'moveToLeft';
      if (mode === 'login' && prevMode === 'recovery') return 'moveFromCentertoRight';
      if (mode === 'login') return 'moveToRight';
      if (mode === 'recovery' && prevMode === 'signup') return 'moveToCenter';
      if (mode === 'recovery' && prevMode === 'login') return 'moveToCenterFromRight';
      return '';
    };
    const getPositionClass = () => {
        if (mode === 'signup') return 'bounceLeft';
        if (mode === 'login') return 'bounceRight';
        if (mode === 'recovery') return 'bounceMiddle';

        return '';
      };

    return (

      <section className="user">
        <div className = {`back-banner ${getPositionClass() }`}>
            {/* Unregistered Users */}
            <div className="half-banner">
              <h2 className="banner-title">Don't have an account?</h2>
              <p>Sign up to get started!</p>
              <button className="banner-button" onClick={() => changeMode('signup')}>Sign up</button>
            </div>
            <div className = "spacer half-banner"></div>
            <div className = "spacer half-banner"></div>
            {/* Registered Users */}
            <div className="half-banner right-banner">
              <h2 className="banner-title">Have an account?</h2>
              <p>Login to access your information.</p>
              <button className="banner-button" onClick={() => changeMode('login')}>Login</button>
            </div>
        </div>
        <div className={`user-form ${getAnimationClass() } ${getPositionClass() }`}>
            <div className = "login-form">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                <div className="form_fields">
                    <div className="form_field">
                        <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button className="forgot-button" onClick={()=>changeMode('recovery')}>Forgot Password?</button>
                    <button type="submit" className="form-button">Login</button>
                </div>
            </form>
            </div>
            <div className = "signup-form">
            {/* Signup Form */}
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <div className = "form_fields">
                    <div className="form_field">
                    <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="email" placeholder="Email" required className="forms_field-input" />
                    </div>
                    <div className="form_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button type="submit" className="form-button">Sign Up</button>
                </div>
              </form>
            </div>
            </div>
            {/* Recovery Form */}
            <div className = "recovery-form">
                <h2 className="forms_title">Forgot your password?</h2>
                <p>Enter your email address below and we'll get you back on track </p>
                <form className="forms_form">
                <div className="form_fields">
                    <div className="form_field">
                        <input type="text" placeholder="Email" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button type="submit" className="form-button">Send</button>
                </div>
            </form>
            </div>
            
            
        </div>
        
      </section>
    );
  }
  
  export default Login2;