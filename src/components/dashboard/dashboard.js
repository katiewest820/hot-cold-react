import React from 'react';
import './dashboard.css';

import Header from '../header/header';
import GuessStatus from '../guessStatus/guessStatus';

import UserInput from '../userInput/userInput';


export default function Dashboard(){
  return(
     <main className="mainContainer">
       <div className="dashboardBackground">
       <Header/>
        <div className="gameContainer">
          <GuessStatus/>
          <UserInput/>
        </div>
        </div>
    </main>
  );
};