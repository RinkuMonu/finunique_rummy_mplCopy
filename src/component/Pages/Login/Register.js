import React from 'react'

export default function Register() {
  return (
    <>
    <div className="login_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="register_page">
              <div className="heading">
                <h1>Register Now</h1>
              </div>
              <div className="register_form">
                <form action="">
                  <div className="row">
                  <div className="col-md-6">
                      <div className="mb-3">
                      <label className="form-label">Mobile</label>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          placeholder="Enter Number"
                        />
                      </div>
                    </div>
                  <div className="col-md-6">
                      <div className="mb-3">
                      <label className="form-label">OTP</label>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          placeholder="Enter Otp"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                      <label className="form-label">Email</label>
                        <input
                          type="Email"
                          className="form-control"
                          id="Email"
                          placeholder="Enter Mail"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                      <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                   
                    <div className="col-md-12">
                    <div className="submitBtn mt-3">
                        <button className="registerBtn">Register Now</button>
                    </div>
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
