var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
var numClosedDoors = 3;
var openDoor1, openDoor2, openDoor3;
var startButton = document.getElementById('start');
var currentlyPlaying = true;

const isBot = (door) => {
  if (door.src === botDoorPath) {
      return true
  } else {
    return false
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
     return false
  } else {
    return true
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
      gameOver('win');
  } else if (isBot(door)) {
      gameOver();       
  }
};

const randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0) {
      openDoor1 = botDoorPath; //Lose
    	openDoor2 = beachDoorPath;
    	openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
      openDoor1 = beachDoorPath;
      openDoor2 = botDoorPath;  //Lose
    	openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
    	openDoor3 = botDoorPath; 	//Lose
  }
};

doorImage1.onclick = () => {
  if(isClicked(openDoor1) === true && currentlyPlaying === true) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
	}
};

doorImage2.onclick = () => {
  if(isClicked(openDoor2) === true && currentlyPlaying === true) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
	}
};

doorImage3.onclick = () => {
  if(isClicked(openDoor3) === true && currentlyPlaying === true) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
	}
};

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
};

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
};

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

startRound();


