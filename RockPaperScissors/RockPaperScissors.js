const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'|| userInput === 'paper'|| userInput === 'cissors'){
      return userInput;
    }else{
      console.log('Invalid input.');
    }
  }
  
  const getComputrChoice = () =>{
    randNumber = Math.floor(Math.random()*3);
    switch(randNumber){
      case 0: 
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2: 
        return 'scissors';
        break;
      default:
        console.log('No Choice was made.')
    }
  }
  
  const determineWinner = (userInput,computerChoice) => {
    console.log("User Choice: " + userInput);
    console.log("Computer Choice: " + computerChoice);
  
    if(userInput === computerChoice){
      return console.log("its a tie");
    }
    if(userInput === 'rock'){
      if(computerChoice === 'paper'){
        return console.log("Computer Won!.");
      }else{
        return console.log("User Won!.");
      }
    }
  
    if(userInput === 'paper'){
      if(computerChoice === 'scissors'){
        return console.log("Computer Won!.")
      }else{
        return console.log("User Won!.")
      }
    }
  
    if(userInput === 'scissors'){
      if(computerChoice === 'paper'){
        return console.log("Computer Won!.");
      }else{
        return console.log("User Won!.")
      }
    }
  
    }
  
    const playGame = () => {
      determineWinner(getUserChoice('paper'),getComputrChoice());
    };
  
    playGame();
  
  