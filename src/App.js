import React, { useState, useEffect, useRef } from 'react';
import RPSButton from './components/RPS_button'
import winCheck from './helpers/winCheck';
import Results from './components/Result';
import './app.css';

function App() {
  const isInitialMount = useRef(true);
  const [rps, update_rps] = useState(null);
  const [comp_rps, update_comp_rps] = useState(null);
  const [winCount, updateWinCount] = useState(0);
  const [showResults, updateShowResults] = useState(false);
  useEffect( () => {
    //computer chooses random rps on render
    const random_num = Math.floor(Math.random() * 3)
    
    switch(random_num){
      case 0: 
        return update_comp_rps('rock');
      case 1:
        return update_comp_rps('paper');
      case 2:
        return update_comp_rps('scissors');
      default: return
    }

  }, [rps] )

  const handleClick = (e) => {
    update_rps(e.target.attributes.getNamedItem('rps').value);
  } 

  useEffect( () => {
    //when rps changes, will see if player wins
    if(isInitialMount.current){
      isInitialMount.current = false;
    } else {
      const result = winCheck(rps, comp_rps);
      updateShowResults(true)
  
      if( result === 'win' ){
        updateWinCount(count => count + 1)
      }
      update_rps(null);
    }

  }, [rps])

  useEffect( () => {
    const timer = setTimeout(() => {
      updateShowResults(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [showResults])


  const ResultsComponent = showResults ? <Results rps={rps}/> : null;

  return (
    <div className="container" >
      {ResultsComponent}
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
