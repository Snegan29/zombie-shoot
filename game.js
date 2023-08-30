// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer

const game_body = document.getElementById("game-body")

let shotgunbgm = new Audio("./assets/shotgun.wav")
game_body.onclick = () => {
    shotgunbgm.currentTime = 0
    shotgunbgm.play()
}

let bgmusic = new Audio("./assets/bgm.mp3")
bgmusic.play()
bgmusic.loop = true 

//random numbers.

 zombieID = 0
function generateZombie(){
    let num = generateUniqueNums(1,7)
    game_body.innerHTML += `<img src=./assets/zombie-${num}.png class=zombie-image id=zombie${zombieID}>`

    zombie = document.getElementById(`zombie${zombieID}`)
    let seconds = generateUniqueNums(2,6)
    zombie.style.animationDuration = `${seconds}s`
    let viewWidth = generateUniqueNums(20,80)
    zombie.style.transform = `translateX(${viewWidth}vw)` 

    zombie.onclick = () => {
        destroyZombie(zombie)
    }
}
generateZombie()


// destroy zombie function
function destroyZombie(unDead){
    unDead.style.display = "none"
    zombieID++
    generateZombie()
}


// generate random numbers
function generateUniqueNums(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

// check if zombies missed 
let lives = 2
let time = 20

function missedZombies(zombie){
    if(zombie.getBoundingClientRect().top<=0){
        lives--
        if(lives == 0){
            location.href="./game-over.html"
        }
    destroyZombie(zombie)
    }
}
missedZombies(zombie)


// timer funtion

setInterval(timer,1000)

function timer(){
    if(time<=0){
        location.href = "win.html"
    }else{
        time--
        document.getElementById("timer").innerText = time
        missedZombies(zombie)
    }
}