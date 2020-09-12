import React, { useEffect } from 'react';
import winCheck from '../helpers/winCheck';
import './Results.css';

const Results = (props) =>{

    const { comp_rps, rps } = props
    
    useEffect( () => {
        return console.log(props)
    })
    
    const RPSemoji = (rps) => {
        switch(rps){
            case 'rock':
                return '👊';
            case 'scissors':
                return '✌';
            case 'paper':
                return  '✋';
            default:
                return;
        }
    }

    const winEmoji = () => {
        const result = winCheck(rps, comp_rps);
        switch(result){
            case 'win':
                return '✔ You Win!';
            case 'lose':
                return '❌ You Lose!';
            case 'tie':
                return '🤷 Its a tie!';
            default:
                return '';
        }
    }

    return (
        <div className="results-container" >

            <div className="rps computer-rps" >
                {RPSemoji(props.comp_rps)}
            </div>
            <div className="result-emoji">
                {winEmoji()}
            </div>
            <div className="rps player-rps">
                {RPSemoji(props.rps)}

            </div>
        </div>
    )
}

export default Results;