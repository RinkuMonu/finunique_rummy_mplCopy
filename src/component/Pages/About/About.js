import React from 'react'
import '../Home/Home.css'
export default function About() {
    return (
        <>
            <div className='conatiner-fluid'>
                <div className='row'>
                    <div className='col-md-12 ps-0 mt-5'>
                        <div className='about-banner'>

                            <div
                                className="hero-img" style={{ height: "417px" }}
                            >
                                <img src='./images/about us vector-01 (3).jpg' className='img-fluid' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='col-md-12'>
                    <div className='heading'>
                        <h1>About</h1>
                    </div>
                    <div className='about-content'>
                        <p>
                            Finunique is the world’s leading skill-gaming platform that allows users to participate in free as well as paid competitions. With a diverse game portfolio of over 3 games—ranging from sports to puzzles and casual to board games—there is something for everybody.

                            Finunique hosts hundreds of millions of tournaments a month and is trusted by over 120 million registered users across India, US and Nigeria.

                            Our investors include Peak XV Partners (formerly Sequoia Capital India & SEA), SIG, RTP Global, Argor, Moore Strategic Ventures, Play Ventures, Base Partners, Telstra Ventures, Founders Circle Capital, Legatum, Bennett, Coleman & Co., and Kotak Alternate Asset Managers.

                            Since our inception in 2018, Finunique has consistently introduced innovative initiatives that prioritize player safety and a user-friendly experience. This is reflected in our robust seven-layer security system, built upon rigorous reviews from six independent global security organizations: ISO/IEC 27001:2013 certification, and accreditation from Indian and global organizations such as Arthur D’ Little, SHIELD, All India Gaming Federation (AIGF), iTech Labs and RedHuntLabs.
                        </p>

                    </div>
                </div>

            </div>

        </>
    )
}
