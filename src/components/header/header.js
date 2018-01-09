import React from 'react';
import './header.css';

import Help from '../help/help';
import NewGame from '../newGame/newGame';

export default function Header(){

  return(
    <header>
      <div className="helpLink">What?
        <Help/>
      </div>
      <div className="newGameLink">+ New Game
        <NewGame/>
      </div>  
      <div className="title">HOT or COLD</div>
    </header>
  );
};