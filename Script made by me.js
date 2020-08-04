var currentScore, totalScore, activePlayer, gamePlaying, rollClicked;

function start() 
{
    currentScore = 0;
    totalScore = [0, 0, 0];
    activePlayer = 1;
    gamePlaying = true;
    rollClicked = false;
    //changed the active status
    //document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    
    //change the winner name
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    
    //all value changed 
    document.getElementById('score-1').textContent = '0';  
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    
    document.querySelector('.dice').style.display = 'none';

}
function otherPlayer()
{
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer === 1 ? activePlayer === 2 : activePlayer === 1;
    roundScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';

}

 start();

document.querySelector('.btn-roll').addEventListener('click', function(){
    //if the game is not finished
    if(gamePlaying)
        {
            var dice = Math.floor(Math.random() * 6 + 1 );

            //dice png and currentScore
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').src = 'dice-' + dice + '.png';
            
            rollClicked = true;
            //add to current score if dice is not 1
            if(dice !== 1)
                {
                    currentScore += dice;
                    document.querySelector('#current-' + activePlayer).textContent = currentScore; 
                }
            else // if dice is 1 then go to otherPlayer
                {
                    otherPlayer();
                }
        }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying && rollClicked)
        {
            //add to total score
            totalScore[activePlayer] += currentScore;
            currentScore = 0;
            document.getElementById('score-' + activePlayer).textContent = totalScore[activePlayer];
            //change current to 0
            document.getElementById('current-' + activePlayer).textContent = '0';
            
            rollClicked = false;
            if(totalScore[activePlayer] >= 100)
                {
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
                    document.querySelector('.dice').style.display = 'none';
                    gamePlaying = false;
                }
            else
            {
                otherPlayer();
            }
        }
    
});

function otherPlayer()
{
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    currentScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    
    //document.querySelector('.dice').style.display = 'none'; bjksdc
    rollClicked = false;

}

document.querySelector('.btn-new').addEventListener('click', start);