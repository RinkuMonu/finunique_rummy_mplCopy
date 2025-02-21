import React from 'react';
import { Target, Award, Users, Book, Clock, Trophy } from 'lucide-react';

function Pool() {
  return (
    <div>
      {/* Banner Section */}
      <div 
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          position: 'relative'
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 className="display-4">Pool</h1>
        </div>
      </div>

      <div className="container my-5">
        {/* Introduction Section */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-6 mb-4">Master the Game of Pool</h2>
              <p className="lead">
                Experience the perfect blend of precision, strategy, and skill in our professional pool gaming environment.
              </p>
              <div className="d-flex gap-3 mt-4">
               
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light shadow-sm">
                <div className="card-body">
                  <h4 className="card-title"><Trophy className="me-2" size={24} /> Our Facilities</h4>
                  <ul className="list-unstyled mt-3">
                    <li>✓ Professional Tables</li>
                    <li>✓ Premium Equipment</li>
                    <li>✓ Expert Instructors</li>
                    <li>✓ Regular Tournaments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Variations Section */}
        <section className="mb-5 bg-light p-5 rounded">
          <h2 className="text-center mb-4"><Target className="me-2" size={32} /> Game Variations</h2>
          <div className="row g-4">
            {[
              { title: "8-Ball", desc: "The most popular variation worldwide", points: ["Stripes vs Solids", "Strategic gameplay", "Perfect for beginners"] },
              { title: "9-Ball", desc: "Fast-paced rotation game", points: ["Quick matches", "Numerical order", "High skill ceiling"] },
              { title: "Straight Pool", desc: "Classic endurance format", points: ["High scoring", "Traditional rules", "Extended matches"] },
              { title: "Cutthroat", desc: "Multi-player elimination game", points: ["3+ players", "Competitive format", "Social gameplay"] }
            ].map((game, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4>{game.title}</h4>
                    <p>{game.desc}</p>
                    <ul className="list-unstyled">
                      {game.points.map((point, i) => <li key={i}>✓ {point}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training Programs Section */}
        <section className="mb-5">
          <h2 className="text-center mb-4"><Book className="me-2" size={32} /> Training Programs</h2>
          <div className="row g-4">
            {[
              { title: "Beginner's Course", desc: "Perfect for newcomers", points: ["Basic stance and grip", "Shot fundamentals", "Rules and etiquette", "4 weekly sessions"] },
              { title: "Intermediate Level", desc: "Enhance your skills", points: ["Advanced techniques", "Position play", "Strategic thinking", "6 weekly sessions"] },
              { title: "Pro Training", desc: "Master the game", points: ["Professional techniques", "Tournament preparation", "Mental coaching", "Personal instructor"] }
            ].map((program, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h4>{program.title}</h4>
                    <p className="text-muted">{program.desc}</p>
                    <ul className="list-unstyled">
                      {program.points.map((point, i) => <li key={i}>✓ {point}</li>)}
                    </ul>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Section */}
        <section className="mb-5 bg-dark text-white p-5 rounded">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2><Award className="me-2" size={32} /> Weekly Tournaments</h2>
              <p className="lead">Join our competitive tournaments and showcase your skills</p>
              <ul className="list-unstyled mt-4">
                <li>🏆 Cash Prizes</li>
                <li>🎮 Multiple Divisions</li>
                <li>⚡ Professional Referees</li>
                <li>💰 Low Entry Fees</li>
              </ul>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pool;