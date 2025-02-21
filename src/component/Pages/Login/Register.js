import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

  const [showOtp, setshowOtp] = useState(true)
  const [showname, setshowName] = useState(true)
  const [mobileNo, setmobileNo] = useState("")
  const [otp, setOtp] = useState("")
  const [sendotpShow, setsendotpShow] = useState(false)
  const [otpverify, setotpVerify] = useState(false)
  const navigate = useNavigate();

  const sendotp = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("https://api.finuniquerummy.com/api/v1/auth/register",
        {
          type: "1", mobile: mobileNo
        })
      setshowOtp(true)
      alert('OTP Sent Successfully');
      setsendotpShow(true)
    } catch (error) {
      alert('Error sending OTP', error)
    }
  }
  const verifyotp = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://api.finuniquerummy.com/api/v1/auth/verify-otp",
        { type: "1", mobile: mobileNo, otp: otp }
      )
      setshowName(true)
      setshowOtp(true)
      alert('OTP Verify Successfully');
      setotpVerify(true)
      if (response.data.statusCode === 200) {
        console.log("Redirecting in 1 second...");
       
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }

    } catch (error) {
      alert('Error OTP Verify', error)
    }
  }

  const closePopup = ()=>{
    navigate("/");
  }

  return (
    <>
      <div className="login_page">
        <div className="container">
        
          <div className="row justify-content-center">
            <div className="register_page   position-relative">
             
              <div className="heading">
             
                <h1>Register Now</h1>
              </div>
              <div className="register_form">
             
                <form action="">
                  <div className="row">
                  <button
                className="btn btn-close btn-close-white position-absolute m-2 top-3 right-3"
                aria-label="Close" style={{top:"14px", right:"16px"}}
                onClick={closePopup}
              ></button>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input
                          type="number"
                          className="form-control"
                          id="number"
                          placeholder="Enter Number"
                          value={mobileNo}
                          onChange={(e) => setmobileNo(e.target.value)}
                        />
                      </div>

                      {sendotpShow ?
                        "Otp Sent SuccessFul" :
                        <button onClick={sendotp} className='verifyOtp'>Send Otp</button>
                      }

                    </div>

                    {showOtp &&
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">OTP</label>
                          <input
                            type="number"
                            className="form-control"
                            id="number"
                            placeholder="Enter Otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                        {otpverify ?
                          "Otp Verification SuccessFul" :
                          <button onClick={verifyotp} className='verifyOtp'>Verify Otp</button>
                        }


                      </div>
                    }

                    {showname &&
                      <>

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
                          <div className="redirectregister registerh4">
                            <h4>Already Have a Account? <Link to={'/Login'}>Log In</Link></h4>
                          </div>
                        </div>
                      </>}
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
