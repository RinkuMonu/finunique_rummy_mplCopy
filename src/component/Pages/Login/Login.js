import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login({ logincheck }) {
  const [mobileNo, setmobileNo] = useState("")
  const [otp, setOtp] = useState("")
  const [sendotpShow, setsendotpShow] = useState(false)
  const navigate = useNavigate();



  const sendotp = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://13.203.138.66:3000/api/v1/auth/login ",
        {
          type: "1", mobile: mobileNo
        })

      alert('OTP Sent Successfully');
      setsendotpShow(true)


    } catch (error) {
      alert('Error sending OTP', error)
    }
  }
  const verifyotp = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("http://13.203.138.66:3000/api/v1/auth/verify-otp ",
        { type: "1", mobile: mobileNo, otp: otp }
      )

      console.log(response.data.message)
      alert(response.data.message);
      if (response.data.statusCode === 200) {
        console.log("Redirecting in 1 second...");
        // ✅ Save Token in Local Storage
      if (response.data.data.token) {
        localStorage.setItem("authToken", response.data.data.token);
      }

      // ✅ Save User Data (Optional)
      localStorage.setItem("user", JSON.stringify(response.data.data));

 

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }


    } catch (error) {
      alert("Error OTP Verify: " + error.response?.data?.message || error.message);
    }
  }

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
                    <label className="form-label">Mobile No</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="mobile No"
                      value={mobileNo}
                      onChange={(e) => setmobileNo(e.target.value)}
                    />
                    {sendotpShow ?
                      "Otp Sent SuccessFul" :
                      <button onClick={sendotp} className='verifyOtp'>Send Otp</button>
                    }
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Otp</label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="Otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
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
                      <button onClick={verifyotp} className="bonusBtn">Submit</button>
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
