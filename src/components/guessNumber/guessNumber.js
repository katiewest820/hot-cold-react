import React from 'react';
import './guessNumber.css';

export default function GuessNumber(props){
  console.log(props.value)
 let arrLength = props.value.length;

  return(
      <h3 className="numOfGuesses">Guess #<span className="currentNumber">{arrLength}</span>!</h3>
  );
};