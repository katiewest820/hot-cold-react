import React from 'react';
import './userInput.css';

import GuessCount from '../guessCount/guessCount';
export default function UserInput(){

  return(

    <div className="userInputBox">
      <input type="text" className="userGuessInput" placeholder="Enter your Guess"/>
      <button className="userGuessButton">Guess</button>
      <h3 className="numOfGuesses">Guess #<span className="currentNumber">0</span>!</h3>
      <div className="guessCountDiv">
        <GuessCount/>
      </div>
    </div>
  );
};