import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';

export default function Login({ logincheck }) {
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [sendOtpShow, setSendOtpShow] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    if (!mobileNo || mobileNo.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSendingOtp(true);
    try {
      const response = await axios.post(
        "https://api.finuniquerummy.com/api/v1/auth/login",
        {
          type: "1",
          mobile: mobileNo
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert('OTP Sent Successfully');
      setSendOtpShow(true);
    } catch (error) {
      const message = error.response?.data?.message || "Error sending OTP.";
      alert("Error: " + message);
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    setVerifyingOtp(true);
    try {
      const response = await axios.post(
        "https://api.finuniquerummy.com/api/v1/auth/verify-otp",
        {
          type: "1",
          mobile: mobileNo,
          otp: otp
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      alert(response.data.message);
      if (response.data.statusCode === 200) {
        // Save token and user
        if (response.data.data.token) {
          localStorage.setItem("authToken", response.data.data.token);
        }
        localStorage.setItem("user", JSON.stringify(response.data.data));

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      const message = error.response?.data?.message || "Error verifying OTP.";
      alert("Error: " + message);
    } finally {
      setVerifyingOtp(false);
    }
  };

  const closePopup = () => {
    navigate("/");
  };

  return (
    <div className="login_page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="loginBox">
            <button
              onClick={closePopup}
              className="btn btn-close btn-close-white position-absolute m-2"
              aria-label="Close"
              style={{ top: "14px", right: "16px" }}
            ></button>
            <div className="heading">
              <h1>Login</h1>
              <p>Welcome Back,</p>
            </div>
            <div className="login_deatils">
              <form>
                <div className="mb-3">
                  <label className="form-label">Mobile No</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile No"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                  {sendOtpShow ? (
                    <p className="text-success mt-2">OTP sent successfully</p>
                  ) : (
                    <button
                      onClick={sendOtp}
                      className="verifyOtp mt-3"
                      disabled={sendingOtp}
                    >
                      {sendingOtp ? "Sending..." : "Send OTP"}
                    </button>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">OTP</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <div className="d-flex justify-content-between mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Remember Me</label>
                    </div>
                    <Link to={''} className="text-white">Forget Password</Link>
                  </div>
                  <div className="submitBtn mt-3">
                    <button
                      onClick={verifyOtp}
                      className="bonusBtn"
                      disabled={verifyingOtp}
                    >
                      {verifyingOtp ? "Verifying..." : "Submit"}
                    </button>
                  </div>
                  <div className="redirectregister">
                    <h4>
                      Don’t Have an Account? <Link to={'/register'}>Sign Up</Link>
                    </h4>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
