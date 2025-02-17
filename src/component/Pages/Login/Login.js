import React from 'react'
import { Link } from "react-router-dom";
import './Login.css'

export default function Login() {
  return (
    <>
        <div className="login_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="loginBox">
              <div className="heading">
                <h1>Login</h1>
                <p>Welcome Back,</p>
              </div>
              <div className="login_deatils">
                <form action="">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                    <div className="d-flex justify-content-between mt-3">
                        <div className="form-check">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            />
                            <label className="form-check-label">Remember Me</label>
                        </div>
                        <Link to={''} className="text-white">Forget Password</Link>
                    </div>
                    <div className="submitBtn mt-3">
                        <button className="bonusBtn">Submit</button>
                    </div>
                    <div className="redirectregister">
                        <h4>Don’t Have any Account? <Link to={'/register'}>Sign Up</Link></h4>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
