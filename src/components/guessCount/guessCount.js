import React from 'react';
import './guessCount.css';

export default function GuessCount(props){
  console.log(props.userGuesses)
  let guesses = props.userGuesses.map((guess, index) => {
  return <p key={index}>{guess}</p>
});

  return(
      <div className="guessHistory">
        {guesses}
      </div>
    
    );
};