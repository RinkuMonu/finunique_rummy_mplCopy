import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../Home/Home.css';

const features = [
    {
        icon: "fas fa-gamepad",
        title: "User-Friendly Interface",
        description: "Smooth and easy-to-navigate platform, making gameplay seamless.",
    },
    {
        icon: "fas fa-trophy",
        title: "Exciting Cash Games & Tournaments",
        description: "Play for real rewards or enjoy free practice sessions.",
    },
    {
        icon: "fas fa-lock",
        title: "Secure Transactions",
        description: "Fast deposits and withdrawals with top-level security measures.",
    },
    {
        icon: "fas fa-users",
        title: "Real Players & Competitive Tables",
        description: "Enjoy fair gameplay against real opponents.",
    },
    {
        icon: "fas fa-headset",
        title: "24/7 Customer Support",
        description: "Our team is always available to assist with queries and issues.",
    },
];

export default function PoolRummy() {
    return (
        <>
            <div
                className="game-banner d-flex align-items-center justify-content-center text-white"
                style={{
                    backgroundImage: 'url("./images/Banner/Pool Rummy banner-01.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '70vh',
                    position: 'relative'
                }}
            >
                {/* <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
                    <h1 className="display-4">Pool Rummy</h1>
                </div> */}
            </div>
            <div className='container'>
                <div className='row my-4 align-items-center'>
                    <div className='col-md-12 text-center my-3'>
                        <h1>Pool Rummy – A Thrilling Skill-Based Card Game
                        </h1>
                    </div>
                    <div className='col-md-6'>
                        <h2>What is Pool Rummy?
                        </h2>
                        <p>Pool Rummy is one of the most popular variants of Indian Rummy, offering an exciting blend of skill, strategy, and entertainment. Unlike Points Rummy, where each game is independent, Pool Rummy is a long-format game where players continue playing until they reach a pre-set points limit, such as 101 or 201 points. The goal is to avoid accumulating the threshold points, as the player who reaches the limit is eliminated from the game.
                            This format ensures that only the most skilled and strategic players survive until the end, making Pool Rummy a test of consistency, patience, and decision-making. The game can be played with 2 to 6 players using one or two standard decks of 52 cards, including jokers.
                            On Finunique, Pool Rummy is designed for a fair, secure, and seamless gaming experience, allowing players to compete for real cash prizes or enjoy free practice games.
                        </p>

                    </div>
                    <div className='col-md-6'>
                        <img src='./images/compressed_2541224_13072.jpg' className='img-fluid' />
                    </div>
                </div>
                <div className='row bg-light rounded p-3 mb-4  align-items-center'>
                    <div className='col-md-12'>
                        <h4> How to Play Pool Rummy?
                        </h4>
                        <p>Pool Rummy follows the fundamental rules of Indian Rummy, where players aim to form valid sets and sequences to declare their hand. Here’s how the game unfolds:
                        </p>
                        <b>Step-by-Step Gameplay
                        </b>
                    </div>
                    <div className='col-md-6 my-4'>
                        <img src='./images/6640325_23142.jpg' className='img-fluid' />
                    </div>
                    <div className='col-md-6 my-4'>
                        <ul style={{ lineHeight: "30px" }}>
                            <li><b>Dealer & Card Distribution :</b> A dealer is chosen randomly, and each player is dealt 13 cards from a well-shuffled deck.
                            </li>
                            <li><b>Choosing the Wild Joker: </b> A random card is picked as the wild joker, which can substitute for any card to form sets and sequences.</li>
                            <li><b>Game Objective:</b>Players need to arrange their 13 cards into valid sequences and sets to make a valid declaration.
                            </li>
                            <li><b>Drawing & Discarding Cards:</b>On each turn, players draw a card from the open or closed deck and discard an unwanted card to the discard pile.
                            </li>
                            <li><b>Valid Declaration:</b> To make a valid declaration, a player must have at least one pure sequence (without jokers) and additional sequences or sets.</li>
                            <li><b>Scoring System: </b> The winner of the round gets zero points, while other players accumulate points based on the value of ungrouped cards.
                            </li>
                            <li><b>Elimination & Continuation:</b>A player is eliminated when they accumulate 101 or 201 points (depending on the game variant), and the last remaining player wins the game.
                            </li>
                        </ul>
                        <p>The longer format of Pool Rummy makes it a strategic and skill-based game, where players must plan their moves carefully to avoid accumulating points.
                        </p>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4>Pool Rummy Scoring System
                        </h4>
                        <p>The scoring in Pool Rummy follows a straightforward point-based system, where each card has a fixed value. The objective is to minimize points and survive until the end.
                        </p>
                    </div>
                    <Container className="mt-4">
                        <Row className='pointscardrow'>
                            <Col className='mb-3'>
                                <Card className='gamecardbody border-0 p-3'>
                                    <Card.Body>
                                        <Card.Title>Card Values in Pool Rummy</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Face Cards (King, Queen, Jack, Ace) – 10 points each</li>
                                                <li>Number Cards (2-10) – Carry their face value</li>
                                                <li>Joker & Wild Cards – Zero points</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className='mb-3'>
                                <Card className='gamecardbody border-0 p-3'>
                                    <Card.Body>
                                        <Card.Title>Scoring & Elimination Rules</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>The player who declares first gets 0 points and wins the round.</li>
                                                <li>Other players score based on their unmatched cards.</li>
                                                <li>If a player accumulates 101 points in Pool 101 or 201 points in Pool 201, they are eliminated.</li>
                                                <li>The last remaining player wins if others are eliminated.</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4 pointscardrow">
                            <Col className='mb-3'>
                                <Card className='gamecardbody border-0 p-3'>
                                    <Card.Body>
                                        <Card.Title>Game Strategy</Card.Title>
                                        <Card.Text>
                                            By understanding the scoring strategy, players can plan their moves strategically to minimize points and reduce the risk of elimination.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='row my-5'>
                    <div className='col-md-12'>
                        <h4>Winning Strategies for Pool Rummy
                        </h4>
                        <p>Pool Rummy is not just about luck; it requires skill, observation, and patience. Here are some strategies to improve your chances of winning:</p>

                    </div>
                    {/* <div className='col-md-6'>
                        <img src='./images/2148299251.jpg' className='img-fluid' />
                    </div> */}
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/clover.png' className='img-fluid mb-3' />
                                    <h4>Prioritize a Pure Sequence: </h4>
                                    <p> Since at least one pure sequence is mandatory for a valid declaration, try to form it as soon as possible.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/poker2.png' className='img-fluid mb-3' />
                                    <h4>Discard High-Value Cards Early:</h4>
                                    <p> Face cards (K, Q, J, A) carry 10 points each, so discard them unless they contribute to a set or sequence.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/poker1.png' className='img-fluid mb-3' />
                                    <h4>Use Jokers Wisely:</h4>
                                    <p>Jokers are game-changers in Rummy. Use them to complete sequences and sets, but avoid depending on them entirely.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/casino-chip.png' className='img-fluid mb-3' />
                                    <h4>Observe Opponent’s Moves: </h4>
                                    <p> Keep an eye on the cards your opponents pick and discard to guess their hand and block their strategies.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div class="row justify-content-center">
                    <div class="col-4">
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/ace.png' className='img-fluid mb-3' />
                                    <h4>Bluff & Confuse Opponents:</h4>
                                    <p> Sometimes, discarding a useful card strategically can mislead your opponent and disrupt their sequence-building.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-4">
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/poker-cards.png' className='img-fluid mb-3' />
                                    <h4>Hold Middle Cards: </h4>
                                    <p>Cards like 5, 6, 7 are versatile because they can form multiple sequences, increasing flexibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/playing-cards.png' className='img-fluid mb-3' />
                                    <h4>Play Defensively: </h4>
                                    <p> If your points are close to the elimination threshold, focus on minimizing your points rather than rushing a declaration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Following these strategies can significantly enhance your winning probability in Pool Rummy.
                </p>
                <div className='row my-4'>
                    <div className='col-md-12'>
                        <h4>Why Play Pool Rummy on Finunique?
                        </h4>
                        <p>Finunique is the best platform for playing Pool Rummy, offering a secure, fair, and high-quality gaming experience for all skill levels.
                        </p>
                        <b>Reasons to Play Pool Rummy on Finunique :
                        </b>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className="container mt-4">
                            <ul className="list-group">
                                {features.map((feature, index) => (
                                    <li key={index} className="list-group-item d-flex align-items-start">
                                        <i className={`${feature.icon} me-3 text-primary fs-4`}></i>
                                        <div>
                                            <h5 className="mb-1">{feature.title}</h5>
                                            <p className="mb-0 text-muted">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='./images/compressed_poker-chips-playing-cards-casino-dice-table (1).jpg' className='img-fluid' />

                    </div>
                    <p className='my-4'>Join Pool Rummy on Finunique and experience the thrill of strategic card gaming like never before!</p>
                </div>
                <div className='row my-4 align-items-center'>
                    <div className='col-md-12 text-center my-4'>
                        <h4>Why Pool Rummy is a Must-Try Game
                        </h4>
                    </div>
                    <div className='col-md-6'>
                        <img src='./images/11104.jpg' className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <p>Pool Rummy is a game of skill, patience, and smart decision-making. Unlike Points Rummy, which ends in one round, Pool Rummy offers longer gameplay, allowing players to recover from losses and apply strategies over multiple rounds.
                            This game is ideal for casual players and serious Rummy enthusiasts who enjoy long-term strategic play rather than quick rounds. With the right approach, any player can master Pool Rummy and enjoy big wins.
                            If you love skill-based card games, Pool Rummy is a must-try! Sign up on Finunique and play against the best players today.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
