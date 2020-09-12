import React, { useState, useEffect } from 'react';
import './RPS_button.css';
const RPSButton = (props) => {
    const [ emoji, updateEmoji ] = useState(null)
    const { rps } = props;

    useEffect( () => {
        switch(rps){
            case 'rock':
                return updateEmoji('👊');
            case 'scissors':
                return updateEmoji('✌');
            case 'paper':
                return updateEmoji( '✋');
            default:
                return;
        }
    }, [])



    return <div {...props} className="rpsButton" >{emoji}</div>
}

export default RPSButton