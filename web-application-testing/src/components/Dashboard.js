import React, { useState } from 'react';
import Display from './Display.js';

const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    const onStrike = () => {
        if (strikes === 3 || balls === 4) {
            setStrikes(strikes - strikes);
            setBalls (balls - balls);
        } else {
            setStrikes(strikes + 1);
        }
    }

    const onBall = () => {
        if (balls === 4 || strikes === 3) {
            setBalls(balls - balls);
            setStrikes(strikes - strikes);
        } else {
            setBalls(balls + 1);
        }
    }

    const onFoul = () => {
        if (strikes === 0) {
            setStrikes(strikes + 1);
        } else if (strikes === 1) {
            setStrikes (strikes + 2);
        } else if (strikes === 2) {
            setStrikes (strikes);
        }
    }
    
    const onHit = () => {
        setStrikes(strikes - strikes);
        setBalls(balls - balls);
    }

    return (
        <div>
            <Display 
                strikes={strikes}
                balls={balls}
            />
            <div>
                <button onClick={onStrike}>Strike</button>
                <button onClick={onBall}>Ball</button>
                <button onClick={onFoul}>Foul</button>
                <button onClick={onHit}>Hit</button>
            </div>
        </div>
    );
};

export default Dashboard;