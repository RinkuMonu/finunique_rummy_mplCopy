import React from 'react';
import { Award, Book, Clock, Users, Star, Trophy } from 'lucide-react';

function Rummy() {
  return (
    <div>
      <div 
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1593695808311-99866df61c74?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          position: 'relative'
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 className="display-4">Rummy</h1>
        </div>
      </div>
      
      <div className="container my-5">
        {/* Introduction Section */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-6 mb-4">Welcome to Classic Rummy</h2>
              <p className="lead">Experience the thrill of India's favorite card game. Rummy combines skill, strategy, and excitement in one engaging package.</p>
              <div className="d-flex gap-3 mt-4">
              
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h4 className="card-title"><Trophy className="me-2" size={24} />Why Choose Us?</h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">✓ 24/7 Customer Support</li>
                    <li className="mb-2">✓ Secure Payment Gateway</li>
                    <li className="mb-2">✓ Multiple Game Variants</li>
                    <li className="mb-2">✓ Daily Tournaments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="mb-5 bg-light p-5 rounded">
          <h2 className="text-center mb-4"><Book className="me-2" size={32} />How to Play Rummy</h2>
          <div className="row g-4">
            {['Form Sets', 'Create Sequences', 'Use Jokers', 'Declare'].map((title, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <div className="rounded-circle bg-primary text-white d-inline-flex p-3 mb-3">
                      <span className="h4 mb-0">{index + 1}</span>
                    </div>
                    <h5>{title}</h5>
                    <p>{['Collect three or four cards of the same rank', 'Arrange three or more consecutive cards of the same suit', 'Substitute jokers to complete your sets and sequences', 'Arrange all cards in valid combinations and declare'][index]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Game Variants Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4"><Star className="me-2" size={32} />Popular Game Variants</h2>
          <div className="row g-4">
            {['Points Rummy', 'Deals Rummy', 'Pool Rummy'].map((variant, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100">
                  <div className="card-body">
                    <h4>{variant}</h4>
                    <p>{['Quick single-deal game with points-based scoring', 'Multiple deals with cumulative scoring', 'Elimination format with fixed entry points'][index]}</p>
                    <ul className="list-unstyled">
                      {[
                        ['✓ Fast-paced gameplay', '✓ Single deal format', '✓ Points-based scoring'],
                        ['✓ 2/3 deals format', '✓ Strategic gameplay', '✓ Higher stakes'],
                        ['✓ Multiple players', '✓ Last man standing', '✓ Fixed entry points']
                      ][index].map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rummy;
