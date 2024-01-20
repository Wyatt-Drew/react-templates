import React, { useState } from 'react';
import './Login.css'; // Import your CSS file here


function LoginPage() {
    const [isLoginActive, setIsLoginActive] = useState(true);
  
    const handleSignUp = () => {
      setIsLoginActive(false);
    }
  
    const handleLogin = () => {
      setIsLoginActive(true);
    }
  
    return (
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            {/* Unregistered Users */}
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button className="user_unregistered-signup" onClick={handleSignUp}>Sign up</button>
            </div>
  
            {/* Registered Users */}
            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
              <button className="user_registered-login" onClick={handleLogin}>Login</button>
            </div>
          </div>
  
          {/* Forms */}
          <div className={`user_options-forms ${isLoginActive ? 'bounceRight' : 'bounceLeft'}`}>
            {/* Login Form */}
            <div className="user_forms-login">
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
                    <button type="submit" className="forms_buttons-action">Login</button>
                </div>
            </form>
            </div>
  
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
  
  export default LoginPage;