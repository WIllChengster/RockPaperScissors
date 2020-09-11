const winCheck = (playerRPS, compRPS) => {
    if(playerRPS === 'rock'){
        if(compRPS === 'rock'){
            return 'tie'
        }
        if(compRPS === 'paper'){
            return 'lose'
        }
        if(compRPS === 'scissors'){
            return 'win'
        }
    }

    if(playerRPS === 'paper'){
        if(compRPS === 'rock'){
            return 'win'
        }
        if(compRPS === 'paper'){
            return 'tie'
        }
        if(compRPS === 'scissors'){
            return 'lose'
        }
        
    }if(playerRPS === 'scissors'){
        if(compRPS === 'rock'){
            return 'lose'
        }
        if(compRPS === 'paper'){
            return 'win'
        }
        if(compRPS === 'scissors'){
            return 'tie'
        }
        
    }
}

export default winCheck