import React from 'react';
import './header.css';

export default function Header(props){

  return(
    <header>
      <div className="helpLink" onClick={props.openHelpPage}>What?
      </div>
      <div className="newGameLink" onClick={props.resetGame}>+ New Game
      </div>  
      <div className="title">HOT or COLD</div>
    </header>
  );
};