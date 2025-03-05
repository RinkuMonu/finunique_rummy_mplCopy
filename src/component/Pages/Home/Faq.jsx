import React from 'react'
import './Home.css'

export default function Faq() {
  return (<>
   <div 
        className="game-banner d-flex align-items-center justify-content-center text-white"
        style={{ 
          backgroundImage: 'url("./images/Banner/faq banner-01.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          position: 'relative'
        }}
      >
        <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center justify-content-center">
          <h1 className="display-4">FAQ</h1>
        </div>
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
</>
  )
}
