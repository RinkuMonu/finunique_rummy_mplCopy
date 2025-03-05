import React from 'react'
import '../../Home/Home.css';

const features = [
    {
        icon: "fas fa-random",
        title: "100% Fair Gameplay",
        description: "We use Random Number Generator (RNG) technology to ensure every card dealt is completely random and unbiased.",
    },
    {
        icon: "fas fa-layer-group",
        title: "Multiple Deal Formats",
        description: "Choose from different formats like 2-deal, 3-deal, 4-deal, and 6-deal games, depending on your preferred level of challenge.",
    },
    {
        icon: "fas fa-coins",
        title: "Real Money Rewards",
        description: "Play in real-money games and win exciting cash prizes that can be instantly withdrawn.",
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Smooth User Experience",
        description: "Our app and website provide a seamless, lag-free gaming experience, making it easy for players to enjoy the game anytime.",
    },
    {
        icon: "fas fa-headset",
        title: "24/7 Customer Support",
        description: "Our dedicated support team is available round the clock to assist players with any queries or issues.",
    },
    {
        icon: "fas fa-gift",
        title: "Exciting Bonuses & Promotions",
        description: "We offer exclusive promotions, referral bonuses, and special tournaments to make the game more rewarding.",
    },
];
export default function DealsRummy() {
    return (
        <div>
            <div
                className="game-banner d-flex align-items-center justify-content-center text-white"
                style={{
                    backgroundImage: 'url("./images/Banner/Deals Rummy banner-01.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '70vh',
                    position: 'relative'
                }}
            >
                {/* <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
                    <h1 className="display-4">Deals Rummy</h1>
                </div> */}
            </div>
            <div className='container'>
                <div className='row my-4 align-items-center'>
                    <div className='col-md-12 text-center my-3'>
                        <h1>Deals Rummy – The Ultimate Skill-Based Card Game
                        </h1>
                    </div>
                    <div className='col-md-6'>
                        <h2>What is Deals Rummy?

                        </h2>
                        <p>Deals Rummy is an exciting variation of 13-card Rummy that is played over a fixed number of rounds, called deals. Unlike Points Rummy, where a winner is decided in a single round, Deals Rummy allows players to compete across multiple deals, making it more strategic and engaging. Every player starts with a predefined number of chips, and at the end of each deal, the losing players transfer chips to the winner. The game continues for the set number of deals, and the player with the highest number of chips at the end emerges as the final winner.
                            Deals Rummy is a perfect balance of luck and strategy. Since the game is not decided in a single hand, players have the chance to recover from an early loss and strategize for future rounds. The key to success lies in consistency, smart card discarding, and efficient use of jokers. At Finunique, we offer the best Deals Rummy experience with real-money rewards, exciting challenges, and fair play features. Whether you're playing casually or aiming for big wins, Deals Rummy on Finunique provides a seamless and rewarding gaming experience.
                        </p>

                    </div>
                    <div className='col-md-6'>
                        <img src='./images/2150971835.jpg' className='img-fluid' />
                    </div>
                </div>
                <div className='row bg-light rounded p-3 mb-4  align-items-center'>
                    <div className='col-md-12'>
                        <h4>  Scoring System in Deals Rummy

                        </h4>
                        <p>The scoring system in Deals Rummy is different from Points Rummy. Instead of cash values, chips are used for scoring. The key rules for scoring include:
                        </p>

                    </div>
                    <div className='col-md-6 my-4'>
                        <img src='./images/6640325_23142.jpg' className='img-fluid' />
                    </div>
                    <div className='col-md-6 my-4'>
                        <ul style={{ lineHeight: "30px" }}>
                            <li><b>Winner’s Score: </b>  The player who declares a valid set first gets zero penalty points and wins the deal.
                            </li>
                            <li><b>Losing Players’ Score:</b>  The penalty is based on the total value of ungrouped cards remaining in their hands.
                                <ul>
                                    <li><b>Face Cards (King, Queen, Jack, Ace) – 10 points each
                                    </b></li>
                                    <li><b>Number Cards (2-10) – Same as their face value
                                    </b></li>
                                    <li><b>Jokers – Zero points (not counted as penalties)
                                    </b></li>
                                </ul>

                            </li>
                            <li><b>Chip Deduction:</b>The penalty points of losing players are converted into chip deductions, and these chips are transferred to the winner.

                            </li>

                        </ul>
                        <p className='mt-4'>At the end of all deals, the player with the highest number of chips is the final winner. This scoring system ensures that a player can recover from initial losses and still win the game by playing skillfully in the later rounds.
                        </p>
                    </div>

                </div>

                <div className='row my-5'>
                    <div className='col-md-12'>
                        <h4> How to Play Deals Rummy?
                        </h4>
                        <p>Playing Deals Rummy follows the standard 13-card Rummy rules but with a fixed number of rounds. Here’s how a game is played:
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/clover.png' className='img-fluid mb-3' />
                                    <h4>Pre-Set Deals:</h4>
                                    <p>The game is played over a set number of deals—typically 2, 3, 4, or 6 deals.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/poker2.png' className='img-fluid mb-3' />
                                    <h4>Chips Allocation:</h4>
                                    <p>Each player starts with an equal number of chips, which are used for scoring instead of cash points.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-3'>
                        <div className='bx1 mb-3'>
                            <div className='card border-0 pointsrummy_card'>
                                <div className='card-body bg-white border-0'>
                                    <img src='./images/poker1.png' className='img-fluid mb-3' />
                                    <h4>Card Distribution: </h4>
                                    <p>Each player is dealt 13 cards from a standard deck, and one joker is randomly selected as the wild joker.
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
                                    <h4>Turn-Based Play:</h4>
                                    <p>Players take turns drawing and discarding cards to form valid sequences and sets. The first player to do so successfully wins the deal.

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <p>Since Deals Rummy is played across multiple rounds, a single loss does not mean the end—players can bounce back by winning future deals, making it an exciting and competitive format.

                </p>
                <div className='row my-4'>
                    <div className='col-md-12'>
                        <h4>Strategies to Win Deals Rummy
                        </h4>
                        <p>Winning Deals Rummy requires a smart, long-term strategy since it is a multi-round game. Here are some expert tips to improve your chances of winning:
                        </p>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className="container mt-4">
                            <ul className="">
                                <li><b>Plan for the Entire Game:</b> Unlike Points Rummy, losing one deal does not mean the game is over. Manage your chip count and focus on the long run.
                                </li>
                                <li><b>Create a Pure Sequence Quickly: </b> A pure sequence (without a joker) is required for a valid declaration. Secure it early to avoid last-minute trouble.
                                </li>
                                <li><b>Observe Opponents’ Moves:</b>Track which cards your opponents pick and discard. This helps in predicting their hand and avoiding giving them useful cards.
                                </li>
                                <li><b>Discard High-Value Cards If Needed:  </b>If face cards like King, Queen, or Jack do not fit into your sequence or set, discard them early to reduce penalty points in case of a loss.
                                </li>
                                <li><b>Use Jokers Wisely:</b>Jokers are powerful for completing sets and sequences. Use them strategically instead of relying on them for every grouping.
                                </li>
                                <li><b>Stay Calm and Adapt: </b> Since the game spans multiple deals, stay patient and adjust your strategy based on the flow of the game.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img src='./images/compressed_poker-chips-playing-cards-casino-dice-table (1).jpg' className='img-fluid' />

                    </div>
                    <p className='my-4'>Following these strategies increases your chances of winning and ensures a consistent performance across all deals.
                    </p>
                </div>
                <div className='row my-4 align-items-center'>
                    <div className='col-md-12 text-center my-4'>
                        <h4>Why Play Deals Rummy on Finunique?

                        </h4>
                        <p>At Finun, we provide the best online Deals Rummy experience with advanced features, exciting rewards, and fair play policies. Here’s why players love Deals Rummy on our platform:
                        </p>

                    </div>
                    <div className='col-md-6'>
                        <img src='./images/11062546_18973622.jpg' className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
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
                        <p>Join Finunique today and experience Deals Rummy like never before. Compete with real players, test your skills, and win big!</p>
                    </div>
                </div>
                <div className='row my-4 align-items-center'>
                    <div className='col-md-12'>
                        <h4> Final Thoughts
                        </h4>
                    </div>
                    <div className='col-md-6'>
                        <p>Deals Rummy is a game of skill, strategy, and patience. Unlike single-round formats, it offers multiple chances to recover from losses, making it ideal for players who enjoy long-term strategic gameplay. Each deal presents new challenges, and the ability to analyze opponents, form sequences quickly, and minimize penalty points determines the winner.
                            With Finunique , you can enjoy Deals Rummy in a safe, fair, and highly rewarding environment. Whether you're a beginner or an experienced player, understanding the rules and applying smart strategies will significantly improve your chances of winning.
                            So, why wait? Sign up on Finunique now and start playing Deals Rummy like a pro!
                        </p>

                    </div>
                    <div className='col-md-6'>
                    <img src='./images/compressed_casino-chips-aces-poker-table.jpg' className='img-fluid' />

                    </div>
                </div>
            </div>
        </div>
    )
}
