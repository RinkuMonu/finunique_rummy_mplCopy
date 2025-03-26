import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
// import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Home() {

    const [showQr, setshowQr] = useState(true)

    const showhideQr = () => {
        setshowQr(false)
    }

    return (
        <>
            <div className="container-fluid text-white text-center hero-section px-0">
                {/* Background Image */}
                <div
                    className="hero-img"
                >
                    <img src='./images/hero.jpg' className='img-fluid' />
                </div>
            </div>
            {/* First Section */}

            <div className="d-flex justify-content-center align-items-center vh-20 bg-light mt-3">
                <a href="/finunique-26-3.apk" download>
                    <button
                        className="btn btn-primary"
                        style={{
                            backgroundColor: 'rgb(255, 51, 102)',
                            width: '250px',
                            height: '50px',
                            fontSize: '20px',
                            border: 'none'
                        }}
                    >
                        Download NOW
                    </button>
                </a>
            </div>
            <section className="d-flex justify-content-center align-items-center pt-4 mt-4" style={{ backgroundColor: "#fff" }}>
                <p
                    className="text-center fw-bold italic px-4 py-2 rounded shadow-lg"
                    style={{
                        fontSize: "20px",
                        lineHeight: "28px",
                        backgroundColor: "#FFF",
                        color: "#000",
                        boxShadow: "0px 1px 1px 0px #f36",
                    }}
                >
                    What Makes Us Different
                </p>
            </section>


            {/* Second Section */}
            <section className="py-3 d-flex justify-content-center bg-light">
                <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                    {/* Left Line */}
                    <div
                        className="rounded"
                        style={{
                            width: "98px",
                            height: "2px",
                            background: "linear-gradient(to right, #fff, #f36)",
                        }}
                    ></div>

                    <h2
                        className="d-flex text-center justify-content-center align-items-center fw-bold text-uppercase"
                        style={{
                            fontSize: "clamp(24px, 5vw, 48px)", // Responsive font size
                            lineHeight: "1.2",
                            color: "#f36",
                            fontStyle: "italic",
                            textTransform: "uppercase",
                            margin: "20px 0"
                        }}
                    >
                        FinUnique Games
                    </h2>


                    {/* Right Line */}
                    <div
                        className="rounded"
                        style={{
                            width: "98px",
                            height: "2px",
                            background: "linear-gradient(to right, #f36, #fff)",
                        }}
                    ></div>
                </div>
            </section>
            <div className='row'>
                <div className='col-md-12'>
                <img src='./images/Banner/home banner-01.jpg' className='img-fluid' />

                </div>

            </div>
            
            
            <section style={{ backgroundColor: "#d8edff" }}>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <section className="d-flex justify-content-center align-items-center pt-4 mt-4">
                                <p
                                    className="text-center fw-bold italic px-4 py-2 rounded"
                                    style={{
                                        fontSize: "20px",
                                        lineHeight: "28px",
                                        backgroundColor: "#FFF",
                                        color: "#000",
                                        boxShadow: "0px 1px 1px 0px #f36",
                                    }}
                                >
                                    30+ Money Games on FinUnique
                                </p>
                            </section>

                            {/* Second Section */}
                            <section className="py-3 d-flex justify-content-center">
                                <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                                    {/* Left Line */}
                                    <div
                                        className="rounded"
                                        style={{
                                            width: "98px",
                                            height: "2px",
                                            background: "linear-gradient(to right, #fff, #f36)",
                                        }}
                                    ></div>

                                    <h2
                                        className="d-flex text-center justify-content-center align-items-center italic font-weight-bold text-uppercase"
                                        style={{
                                            fontSize: "48px",
                                            lineHeight: "48px",
                                            color: "#f36",
                                            fontStyle: "italic",
                                            fontWeight: "900",
                                            lineHeight: "48px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Card Games For Cash

                                    </h2>

                                    {/* Right Line */}
                                    <div
                                        className="rounded"
                                        style={{
                                            width: "98px",
                                            height: "2px",
                                            background: "linear-gradient(to right, #f36, #fff)",
                                        }}
                                    ></div>
                                </div>
                            </section>
                        </div>
                        <div className='col-md-12 mb-3'>
                            <div
                                style={{ background: "#ffffff99" }}
                                className="w-100 d-flex align-items-center gap-3 shadow-lg p-5 my-4 rounded imgcontent"
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        alt="Rummy"
                                        loading="lazy"
                                        decoding="async"
                                        className="img-fluid"
                                        style={{ objectFit: "contain", width: "250px" }}
                                        src="./images/RUMMY F.png"
                                    />
                                </div>
                                <p className="mb-0 fs-5 text-secondary">
                                    <strong className="text-danger">
                                        <Link className="text-decoration-none">Rummy</Link>
                                    </strong>
                                    <span>
                                        {" "}
                                        is a game that is well known in each age. This game is an ideal combination of technique, expertise, and tomfoolery. Whether you are playing with companions, family, or outsiders, rummy unites everybody and keeps the fervor alive. Starting from India, this game is presently played everywhere, and over the long run, numerous varieties and arrangements have arisen.

                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='col-md-12 mb-3'>
                            <div
                                style={{ background: "#ffffff99" }}
                                className="w-100 d-flex align-items-center gap-3 shadow-lg p-5 my-4 rounded imgcontent"
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        alt="poker"
                                        loading="lazy"
                                        width="67.903"
                                        height="67.903"
                                        decoding="async"
                                        className="img-fluid rounded"
                                        style={{ objectFit: "contain", width: "250px" }}
                                        src="./images/POKER.png"
                                    />
                                </div>
                                <p className="mb-0 fs-5 text-secondary">
                                    <strong className="text-danger">
                                        <Link className="text-decoration-none">Poker</Link>
                                    </strong>
                                    <span>
                                        {" "}
                                        Poker is an immortal game that has been enrapturing players for a long time. It's an ideal mix of expertise, technique, and a touch of karma. Whether you're an easygoing player or an old pro, poker offers an elating encounter that can prompt huge rewards. Assuming you're somebody who partakes in the adventure of poker, FinYoonik is the spot to be. Offering genuine cash poker games like Texas Hold'em, Omaha, and Poker Puzzle, FinYoonik gives a stage for poker lovers to contend, learn, and win large.

                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='col-md-12 mb-3'>
                            <div
                                style={{ background: "#ffffff99" }}
                                className="w-100 d-flex align-items-center gap-3 shadow-lg p-5 my-4 rounded imgcontent"
                            >
                                <div className="d-flex align-items-center">
                                    <img
                                        alt="poker"
                                        loading="lazy"
                                        width="67.903"
                                        height="67.903"
                                        decoding="async"
                                        className="img-fluid rounded"
                                        style={{ objectFit: "contain", width: "250px" }}
                                        src="./images/POOL.png"
                                    />
                                </div>
                                <p className="mb-0 fs-5 text-secondary">
                                    <strong className="text-danger">
                                        <Link className="text-decoration-none">Pool</Link>
                                    </strong>
                                    <span>
                                        {" "}

                                        Games have ceaselessly been a sweetheart redirection, saturating our lives with excitement, theory, and satisfaction. Among the most respected games are Pool (reliably known as Lakadi or Ghochi) and Call Break — two stunt-taking games that request strength, a framework, and a pattern of karma. Anticipating that you should savor these games, you are in for a perfect treat! With online stages like Finunique, you can now participate in both Pool and Call Break groupings for ensured cash, going toward gifted players and esteeming fast activity. In this blog, we will analyze the consistent association, rules, and frameworks behind Pool and Call Break, while featuring why Finunique stays at the persuading stage for these cheering troubles.

                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='col-md-12'>
                            {/* Second Section */}
                            <section className="py-3 d-flex justify-content-center">
                                <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                                    {/* Left Line */}
                                    <div
                                        className="rounded"
                                        style={{
                                            width: "98px",
                                            height: "2px",
                                            background: "linear-gradient(to right, #fff, #f36)",
                                        }}
                                    ></div>

                                    <h2
                                        className="d-flex text-center justify-content-center align-items-center italic font-weight-bold text-uppercase"
                                        style={{
                                            fontSize: "48px",
                                            lineHeight: "48px",
                                            color: "#f36",
                                            fontStyle: "italic",
                                            fontWeight: "900",
                                            lineHeight: "48px",
                                            textTransform: "uppercase",
                                        }}
                                    >

                                        Casual Games For Money


                                    </h2>

                                    {/* Right Line */}
                                    <div
                                        className="rounded"
                                        style={{
                                            width: "98px",
                                            height: "2px",
                                            background: "linear-gradient(to right, #f36, #fff)",
                                        }}
                                    ></div>
                                </div>
                            </section>

                        </div>
                    </div>

                </div>
                <div className='coming-soon-img'>
                    <img src='./images/Banner/cms.jpg' className='img-fluid coming-soonImg' />
                </div>
            </section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <section className="d-flex justify-content-center align-items-center pt-4 mt-4" style={{ backgroundColor: "#fff" }}>
                            {/* <p
                                className="text-center fw-bold italic px-4 py-2 rounded shadow-lg"
                                style={{
                                    fontSize: "20px",
                                    lineHeight: "28px",
                                    backgroundColor: "#FFF",
                                    color: "#000",
                                    boxShadow: "0px 1px 1px 0px #f36",
                                }}
                            >
                                15K+ Downloads




                            </p> */}
                        </section>

                        {/* Second Section */}
                        <section className="py-3 d-flex justify-content-center bg-light">
                            <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                                {/* Left Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #fff, #f36)",
                                    }}
                                ></div>

                                <h2
                                    className="d-flex text-center justify-content-center align-items-center italic font-weight-bold text-uppercase"
                                    style={{
                                        fontSize: "30px",
                                        lineHeight: "48px",
                                        color: "#f36",
                                        fontStyle: "italic",
                                        fontWeight: "900",
                                        lineHeight: "48px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    how to download FinUnique Gaming APP

                                </h2>

                                {/* Right Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #f36, #fff)",
                                    }}
                                ></div>
                            </div>

                        </section>
                        <p className='text-center'>Follow the given steps below and start playing your favourite games on Finunique app now</p>
                    </div>
                    <div className='col-md-12'>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <div className="text-secondary text-left">
                                <div>
                                    <img
                                        alt="Download Icon"
                                        loading="lazy"
                                        width="64"
                                        height="64"
                                        className="img-fluid"
                                        src="./images/mobile.webp"
                                    />
                                </div>
                                <h3 className="mt-3 mb-4 fw-bold">On Android</h3>
                                <ul className="list-unstyled">
                                    {[
                                        "Click on 'DOWNLOAD & GET ₹30K*' button on any Finunique page and wait for the app to download.",
                                        "Click on 'Download Anyway' to start downloading.",
                                        "Once it's downloaded, tap Open and sign up. Tap Continue to allow customization for better experience.",
                                        "Enter your phone number, verify with OTP, and use any referral code to get extra rewards. START PLAYING!"
                                    ].map((step, index) => (
                                        <li key={index} className="d-flex align-items-start mb-3">
                                            <svg
                                                className="me-2"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.7338 4.63867L7 12.9053L7.61688 13.4888H12V18.8053H13.2662L17 10.6036L16.5455 9.95523H12V4.63867H10.7338Z"
                                                    fill="url(#gradient)"
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="7" y1="11.722" x2="17" y2="11.722" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E91051" />
                                                        <stop offset="1" stopColor="#E91051" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <p className="mb-0">
                                                <strong>Step {index + 1}:</strong> {step}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-12'>
                        {/* Second Section */}
                        <section className="py-3 d-flex justify-content-center bg-light">
                            <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                                {/* Left Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #fff, #f36)",
                                    }}
                                ></div>

                                <h2
                                    className="d-flex text-center justify-content-center align-items-center italic font-weight-bold text-uppercase"
                                    style={{
                                        fontSize: "30px",
                                        lineHeight: "48px",
                                        color: "#f36",
                                        fontStyle: "italic",
                                        fontWeight: "900",
                                        lineHeight: "48px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Getting started with cash winning games

                                </h2>

                                {/* Right Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #f36, #fff)",
                                    }}
                                ></div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
            <div className='container-fluid ps-0'>
                <div className='row'>
                    <div className='phone-banner'>
                        <img src='./images/phone banner.png' className='img-fluid' />

                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        {/* Second Section */}
                        <section className="py-3 d-flex justify-content-center bg-light">
                            <div className="d-flex flex-row gap-3 align-items-center px-3 headingmedia">
                                {/* Left Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #fff, #f36)",
                                    }}
                                ></div>

                                <h2
                                    className="d-flex text-center justify-content-center align-items-center italic font-weight-bold text-uppercase"
                                    style={{
                                        fontSize: "30px",
                                        lineHeight: "48px",
                                        color: "#f36",
                                        fontStyle: "italic",
                                        fontWeight: "900",
                                        lineHeight: "48px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Online Real Cash Game App FAQs

                                </h2>

                                {/* Right Line */}
                                <div
                                    className="rounded"
                                    style={{
                                        width: "98px",
                                        height: "2px",
                                        background: "linear-gradient(to right, #f36, #fff)",
                                    }}
                                ></div>
                            </div>

                        </section>
                    </div>
                    <div className='col-md-12'>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item my-3">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What are money-winning games?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Real Money-winning games are those that you can play online and win cash. These online money games are easily accessible on mobile devices, tablets, and desktop computers. They are available in diverse formats, such as mobile applications and websites. Designed to be both engaging and entertaining, these games offer players a chance to win cash prizes.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I win money in these games on Finunique?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        On Finunique, there are more than 30+ games to play and win money. There are a variety of games to choose from- casual games to fantasy sports, and card games. Pick your preferred game, choose a cash contest, and defeat your opponents to win money in real cash games.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Are all money-winning games free to play?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        No, not all games at Finunique are free. However, there are freeroll tournaments and several free-to-play games where you can win cash prizes. Some of the money-winning games require an entry fee. Always be on the lookout for app offers and tournaments on Finunique.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                        Can I play real money games on my mobile device?
                                    </button>
                                </h2>
                                <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes. You can download the Finunique app on your mobile to play real money games. Choose the game you want to play and win cash prizes!
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                        How can I differentiate between real cash games and free games?
                                    </button>
                                </h2>
                                <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Once you log on to the Finunique app, there are categorizations that show which games are free and which games require an entry fee. You can play real cash games to win real money. Note: some free games also offer a chance to win cash prizes on Finunique.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                        How do I deposit money into my account for real cash games on Finunique?
                                    </button>
                                </h2>
                                <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        You can deposit money into your Finunique wallet very easily. First, create an account on Finunique and sign up. Next, go to your Finunique wallet and tap on 'Add Cash' to deposit cash into your account through various methods like Paytm and UPI.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                        How do I withdraw my winnings from real cash games on Finunique?
                                    </button>
                                </h2>
                                <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        You can withdraw winnings of the real cash games from your Finunique wallet instantly. Follow these steps to withdraw cash:

                                        Open the Finunique app
                                        Go to the "Wallet" section
                                        Once you reach there, tap on the Withdraw icon
                                        There you go! Your cash has been withdrawn instantly and successfully
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                        Are there age restrictions for playing real cash games?
                                    </button>
                                </h2>
                                <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes. The player has to be at least 18 years of age to play real money games on Finunique.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps9" aria-expanded="false" aria-controls="collaps9">
                                        Are there strategies to improve my chances of winning in real money games?
                                    </button>
                                </h2>
                                <div id="collaps9" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Here are some strategies that you can use to win cash prizes and win money on Finunique:

                                        <b>Choosing the right games to win money:</b> Play the games that you are most familiar with and choose the game accordingly. On Finunique, you can play over 60+ real money games in various categories. There are casual games, card games, fantasy sports games a variety of games to choose from.
                                        <b>Practice free games:</b>  Before playing money-winning games, you can practice free games on Finunique. Some games have the "Free to Play" option that you can try and perfect your gaming skills. Once you're confident to play real cash games, pick a preferred game to win cash prizes.
                                        <b>Look out for bonus offers:</b> Finunique provides a welcome bonus and other offers once you sign in. There are specific tournament offers in many categories where you can play games and win.
                                        <b>Begin with a fixed amount:</b> Set aside a fixed amount that you can use to play for every gaming session. Set a consistent bankroll strategy. Once you realize that you're reaching the limit, either take control of the game or quit. Investing more money in a game that you're losing might lead to more losses. Practice more on the app and try the next time. To win money, you can also try out the free games or practice at a smaller table. One of the most important aspects of real cash games is to learn to manage funds properly.
                                        <b>Start with a small stake: </b>Another tip to win money in real cash games is to begin your games with smaller stakes and then slowly raise them once you can play and win big. This is useful, especially in the case of card games. Playing at smaller stakes means smaller losses, and if things work out well, you can win too. You can master all the skill-based games on a low bankroll. Do not go for a budget that is beyond your limit just for a chance to win.
                                        <b>Patience and Discipline is the key:</b> One of the key elements of winning real money-winning games is to stay patient and observe the game. If you are a beginner, being patient and disciplined is one of the best ways to win money. Each game requires extreme focus and attention. While winning or losing, people might be under confidence or be overconfident and that is when you make the maximum mistakes. It is essential to stay attentive, focused and dedicated to win cash prizes.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps10" aria-expanded="false" aria-controls="collaps10">
                                        Can I transfer my in-game winnings to real cash online on Finunique?
                                    </button>
                                </h2>
                                <div id="collaps10" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        Yes, you can transfer your in-game winnings to real cash very easily. The withdrawal process at Finunique is very simple. You can withdraw your winnings instantly using any of the payment methods, such as Paytm, Amazon Pay, UPI, or Bank Transfer.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item my-3 border-top">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collaps11" aria-expanded="false" aria-controls="collaps11">
                                        How does Finunique ensure safety and fair play while playing online money games?
                                    </button>
                                </h2>
                                <div id="collaps11" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        The Fairplay policy at Finunique ensures that all players have a fair and equal opportunity to win at online games. Finunique platform ensures that players are seated randomly, and the algorithm monitors any suspicious activity of collusion. Finunique also uses an SSL security system to protect the identity and personal information. Such details are fully encrypted to prevent security and data breaches.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {showQr &&
                    <div className="d-flex justify-content-between font-bold  text-center align-items-center fixed relative "
                        style={{
                            border: "1px solid rgba(255, 255, 255, 0.00)",
                            backdropFilter: "blur(20px)",
                            background: "linear-gradient(285deg, rgba(255, 255, 255, 0.11) 5.47%, rgba(255, 255, 255, 0.00) 100.36%)",
                            boxShadow: "0px 8px 10px 0px rgba(0, 0, 0, 0.20), 1px -1px 2px 2px rgba(255, 255, 255, 0.25) inset",
                            zIndex: 99,
                            padding: "20px",
                            borderRadius: "10px",
                            color: "#000",
                            position: "fixed",
                            bottom: "100px",
                            right: "50px",
                            padding: "20px",
                        }}>
                        <button onClick={showhideQr}
                            style={{

                                border: 'none',
                                position: 'absolute',
                                top: '0px',
                                right: '0px'
                            }}
                        >  X </button>
                        <div>
                            <img
                                alt="QR to download MPL money app on desktop"
                                loading="lazy"
                                width={100}
                                height={100}
                                decoding="async"
                                className="rounded-sm img-fluid"
                                src="./images/qr.jpg"
                            />
                        </div>
                        <h2 className="text-white downloadText text-center">Download <br />Finunique</h2>
                    </div>}
            </div>
        </>
    )
}
