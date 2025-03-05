import React from "react";
import { Award, Users, Clock, Trophy, Star, Shield } from "lucide-react";
// import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

function Poker() {
  return (
    <div>
      <div
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage:
            'url("./images/Pokerbanner-01.jpg")',
          height: '70vh',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="banner-overlay w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
          <h1 className="display-4 fs-2">
            Poker Games – The Ultimate Test of Skill and Strategy
          </h1>
        </div> */}
      </div>

      <div className="container my-5">
        {/* Introduction Section */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-6 mb-4">What is Poker?</h2>
              <p className="lead fs-6">
                Poker is one of the most popular and strategic card games played
                worldwide. It is a game of skill, psychology, and mathematical
                calculations, where players compete to form the best hand or use
                bluffing techniques to outplay their opponents.
                <br /> Unlike games based purely on luck, Poker demands sharp
                decision-making, risk management, and an understanding of
                probability. The game is played with a standard 52-card deck,
                and players place bets based on their hand strength or their
                ability to make opponents fold. Different variations like Texas
                Hold'em, Pot-Limit Omaha (PLO) 4, PLO 5, and PLO 6 offer unique
                challenges and strategies, making Poker a thrilling experience.{" "}
                <br />
                At Finunique, we offer a safe, fair, and competitive Poker
                gaming environment where players can enjoy real-money games,
                exciting tournaments, and an immersive experience. <br />
                Whether you are a beginner looking to learn the basics or a
                seasoned player aiming for high-stakes tables, Finunique is the
                perfect platform to test your skills. Join today and compete
                with real players from across India!
              </p>
              <div className="d-flex gap-3 mt-4"></div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h4 className="card-title">
                    <Trophy className="me-2" size={24} />
                    How to Play Poker?
                    <h6 className="pt-3">
                      Poker follows a structured gameplay format that includes
                      betting rounds, hand rankings, and strategic
                      decision-making. The general steps of a Poker game are:
                    </h6>
                  </h4>
                  <ul className="list-unstyled mt-3">
                    <li className="mb-2">
                      ✓ Blinds and Dealer: The game begins with two players
                      posting forced bets known as small blind and big blind.
                      The dealer position rotates clockwise after every hand.
                    </li>
                    <li className="mb-2">
                      ✓ Blinds and Dealer: The game begins with two players
                      posting forced bets known as small blind and big blind.
                      The dealer position rotates clockwise after every hand.
                    </li>
                    <li className="mb-2">
                      ✓ Betting Rounds: Players bet based on their hand
                      strength, potential combinations, and bluffing strategies.
                      The betting rounds include Pre-Flop, Flop, Turn, and
                      River.
                    </li>
                    <li className="mb-2">
                      ✓ Community Cards: A total of five community cards are
                      dealt on the board, which all players can use to form
                      their best five-card hand.
                    </li>
                    <li className="mb-2">
                      ✓ Showdown: If more than one player remains after the
                      final betting round, the hands are revealed, and the
                      player with the best five-card combination wins the pot.
                    </li>
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
              <h2>
                <Award className="me-2" size={32} />
                Different Variations of Poker
              </h2>
              <p className="lead">
                Poker comes in multiple exciting formats, each offering a unique
                gameplay experience. On Finunique, players can enjoy the
                following popular variations:
              </p>
              <ul className="list-unstyled mt-4">
                <ul className="mb-3">
                  🏆 1. Texas Hold'em
                  <li className="ms-4">
                    The most widely played version of Poker.
                  </li>
                  <li className="ms-4">
                    Players receive two hole cards and use five community cards
                    to make the best five-card hand.
                  </li>
                  <li className="ms-4">
                    Strategy involves reading opponents, managing bets, and
                    knowing when to fold or raise.
                  </li>
                </ul>
                <ul className="mb-3">
                  🎮2. Pot-Limit Omaha (PLO) 4
                  <li className="ms-4">
                    Each player gets four hole cards but must use exactly two of
                    them along with three community cards.
                  </li>
                  <li className="ms-4">
                    Offers more hand possibilities and requires a strong grasp
                    of odds and probabilities.
                  </li>
                </ul>
                <ul className="mb-3">
                  ⚡ 3. Pot-Limit Omaha (PLO) 5
                  <li className="ms-4">
                    Similar to PLO 4 but with five hole cards.
                  </li>
                  <li className="ms-4">
                    Creates even more complex hand combinations, making it
                    highly strategic and action-packed.
                  </li>
                </ul>
                <ul className="mb-3">
                  💰 4. Pot-Limit Omaha (PLO) 6
                  <li className="ms-4">
                    Players receive six hole cards, but can still use only two
                    to form a winning hand.
                  </li>
                  <li className="ms-4">
                    Considered one of the most aggressive and unpredictable
                    formats, requiring advanced skills.
                  </li>
                </ul>
              </ul>
            </div>
            <div className="col-md-6">
            <div className="resellervector mt-5">
                      <img
                        className="move_horizontal ms-5 img-fluid"
                        style={{ height: "90vh", width:"70vh" }}
                        img
                        src="./images/texas_banner.jpg"
                        alt="Reseller Softwaer"
                      />
                    </div>
            </div>
          </div>

        </section>


        {/* Security Section */}
        <section className="mb-5 bg-light p-5 rounded">
          <h2 className="text-center mb-4">
            <Shield className="me-2" size={32} />
            Winning Strategies for Poker
          </h2>
          <h6 className="pb-2">
            Poker is not just about getting good cards—it’s about outplaying
            your opponents. Here are some winning strategies:
          </h6>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Starting Hand Selection</h4>
                  <p>
                    Play strong hands and fold weak ones. Don't play every hand
                    just for the sake of participation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Understand Position</h4>
                  <p>
                    Being in a late position (acting last) gives a major
                    advantage, allowing you to observe other players’ actions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Bluffing and Deception</h4>
                  <p>
                    A well-timed bluff can make opponents fold better hands, but
                    overdoing it can be risky.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Reading Opponents</h4>
                  <p>
                    Watch betting patterns and identify their playing
                    style—aggressive, tight, or passive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Bankroll Management</h4>
                  <p>
                    Set limits on how much you are willing to bet, and don’t
                    chase losses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h4>Adjusting to Game Flow</h4>
                  <p>
                    If the table is too aggressive, play defensively. If players
                    are too tight, apply pressure by raising more often.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Program */}
        <section className="mb-5 p-5 rounded"  style={{backgroundColor:"darkgrey"}}>
          <h2 className="text-center mb-4">Why Play Poker on Finunique?</h2>
          <p className="align-self-center">
            Finunique is the ultimate destination for Poker enthusiasts. Here’s
            why:
          </p>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Fair Play & Security</h5>
                  <p>
                    Our platform uses Random Number Generator (RNG) to ensure
                    100% fair dealing of cards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Multiple Variants</h5>
                  <p>
                    {" "}
                    Enjoy Texas Hold'em, PLO 4, PLO 5, and PLO 6 with real
                    players.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Real Money Rewards</h5>
                  <p>
                    Compete in cash games and win real money that can be
                    withdrawn instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Tournaments & Promotions</h5>
                  <p>
                    Join exciting Poker tournaments with big prize pools and
                    exclusive bonuses.
                  </p>
                </div>
              </div>
            </div>
            <span className=" d-flex ">
              <div className="col-md-4 mx-auto">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5>User-Friendly Interface</h5>
                    <p>
                      Play seamlessly on both the Finunique app and website,
                      designed for a smooth gaming experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mx-auto">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="">24/7 Customer Support</h5>
                    <p className="mx-auto ">
                      Our support team is available round the clock to assist
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <p className="fs-4 pt-3 dancing-script">
            Join Finunique today and experience Poker like never before!
          </p>
        </section>
      </div>
    </div>
  );
}

export default Poker;
