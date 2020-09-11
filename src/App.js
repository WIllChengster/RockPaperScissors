import React, { useState, useEffect } from 'react';
import RPSButton from './components/RPS_button'
import winCheck from './helpers/winCheck';
import './app.css';

function App() {
  
  const [rps, update_rps] = useState(null)
  const [comp_rps, update_comp_rps] = useState(null)
  const [winCount, updateWinCount] = useState(0)
  useEffect( () => {
    //computer chooses random rps on render
    const random_num = Math.floor(Math.random() * 3)
    
    switch(random_num){
      case 0: 
        return update_comp_rps('rock');
      case 1:
        return update_comp_rps('paper');
      case 2:
        return update_comp_rps('scissors')
    }

  }, [winCount] )

  const handleClick = (e) => {
    update_rps(e.target.attributes.getNamedItem('rps').value);
  } 

  useEffect( () => {
    //when rps changes, will see if player wins
    const result = winCheck(rps, comp_rps);
    if( result === 'win' ){
      updateWinCount(count => count + 1)
    }
    update_rps(null);
    console.log(result)
  }, [rps])

  return (
    <div className="container" >
      <h1 className="wins">Wins: {winCount}</h1>
      {/* <div className="computer-container buttons-container">
        <div>
          <div className="computer-button"></div>
        </div>
        <div>
          <div className="computer-button"></div>
          <div className="computer-button"></div>
        </div>
      </div> */}
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
