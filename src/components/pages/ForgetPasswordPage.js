import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
            

        
        <div className="text-center m-5-auto"><br/><br/>
            <h2>Reset your password</h2>
            <h5>Enter your email address and create new password</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send email to reset password</button>
                </p>
            </form>
            <footer>
                <p>Don't have an account? <Link to="/register">Register</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
