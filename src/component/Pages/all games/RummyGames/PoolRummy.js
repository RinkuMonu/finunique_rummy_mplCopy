import React from 'react'

export default function PoolRummy() {
    return (
        <>
            <div
                className="game-banner d-flex align-items-center justify-content-center text-white"
                style={{
                    backgroundImage: 'url("./images/11062546_18973622.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50vh',
                    position: 'relative'
                }}
            >
                <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
                    <h1 className="display-4">Pool Rummy</h1>
                </div>
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

           </div>
        </>
    )
}
