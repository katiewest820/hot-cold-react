import React from 'react';
import './userInput.css';

import GuessCount from '../guessCount/guessCount';
import GuessNumber from '../guessNumber/guessNumber'
export default function UserInput(props){
  console.log(props.value)



  return(
    <div className="userInputBox">
      <input type="text" className="userGuessInput" placeholder="Enter your Guess" onChange={event => props.onChange(event.target.value)} value={props.value.currentGuess}/>
      <button className="userGuessButton" onClick={event => props.onClick(event.target.value)} value={props.value.currentGuess}>Guess</button>
      
      <GuessNumber value={props.value.userGuesses}/>
      
      <div className="guessCountDiv">
        <GuessCount userGuesses={props.value.userGuesses}/>
      </div>
    
    </div>
  );
};