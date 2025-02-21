import React from 'react';
import { Award, Users, Clock, Trophy, Star, Shield } from 'lucide-react';

function Poker() {
  return (
    <div>
     <div 
  className="game-banner d-flex align-items-center justify-content-center text-white"
  style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80")',
    height: '50vh', // 50% of viewport height
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="banner-overlay w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
    <h1 className="display-4">Poker</h1>
  </div>
</div>

      <div className="container my-5">
        {/* Introduction Section */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-6 mb-4">Experience World-Class Poker</h2>
              <p className="lead">Join the most prestigious poker rooms and compete with players from around the world.</p>
              <div className="d-flex gap-3 mt-4">
             
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h4 className="card-title"><Trophy className="me-2" size={24} />Why Choose Us?</h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✓ Secure Gaming Environment</li>
                    <li className="mb-2">✓ 24/7 Table Availability</li>
                    <li className="mb-2">✓ Professional Dealers</li>
                    <li className="mb-2">✓ Multiple Variants</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tournament Section */}
        <section className="mb-5 bg-dark text-white p-5 rounded">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2><Award className="me-2" size={32} />Live Tournaments</h2>
              <p className="lead">Compete in our prestigious poker tournaments with massive prize pools</p>
              <ul className="list-unstyled mt-4">
                <li className="mb-3">🏆 Guaranteed Prize Pools</li>
                <li className="mb-3">🎮 Multiple Buy-in Levels</li>
                <li className="mb-3">⚡ Satellite Qualifiers</li>
                <li className="mb-3">💰 Progressive Bounties</li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-5 bg-light p-5 rounded">
          <h2 className="text-center mb-4"><Shield className="me-2" size={32} />Safe & Secure Gaming</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Fair Play</h4>
                  <p>Advanced RNG certification and regular audits ensure complete fairness</p>
                  <ul className="list-unstyled">
                    <li>✓ Certified RNG</li>
                    <li>✓ Independent audits</li>
                    <li>✓ Anti-collusion measures</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Secure Transactions</h4>
                  <p>Bank-grade security for all financial transactions</p>
                  <ul className="list-unstyled">
                    <li>✓ SSL encryption</li>
                    <li>✓ Multiple payment options</li>
                    <li>✓ Quick withdrawals</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Responsible Gaming</h4>
                  <p>Tools and support for responsible gaming habits</p>
                  <ul className="list-unstyled">
                    <li>✓ Deposit limits</li>
                    <li>✓ Self-exclusion options</li>
                    <li>✓ 24/7 support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Program */}
        <section className="mb-5">
          <h2 className="text-center mb-4">VIP Program</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Bronze</h5>
                  <p>Entry Level</p>
                  <ul className="list-unstyled">
                    <li>✓ Weekly cashback</li>
                    <li>✓ Basic support</li>
                    <li>✓ Regular promotions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Silver</h5>
                  <p>Mid Tier</p>
                  <ul className="list-unstyled">
                    <li>✓ Higher cashback</li>
                    <li>✓ Priority support</li>
                    <li>✓ Monthly bonuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Poker;
