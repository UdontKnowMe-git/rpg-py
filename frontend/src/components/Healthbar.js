import React from 'react';

const Healthbar = ({ health }) => {
    return (
        <div className="healthbar">
            <div
                className="health"
                style={{ width: `${health}%`, backgroundColor: health > 30 ? 'green' : 'red' }}
            ></div>
            <p>{health}% HP</p>
        </div>
    );
};

export default Healthbar;
