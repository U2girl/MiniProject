//ship class
class SpaceShip{
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(target){
        if(Math.random() < this.accuracy){
             console.log('Hit!');
             target.takeDamage(this.firepower);        
    }else{
        console.log('Miss!');
    }
    } 

    takeDamage(damage){
        this.hull -= damage;
        if(this.hull <= 0){
            console.log('Ship is destroyed!');
        }
    }
}
// A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack 
//the next ship or to retreat
// If you retreat, the game is over,
//  perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed

function startBattle(playerShip, alienShipsArr){
    let currentShip=0;
    while(playerShip.hull>0  && currentShip < alienShipsArr.length){
        //player's turn
        playerShip.attack(alienShipsArr[currentShip]);
        if(alienShipsArr[currentShip].hull<=0){
            currentShip++;
            if(currentShip<alienShipsArr.length){
                let response = prompt('Would you like to attack or retreat?');
                if(response === 'retreat'){
                    break;
                }
            }
        }
        //aliens turn
        if(currentShip<alienShipsArr.length){
            console.log('alien attacks')
            alienShipsArr[currentShip].attack(playerShip);
        }
       
    }
    //check the victory condition
    if(playerShip.hull<=0){
        console.log('Game Over! You lose!');
    }else if(currentShip>=alienShipsArr.length){
        console.log('Game Over! You win!');
    }
    
}

//create the player ship
let ussAssembly = new SpaceShip(20, 5, .7);
const alienShips = [];
//create the alien ships
for(let i=0; i<6; i++){
    const hull=Math.floor(Math.random()*4)+3;
    const firepower=Math.floor(Math.random()*3)+2;
    const accuracy=Math.random()*(0.2)+0.6;
    alienShips.push(new SpaceShip(hull, firepower, accuracy));
}
console.log(alienShips);
console.log(ussAssembly);
startBattle(ussAssembly, alienShips);