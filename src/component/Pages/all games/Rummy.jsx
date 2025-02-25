import React, { useState } from "react";
import { Award, Book, Clock, Users, Star, Trophy } from 'lucide-react';
import '../../Pages/Home/Home.css'
import { Link } from "react-router-dom";
function Rummy() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const text = `Points Rummy is a fast-paced and thrilling version of the game, 
  where each game lasts for a single round. Players compete for points, 
  with each point carrying a fixed monetary value. The first player to 
  declare a valid set of sequences and sets wins the game, while the 
  opponents are given penalty points based on their unmatched cards.
  This format is ideal for players who prefer quick games and instant results. 
  Since Points Rummy is played in a single round, it allows players to participate 
  in multiple games in a short period, making it a highly engaging and competitive format.`;


  const text2 = `Pool Rummy is a longer and more strategic format, where players start with a predefined number of points, usually 101 or 201. The objective is to keep the score as low as possible, as players get eliminated when their points cross the preset limit. The game continues until only one player remains in the pool.
                    Pool Rummy requires patience, skill, and careful planning, as players must consistently focus on reducing their points while preventing their opponents from winning. This format is perfect for those who enjoy long and intense gameplay sessions.
                  `;


  const text3 = `In Deals Rummy, a fixed number of rounds (deals) are played, and each player starts with an equal number of chips. The player with the highest number of chips at the end of all deals is declared the winner. This format adds an extra layer of strategy, as players must think ahead and manage their chips efficiently across multiple rounds.
                    Deals Rummy is ideal for those who enjoy structured gameplay with a balanced mix of skill and luck. Since all players start with equal resources, it becomes a fair battle of skill, making it one of the most competitive formats of Rummy.
                  `;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const toggleReadMore3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <div>
      <div
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80")',
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
              <p className="lead">The Ultimate Guide to Rummy: Mastering the Game of Skill and Strategy</p>
              <h4>Introduction</h4>
              <p>Rummy is a classic card game that has been enjoyed by millions of players worldwide. Unlike luck-based games, Rummy is a skill-based game that requires a combination of logical thinking, memory, strategy, and patience. The game has evolved over time and is now widely played on online platforms, where players can compete for real cash prizes and exciting rewards.</p>
              <p>At Finuniue, we bring the most seamless and engaging Rummy experience for players across India. Whether you are a beginner trying to learn the game or a seasoned player aiming to refine your skills, this guide will provide you with all the necessary knowledge to become a Rummy expert.
              </p>
            </div>
            <div className="col-md-6">
              <img src='./images/1064079_OM6SIT0 (1).jpg' className='img-fluid' />

            </div>
          </div>
          <div className='row align-items-center my-5'>
            <div className='col-md-6'>
              <img src='./images/6640325_23142.jpg' className='img-fluid' />

            </div>
            <div className='col-md-6'>
              <h4>The History and Evolution of Rummy</h4>
              <p>Rummy has an interesting history, with its origins tracing back to several card games played across different cultures. Some believe that Rummy evolved from the Spanish game Conquian, which dates back to the 16th century, while others suggest its roots lie in the Chinese game Mahjong. Over time, the game spread across the world, adapting to regional variations and becoming a popular pastime.
                In India, Rummy has gained massive popularity, especially after the introduction of online gaming platforms. With digital advancements, players can now access different Rummy formats on their smartphones, tablets, and desktops. Platforms like Finunique have revolutionized the way Rummy is played, offering a secure, competitive, and rewarding environment for players of all skill levels.
              </p>

            </div>
          </div>
          <div className='row align-items-center my-5'>
            <div className='col-md-6'>
              <h4>Why Rummy is a Game of Skill?
              </h4>
              <p>Unlike casino games that depend purely on luck, Rummy is a skill-based game where players must strategize their moves, analyze opponents, and make calculated decisions. The outcome of the game depends largely on how well a player arranges their cards and adapts to changing situations.
                The Supreme Court of India has also recognized Rummy as a skill-based game, making it completely legal to play. The game tests various abilities such as memory, observation, critical thinking, and quick decision-making. A skilled player can consistently improve their game by practicing and refining their strategies. This makes Rummy different from games of chance, where players rely solely on luck to win.
              </p>

            </div>
            <div className='col-md-6'>
              <img src='./images/compressed_casino-chips-aces-poker-table.jpg' className='img-fluid' />

            </div>

          </div>
          <div className='row mb-3'>
            <div className='col-md-12'>
              <h4>Different Types of Rummy Games
              </h4>
              <p>At Finuniue, players can explore various Rummy formats, each offering a unique style of gameplay. Understanding these variations will help you choose the right game according to your preference and skill level.
              </p>

            </div>
            <div className='col-md-4 my-3'>
              <div className='card border-0 gamecardbody rounded p-3 mb-3'>
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>1. Points Rummy
                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    {isExpanded ? text : text.substring(0, 150) + "..."}{" "}
                    <button onClick={toggleReadMore} className="btn btn-link p-0">
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <Link className="arrow-btn" to="/pointsrummy">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 my-3'>
              <div className='card border-0 gamecardbody rounded p-3 mb-3'>
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>2. Pool Rummy
                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    {isExpanded2 ? text2 : text2.substring(0, 150) + "..."}{" "}
                    <button onClick={toggleReadMore2} className="btn btn-link p-0">
                      {isExpanded2 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <Link className="arrow-btn" to="/poolrummy">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-md-4 my-3'>
              <div className='card border-0 gamecardbody rounded p-3 mb-3'>
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>3. Deals Rummy

                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    {isExpanded3 ? text3 : text3.substring(0, 150) + "..."}{" "}
                    <button onClick={toggleReadMore3} className="btn btn-link p-0">
                      {isExpanded3 ? "Read Less" : "Read More"}
                    </button>
                  </p>
                  <Link className="arrow-btn" to="/dealsrummy">
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className="row mb-3 mt-5">
            <div className="col-md-12">
              <h4>How to Play Rummy: A Step-by-Step Guide
              </h4>
              <p>Understanding the basic rules of Rummy is crucial for any player. Here’s a step-by-step guide to help you get started.
              </p>
            </div>
            <div class="col-md-6">
              <div className='card border-0 gamecardbody rounded p-3 mb-3'>
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>1. Card Distribution

                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    At the beginning of a Rummy game, each player is dealt 13 cards from a standard deck of 52 cards. The game also includes wild jokers, which can be used as substitutes in sequences and sets. One card is selected randomly as the wild joker, and the remaining cards form the draw pile, from which players pick cards on their turn.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className='card border-0 gamecardbody rounded p-3 mb-3' >
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>2. Objective of the Game

                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    The primary goal in Rummy is to arrange all 13 cards into valid sequences and sets. A sequence is a group of consecutive cards of the same suit, while a set consists of three or four cards of the same rank but different suits. To declare a winning hand, a player must have at least one pure sequence (a sequence without a joker).
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className='card border-0 gamecardbody rounded p-3 mb-3' >
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>3. Gameplay Rules


                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    Players take turns drawing and discarding cards to form valid sequences and sets. A player can pick a card from either the open deck (discard pile) or the closed deck (draw pile). At the end of each turn, one card must be discarded. The game continues until a player successfully arranges all their cards and makes a valid declaration.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div className='card border-0 gamecardbody rounded p-3 mb-3'>
                <div className='card-header bg-white border-0 pb-0'>
                  <h4 className='mb-0'>4. Winning the Game
                  </h4>
                </div>
                <div className='card-body pt-2  border-0'>
                  <p>
                    Once a player declares, the hand is checked for validity. If the declaration is correct, the player wins the game, and the opponents’ scores are calculated based on their ungrouped cards. The lower the points, the better the chances of staying in the game. If a player makes an invalid declaration, they receive a penalty, and the game continues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3 mt-5">
            <div className="col-md-12">
              <h4>Why Play Rummy on Finunique?
              </h4>
              <p>Finuinque is India’s most trusted online Rummy platform, offering a seamless and rewarding gaming experience. Here’s why thousands of players choose us for their Rummy journey:
              </p>
            </div>
            <div className="col-md-6">
              <div className="whyplay">
                <ul>
                  <li>
                    <b>Fair and Secure Gameplay –</b>
                    We use Random Number Generator (RNG) technology to ensure that every game is fair and unbiased. Our platform also has strict anti-fraud measures to maintain transparency and security.

                  </li>
                  <li>
                    <b>Exciting Cash Tournaments –</b>
                    We offer a variety of tournaments with big cash prizes. Players can participate in daily, weekly, and monthly contests to showcase their skills and win real money.
                  </li>
                  <li>
                    <b>User-Friendly Interface – </b>
                    Our platform is designed to provide a smooth and easy-to-use interface, allowing players to focus on the game without any distractions.
                  </li>
                  <li>
                    <b>Fast Withdrawals – </b>
                    Players can withdraw their winnings quickly and securely using multiple payment options, including UPI, wallets, and bank transfers.
                  </li>
                  <li>
                    <b>24/7 Customer Support –</b>
                    Our dedicated support team is available around the clock to assist with any queries or issues.
                  </li>
                  <p>At Finunique , we don’t just offer a game; we provide an unforgettable Rummy experience that is fair, competitive, and rewarding.</p>
                </ul>
              </div>

            </div>
            <div className="col-md-6">
              <img src="./images/2150971835.jpg" className="img-fluid" />

            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-12">
              <h4>Final Thoughts</h4>
              <p>Rummy is more than just a game; it is a mental exercise that enhances logical thinking, patience, and decision-making skills. Whether you are playing for fun or competing for real cash prizes, Rummy offers endless excitement and opportunities to improve your strategic abilities.
                With Finunique, you can enjoy a secure and fair gaming environment where every move counts. So why wait? Sign up today and start your journey to becoming a Rummy champion!
              </p>
            </div>


          </div>
        </section>


      </div>
    </div>
  );
}

export default Rummy;
