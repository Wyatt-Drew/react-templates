import React from 'react';
import './Login.css';

function Recovery() {
    return (
        <section className="user">
            <div className="user_options-container">
                <div className="user_options-text">
                    {/* Password Recovery */}
                    <div className="user_options-recovery">
                        <h2 className="user_recovery-title">Forgot Your Password?</h2>
                        <p className="user_recovery-text">Enter your email address, and we'll email you instructions for setting a new one.</p>
                        <button className="user_unregistered-signup">Cancel</button>
                    </div>
                </div>

                {/* Recovery Form */}
                <div className="user_options-forms">
                    <div className="user_forms-recovery">
                        <h2 className="forms_title">Reset Password</h2>
                        <form className="forms_form">
                            <div className="forms_fields">
                                <div className="forms_field">
                                    <input type="email" placeholder="Email" required className="forms_field-input" />
                                </div>
                            </div>
                            <div className="forms_buttons">
                                <button type="submit" className="forms_buttons-action">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recovery;
