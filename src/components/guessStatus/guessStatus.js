import React from 'react';
import './guessStatus.css';

export default function GuessStatus(props){
console.log(props.currGuess)
  return(
     <div className="guessStatusContainer">
       <h2 className="guessStatusText">{props.currGuess}</h2>
     </div>
  );
};