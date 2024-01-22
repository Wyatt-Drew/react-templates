import React, { useState } from 'react';
import './Login2.css';


function Login2() {
    const [mode, setMode] = useState('login');
  
    const changeMode = (newMode) => {
      setMode(newMode);
    }
  
    return (

      <section className="user">
        <div className = "back-banner">
            {/* Unregistered Users */}
            <div className="half-banner">
              <h2 className="banner-title">Don't have an account?</h2>
              <p className="user_unregistered-text">Sign up to get started!</p>
              <button className="banner-button" onClick={() => changeMode('signup')}>Sign up</button>
            </div>
            {/* Registered Users */}
            <div className="half-banner">
              <h2 className="banner-title">Have an account?</h2>
              <p className="user_registered-text">Login to access your information.</p>
              <button className="banner-button" onClick={() => changeMode('login')}>Login</button>
            </div>
        </div>
        <div className={`user-form ${mode === 'signup' ? 'bounceLeft' : mode === 'recovery' ? 'bounceMiddle' : 'bounceRight'}`}>
            <div className = "login-form">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                <div className="forms_fields">
                    <div className="forms_field">
                        <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="forms_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button className="forms_buttons-forgot" onClick={()=>changeMode('recovery')}>Forgot Password?</button>
                    <button type="submit" className="forms_buttons-action">Login</button>
                </div>
            </form>
            </div>
            <div className = "signup-form">
            {/* Signup Form */}
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <div className = "forms_fields">
                    <div className="forms_field">
                    <input type="text" placeholder="Username" required className="forms_field-input" />
                    </div>
                    <div className="forms_field">
                        <input type="email" placeholder="Email" required className="forms_field-input" />
                    </div>
                    <div className="forms_field">
                        <input type="password" placeholder="Password" required className="forms_field-input" />
                    </div>
                </div>
                <div className="forms_buttons">
                    <button type="submit" className="forms_buttons-action">Sign Up</button>
                </div>
              </form>
            </div>
            </div>
        </div>
        
      </section>
    );
  }
  
  export default Login2;