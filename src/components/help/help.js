import React from 'react';
import './help.css';

export default function Help(props){
  return(
      <div className="helpPage">
        <div className="instructionsContainer">
          <h1>What do I do?</h1>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <p>1. I pick a random secret number between 1 to 100 and keep it hidden.</p>
          <p>2. You need to guess until you can find the hidden secret number.</p>
          <p>3. You will get feedback on how close ("hot") or far ("cold") your guess is.</p>
          <p>So, Are you ready?</p>
          <button onClick={props.onClick}>Got It!</button>
        </div>
      </div>
  );
};