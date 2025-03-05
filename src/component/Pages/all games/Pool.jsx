import React from 'react';
import { Target, Award, Users, Book, Clock, Trophy } from 'lucide-react';
import '../Home/Home.css';

function Pool() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: 'url("./images/Poolbanner-01.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative'
        }}
      >
        {/* <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
          {/* <h1 className="display-4">Pool</h1> 
        </div>*/}
      </div> 

      <div class="container py-5">
        <h1 class="text-center mb-4">Pool Games – A Perfect Blend of Strategy and Entertainment</h1>

        <div class=" row mb-4">
          <div className='col-md-6'>
            <h2>What is Pool?</h2>
            <p>
              Pool is a popular cue sport played worldwide, combining skill, precision, and strategy. It is played on a rectangular table with six pockets, using a cue stick and colored balls. The primary objective varies depending on the variation being played, but the main goal remains the same: to pocket the balls in a specific order while using strategic positioning and shot accuracy.
              Pool is often confused with snooker and billiards, but the main difference is in the table size, number of balls, and game rules. Unlike casual pool games played in clubs, online Pool Games bring the thrill of competitive gameplay, real-time matches, and cash rewards right to your fingertips.
              On Finunique, players can experience an authentic Pool gaming environment, where they can play against real opponents, hone their cue skills, and win exciting prizes. Whether you're a casual player looking for fun or a competitive gamer aiming for top ranks, Finunique offers a fair, secure, and engaging gaming platform for Pool lovers across India.
            </p>
          </div>
          <div className='col-md-6'>
            <img src='./images/2540690_12951 (1).jpg' className='img-fluid' />
          </div>

        </div>

        <div className="row mb-4">
          <h2>How to Play Pool?</h2>
          <p>Pool follows a simple yet strategic gameplay format where players take turns using a cue stick to hit the cue ball, which then strikes the numbered balls to pocket them in the right sequence.
          </p>
          <b>General Rules of Pool:</b>
          <div className='col-md-6'>
            <img src='./images/2148299251.jpg' className='img-fluid' />

          </div>
          <div className='col-md-6'>
            <ul style={{ lineHeight: "34px" }}>
              <li><strong>Break Shot:</strong> The game begins with one player taking the break shot, aiming to scatter the balls and possibly pocket one.
              </li>
              <li><strong>Choosing Stripes or Solids:</strong>  If the first legal ball is pocketed, that player must continue pocketing the same type—either stripes (9-15) or solids (1-7).
              </li>
              <li><strong>Call Your Shots:</strong> In professional Pool, players must call their shots, indicating which ball they will hit and in which pocket.
              </li>
              <li><strong>Avoid Fouls:</strong>  A foul occurs if a player misses the shot, pockets the cue ball, or fails to hit the designated ball first.
              </li>
              <li><strong>Winning the Game:</strong> The game is won when a player legally pockets the 8-ball (black ball) after clearing their assigned balls from the table.</li>
            </ul>

          </div>
          <p className='my-4'>Mastering Pool requires angle calculations, cue ball control, spin techniques, and precision in shot-making. Players must think ahead, plan their shots, and anticipate the opponent’s moves to gain an advantage.</p>
        </div>
        <div class="my-4 ">
          <h2 className='mb-3'>Popular Variations of Pool</h2>
          <div class="row">
            <div class="col-md-4">
              <div className='gamecardbody p-4 rounded '>
                <h4>8-Ball Pool</h4>
                <ul style={{ lineHeight: "34px" }}>
                  <li style={{ listStyleType: "disc" }}>The most popular version of Pool, played with 15 object balls and a cue ball.</li>
                  <li style={{ listStyleType: "disc" }}>Players are assigned either solids (1-7) or stripes (9-15) after the break shot.</li>
                  <li style={{ listStyleType: "disc" }}>The objective is to pocket all assigned balls and finish with the 8-ball in a called pocket.</li>
                  <li style={{ listStyleType: "disc" }}>Strategy includes defensive play, skillful positioning, and smart cue control.</li>
                </ul>
              </div>

            </div>
            <div class="col-md-4">
              <div className='gamecardbody p-4 rounded '>
                <h4>9-Ball Pool</h4>
                <ul style={{ lineHeight: "34px" }}>
                  <li style={{ listStyleType: "disc" }}>Played with only nine numbered balls (1-9) and a cue ball.
                  </li>
                  <li style={{ listStyleType: "disc" }}>Players must hit the lowest-numbered ball on the table first, though they can pot any ball.
                  </li>
                  <li style={{ listStyleType: "disc" }}>The winner is the first to legally pot the 9-ball, making this game fast-paced and highly strategic.
                  </li>
                </ul>
              </div>

            </div>
            <div class="col-md-4">
              <div className='gamecardbody p-4 rounded '>
                <h4>Straight Pool (14.1 Continuous)</h4>
                <ul style={{ lineHeight: "34px" }}>
                  <li style={{ listStyleType: "disc" }}>Players can pocket any ball in any order, with each ball earning a single point.

                  </li>
                  <li style={{ listStyleType: "disc" }}>The first player to reach a pre-decided number of points (e.g., 100 or 150) wins.

                  </li>
                  <li style={{ listStyleType: "disc" }}>Requires precision shot-making, control over cue ball movement, and advanced strategy.

                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <div class="row my-4 align-items-center">
          <div className='col-md-12'>
            <h2>Skills Required to Master Pool</h2>
            <p>Pool is not just about hitting balls into pockets—it’s about understanding angles, ball speed, spin effects, and strategic play. To become a skilled player, one must develop:</p>
          </div>
          <div className='col-md-6'>
            <ul>
              <li>Cue Ball Control: Knowing how to control the position of the cue ball after each shot ensures better placement for the next shot.
              </li>
              <li>Shot Accuracy: Players must perfect their aim and hit the object ball with the right amount of force.
              </li>
              <li>Spin and English Techniques: Applying side-spin (English), topspin, or backspin helps in cue ball positioning.
              </li>
              <li>Strategic Play: The ability to plan shots ahead, play defensive moves, and analyze the opponent’s weaknesses is key to winning.
              </li>
              <li>Break Shot Mastery: A powerful and well-aimed break shot can give a significant advantage by spreading the balls strategically.
              </li>
            </ul>

          </div>
          <div className='col-md-6'>
            <img src='./images/6640325_23142.jpg' className='img-fluid' />
          </div>
        </div>

        <div class="row my-4 align-items-center">
          <div className='col-md-12 mb-5'>
            <h2>Winning Strategies for Pool</h2>
            <p>Pool is a mental and physical game, requiring smart planning and execution. Here are some key strategies to dominate the game:
            </p>
          </div>
          <div className='col-md-6'>
            <img src='./images/compressed_casino-chips-aces-poker-table.jpg ' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <ul>
              <li><b>Master the Break Shot: </b>A powerful and well-placed break shot can determine the flow of the game, setting up easy shots.
              </li>
              <li><b>Control the Cue Ball: </b> Always think about where the cue ball will land after your shot, ensuring a smooth transition for the next move.
              </li>
              <li><b>Play Defensive When Needed:</b>If you don’t have a good shot, play a safety shot to make it harder for the opponent.
              </li>
              <li><b>Angle Calculation: </b> Understanding angles helps in making bank shots and carom shots for difficult placements.
              </li>
              <li><b>Focus on Pocketing the Key Ball: </b>In every game, identify the key ball that unlocks the path for an easy win.
              </li>
            </ul>

          </div>
        </div>
        <p className='my-4'>Pool is as much about strategic positioning and defensive moves as it is about potting balls.
        </p>
        <section class="mb-4">
          <h2>Final Thoughts</h2>
          <p>Pool is a timeless game of skill, patience, and strategic thinking...</p>
          <p>Pool is a timeless game of skill, patience, and strategic thinking. Whether you enjoy casual gameplay or high-stakes competition, mastering Pool requires a combination of technical precision, mental agility, and smart shot selection.
            On Finunique, players can experience real-time competitive Pool action, compete in thrilling tournaments, and win big cash rewards. Our secure and fair gaming platform ensures an authentic experience, where skill and strategy lead to victory.
            So, are you ready to take your Pool game to the next level? Join Finunique today and start competing with the best players in India!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Pool;