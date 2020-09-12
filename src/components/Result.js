import React, { useEffect } from 'react';
import './Results.css';

const Results = (props) =>{

    const { comp_rps, rps } = props
    
    useEffect( () => {
        return console.log(props)
    })
    
    const emoji = (rps) => {
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

    return (
        <div className="results-container" >
            <div className="rps computer-rps" >
                {emoji(props.comp_rps)}

            </div>
            <div className="rps player-rps">
                {emoji(props.rps)}

            </div>
        </div>
    )
}

export default Results;