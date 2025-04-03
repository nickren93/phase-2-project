import React, { useState } from'react';
import { useOutletContext, Link } from 'react-router-dom';
import FightCard from './FighterCard';
import './Champions.css';

function Champions(){

    const {fighters} = useOutletContext();
    const [selectedFighter, setSelectedFighter] = useState(null)

    const fightersList = fighters.map(fighter => {
        return <FightCard key={fighter.id} fighter={fighter} id={fighter.id} name={fighter.name} 
        img={fighter.image} weightClass={fighter.weightClass} 
        setSelectedFighter={setSelectedFighter} />
    })


    return (
        <div className="champions-container">
            <div className="fighter-list-container">
                {/* Create Champion Link at the top */}
                <Link to="/new_form" className="create-champion-link">
                    ➕ Create New Champion for New Division
                </Link>

                {/* Fighter List */}
                <div className="fighter-list">
                    {fightersList}
                </div>
            </div>

            {/*right side*/}
            <div className="fighter-details">
                {selectedFighter ? (
                    <div className="fighter-info">
                        <h2>{selectedFighter.weightClass}</h2>
                        <img src={selectedFighter.image} alt={selectedFighter.name} /> 
                        <h3>Name: {selectedFighter.name}</h3>
                        <h3>Age: {selectedFighter.age}</h3>
                        <h3>Weight: {selectedFighter.weight}</h3>
                        <h3>Height: {selectedFighter.height}</h3>
                        <h3>Current Record: {selectedFighter.record} {"(W-L-D)"}</h3>
                    </div>
                ) : (
                    <div className="placeholder">
                        <p>Select a fighter to view details</p>
                    </div>
                )}
            </div>
            
            {/*<Outlet context={fighters} />*/}
        </div>
    )
}

export default Champions;