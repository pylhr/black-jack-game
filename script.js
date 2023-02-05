let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')


function startGame(){
    isAlive = true
    let firstCard = rollDice()
    let secondCard = rollDice()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderCard()
    
}
function renderCard(){
    cardEl.textContent = "Cards: "
    
    for(let i = 0; i<cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum < 21){
        message = "Do you want to draw a new card?"
        
    
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    
    }
    else {
        message = "You're out of the game!"
        isAlive = false
        
    
    }
    messageEl.textContent = message 
    
}

function newCard(){
    if ((isAlive === true) && (hasBlackJack === false)){
    let card = rollDice()
    cards.push(card)
    sum += card
    renderCard()
    }
}

function rollDice(){
    let randNum = Math.floor(Math.random()*13) + 1
    
    if(randNum > 10)
    return 10
    else if (randNum === 1)
    return 11
    else
    return randNum

}

let player = {
    name : "Priyanshu",
    chips : 415
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

 
