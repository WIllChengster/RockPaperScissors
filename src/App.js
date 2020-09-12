import React, { useState, useEffect, useRef } from 'react';
import RPSButton from './components/RPS_button'
import winCheck from './helpers/winCheck';
import Results from './components/Result';
import './App.css';

function App() {
  const isInitialMount = useRef(true);
  const [rps, update_rps] = useState(null);
  const [comp_rps, update_comp_rps] = useState(null);
  const [winCount, updateWinCount] = useState(0);
  const [showResults, updateShowResults] = useState(false);

  useEffect( () => {
    //computer chooses RPS during 1 of 2 events:
    //1. component first mounts
    //2. when showResults updates AND is false.
    //      need to make sure showResults is false so that state doesn't change when we show the user what the computer chose.
    if(!showResults){
      const random_num = Math.floor(Math.random() * 3)
      switch(random_num){
        case 0: 
          update_comp_rps('rock');
          break;
        case 1:
          update_comp_rps('paper');
          break;
        case 2:
          update_comp_rps('scissors');
          break;
        default: break;
      }
      update_rps(null);

    }

  }, [showResults] )

  const handleClick = (e) => {
    const input = e.target.attributes.getNamedItem('rps').value
    update_rps(input);
    updateShowResults(true)
  } 

  useEffect( () => {
    //when rps changes, will see if player wins
    if(isInitialMount.current){
      isInitialMount.current = false;
    } else {
      const result = winCheck(rps, comp_rps);
      console.log(rps, comp_rps)
      if( result === 'win' ){
        updateWinCount(count => count + 1)
      }
    }

  }, [rps, comp_rps])

  useEffect( () => {
    const timer = setTimeout(() => {
      updateShowResults(false)
    }, 2900)
    
    return () => clearTimeout(timer)
  }, [showResults])


  const ResultsComponent = showResults ? <Results comp_rps={comp_rps} rps={rps}/> : null;

  return (
    <div className="container" >
      {ResultsComponent}
      {/* <Results comp_rps={comp_rps} rps={rps}/> */}
      <h1 className="wins">Wins: {winCount}</h1>
      <div className='buttons-container' >
        <div>
          <RPSButton onClick={handleClick} rps='rock' />
        </div>
        <div>
          <RPSButton onClick={handleClick} rps='paper'/>
          <RPSButton onClick={handleClick} rps='scissors'/>
        </div>

      </div>

    </div>
  );
}

export default App;
