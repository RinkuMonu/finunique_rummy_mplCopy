import React from 'react'

export default function Terms() {
  return (
    <>
     <div className='privacypolicy_section' style={{ backgroundImage: "url('./images/2553247_13411.jpg')", backgroundSize: "cover", backgroundPosition: "center", alignContent: "center", backgroundAttachment: "fixed", height: "50vh" }}>
        <div className='container'>
          <div className='row pt-3'>
            <div className='col-md-12 align-self-center'>
              <p className='mb-3' style={{ fontSize: "12px", color: "#fff" }}>Last updated: Feb, 20, 2024</p>
              <div className='heading'>
                <h2 style={{ fontWeight: "300", color: "#fff" }}><span className='text-color'>Terms and Conditions</span></h2>
              </div>
              <div className='content'>
                <p className='mt-1' style={{ fontSize: "14px", color: "#fff" }}>
                  Welcome to [FinUnique Small Private Limited] (referred to as “we,” “us,” or “our”). Your Terma and Conditions is important to us. This Terma and Conditions Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-12'>
            <div className='heading'>
              <h2 className='text-center'>Terma and Conditions</h2>
              <p className='text-center px-5' style={{ fontSize: "12px" }}>FinUnique Small Private Limited - Service Terms & Conditions</p>
            </div>
          </div>
        </div>
        <div className="clearfix mt-5">
          {/* <img src="/images/sp-2.png" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="policy img" /> */}
          <h2 className='my-3'>Acceptance of Terms</h2>
          <ul className='ps-3'>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>By accessing and using Finunique GameZone, you agree to be bound by these Terms and Conditions.</p></li>
          </ul>
          <h2 className='my-3'> How We Use Your Information</h2>
          <ul className='ps-3'>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To provide and improve our services</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To process transactions</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To communicate with you</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To ensure compliance with regulations</p></li>
          </ul>
          <h2 className='my-3'>Eligibility</h2>
          <ul className='ps-3'>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>You must be at least 18 years old to use our services</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>You must be a resident of a jurisdiction where online gaming is legal</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>You must provide accurate and complete information during registration</p></li>
          </ul>
          <h2 className='my-3'>Account Rules</h2>
          <ul className='ps-3'>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> One account per user</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Account sharing is strictly prohibited</p></li>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Users are responsible for maintaining account security</p></li>
          </ul>
          <h2 className='my-3'>Fair Play Policy</h2>
          <ul className='ps-3'>
            <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>We maintain a strict fair play policy to ensure all users have an equal and fair gaming experience.</p></li>
          </ul>

        </div>

      </div>
    </>
  )
}
