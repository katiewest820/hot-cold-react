import React from 'react';
import './dashboard.css';

import Header from '../header/header';
import GuessStatus from '../guessStatus/guessStatus';
import UserInput from '../userInput/userInput';
import Help from '../help/help';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      helpVisible: false,
      correctNum: getRandomInt(100),
      mostRecentGuess: '',
      currentGuess: '',
      userGuesses: [],
      currentFeedback: 'Make your Guess!'
    };
  };

  updateMostRecentGuess(mostRecentGuess){
    let mostRecentGuessNum = parseInt(mostRecentGuess);
    let correctNum = this.state.correctNum;
    this.setState({mostRecentGuessNum});
    this.state.userGuesses.push(mostRecentGuessNum);
    if(mostRecentGuessNum === correctNum){
      this.setState({currentFeedback: 'You won!'});
    }
    else if(mostRecentGuessNum > correctNum -10 && mostRecentGuessNum < correctNum +10){
      this.setState({currentFeedback: 'hot'});
    }
    else{
      this.setState({currentFeedback: 'cold'});
    };    
  };

  updateCurrGuess(currentGuess){
    this.setState({currentGuess});
  };

  resetGame(value){
    this.setState({correctNum: getRandomInt(100)});
    this.setState({mostRecentGuess: ''});
    this.setState({userGuesses: []});
    this.setState({currentFeedback: 'Make your Guess!'});
    this.setState({currentGuess: ''});
  };

openHelp(helpVisible){
  this.setState({helpVisible: true});
};

closeHelp(helpVisible){
   this.setState({helpVisible: false});
};

  render(){
    if(this.state.helpVisible === true){
      return (
        <main className="mainContainer">
          <Help value={this.state.helpVisible} onClick={() => this.closeHelp(false)}/>
        </main>
        )
    }else{
      return(
         <main className="mainContainer">
           <div className="dashboardBackground">
           <Header resetGame={value => this.resetGame(value)} openHelpPage={value => this.openHelp(value)}/>
            <div className="gameContainer">
              <GuessStatus currGuess={this.state.currentFeedback}/>
              <UserInput value={this.state} onClick={value => this.updateMostRecentGuess(value)} onChange={value => this.updateCurrGuess(value)}/>
            </div>
            </div>
        </main>
      );
    };
  };
};