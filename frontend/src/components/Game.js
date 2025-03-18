import React, { useState } from 'react';
import Healthbar from './Healthbar';
import FinishScreen from './FinishScreen';

const Game = () => {
    const [health, setHealth] = useState(100);
    const [level, setLevel] = useState(1);
    const [finished, setFinished] = useState(false);

    const handleChallenge = () => {
        const success = Math.random() > 0.3;
        if (success) {
            setLevel(level + 1);
        } else {
            setHealth(health - 20);
        }

        if (health <= 0) setFinished(true);
    };

    return (
        <div className="game-container">
            {!finished ? (
                <>
                    <h1>Level {level}</h1>
                    <Healthbar health={health} />
                    <button onClick={handleChallenge}>Take on Challenge!</button>
                </>
            ) : (
                <FinishScreen level={level} />
            )}
        </div>
    );
};

export default Game;
