moves = ["rock.svg", "paper.svg", "scissor.svg"]
YourScore = 0
ComputerScore = 0
result = document.getElementById('result')

function rock(){
    randomMove = Math.floor(Math.random()*moves.length)
    document.getElementById('computer').src = moves[randomMove]
    document.getElementById('you').src = "rock.svg"

    // Game Logic

    if(randomMove == 0){
        result.style.color ="#fff"
        result.innerHTML = "Tie!"
    }

    else if(randomMove == 1){
        result.style.color ="#C50000"
        result.innerHTML = "You Lose!"
        ComputerScore++
        document.getElementById('comp').innerHTML =" Computer : "+ ComputerScore
    }

    else{
        result.style.color ="#00C353"
        result.innerHTML = "You Win!"
        YourScore++
        document.getElementById('You').innerHTML =" You : "+ YourScore
    }
}

function paper(){
    randomMove = Math.floor(Math.random()*moves.length)
    document.getElementById('computer').src = moves[randomMove]
    document.getElementById('you').src = "paper.svg"

    // Game Logic

    if(randomMove == 0){
        result.style.color ="#00C353"
        result.innerHTML = "You Win!"
        YourScore++
        document.getElementById('You').innerHTML =" You : "+ YourScore
    }

    else if(randomMove == 1){
        result.style.color ="#fff"
        result.innerHTML = "Tie!"
    }

    else{
        result.style.color ="#C50000"
        result.innerHTML = "You Lose!"
        ComputerScore++
        document.getElementById('comp').innerHTML =" Computer : "+ ComputerScore
    }
}

function scissor(){
    randomMove = Math.floor(Math.random()*moves.length)
    document.getElementById('computer').src = moves[randomMove]
    document.getElementById('you').src = "scissor.svg"

    // Game Logic

    if(randomMove == 0){
        result.style.color ="#C50000"
        result.innerHTML = "You Lose!"
        ComputerScore++
        document.getElementById('comp').innerHTML =" Computer : "+ ComputerScore
    }

    else if(randomMove == 1){
        result.style.color ="#00C353"
        result.innerHTML = "You Win!"
        YourScore++
        document.getElementById('You').innerHTML =" You : "+ YourScore
    }

    else{
        result.style.color ="#fff"
        result.innerHTML = "Tie!"
    }
}

// Website Pre-Loader

let loader = document.getElementById("loader")

window.addEventListener("load", function(){
    loader.style.display="none"
})