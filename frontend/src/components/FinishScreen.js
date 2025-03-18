import React from 'react';

const FinishScreen = ({ level }) => {
    return (
        <div className="finish-screen">
            <h1>Game Over!</h1>
            <p>You reached level {level}</p>
            <a href="/index.html"><button>Play Again</button></a>
        </div>
    );
};

export default FinishScreen;
