import React from "react";
import "../Home/Home.css";
export default function About() {
  return (
    <>
      <div className="conatiner-fluid">
        <div className="row">
          <div className="col-md-12 ps-0 mt-5">
            <div className="about-banner">
              <div className="hero-img" style={{ height: "417px" }}>
                <img
                  src="./images/about us vector-01 (3).jpg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="heading">
            <h1>About</h1>
          </div>
          <div className="about-content">
            <p>
              Finunique is the world’s leading skill-gaming platform that allows
              users to participate in free as well as paid competitions. With a
              diverse game portfolio of over 3 games—ranging from sports to
              puzzles and casual to board games—there is something for
              everybody. Finunique hosts hundreds of millions of tournaments a
              month and is trusted by over 120 million registered users across
              India, US and Nigeria. Our investors include Peak XV Partners
              (formerly Sequoia Capital India & SEA), SIG, RTP Global, Argor,
              Moore Strategic Ventures, Play Ventures, Base Partners, Telstra
              Ventures, Founders Circle Capital, Legatum, Bennett, Coleman &
              Co., and Kotak Alternate Asset Managers. Since our inception in
              2018, Finunique has consistently introduced innovative initiatives
              that prioritize player safety and a user-friendly experience. This
              is reflected in our robust seven-layer security system, built upon
              rigorous reviews from six independent global security
              organizations: ISO/IEC 27001:2013 certification, and accreditation
              from Indian and global organizations such as Arthur D Little,
              SHIELD, All India Gaming Federation (AIGF), iTech Labs and
              RedHuntLabs.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered text-center rounded-3">
                <thead>
                  <tr>
                    <th>Recharge Cash</th>
                    <th>Bonus</th>
                    <th>Percentage</th>
                    <th>Coins</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>100</td>
                    <td>5</td>
                    <td>5%</td>
                    <td>105</td>
                  </tr>
                  <tr>
                    <td>300 </td>
                    <td>45</td>
                    <td>15%</td>
                    <td>345</td>
                  </tr>
                  <tr>
                    <td>500 </td>
                    <td>125</td>
                    <td>25%</td>
                    <td>625</td>
                  </tr>
                  <tr>
                    <td>1000</td>
                    <td>300</td>
                    <td>30%</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td>3000</td>
                    <td>1050</td>
                    <td>35%</td>
                    <td>4050</td>
                  </tr>
                  <tr>
                    <td>3000</td>
                    <td>1050</td>
                    <td>35%</td>
                    <td>4050</td>
                  </tr>
                  <tr>
                    <td>5000</td>
                    <td>1750</td>
                    <td>35%</td>
                    <td>6750</td>
                  </tr>
                  <tr>
                    <td>10000</td>
                    <td>4000</td>
                    <td>40%</td>
                    <td>14000</td>
                  </tr>
                  <tr>
                    <td>20000</td>
                    <td>8000</td>
                    <td>40%</td>
                    <td>28000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
