import React from'react';
import { Link } from'react-router-dom';
import './FighterCard.css'

function FightCard({ fighter, id, name, img, weightClass, setSelectedFighter }) {
    
    function handleViewProfile(e){
        setSelectedFighter(fighter)
    }


    return (
        <div className="fighter-card" onClick={handleViewProfile}> 
            <p>{weightClass}</p>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            {/*<Link to={`/champions/${id}`}>View Details</Link>*/}
            {/*<button className="view-profile" onClick={handleUpdateFighter}>
                Update Champion
            </button>*/}
            <Link to={`/update_form/${id}`} className="view-profile">Update Champion</Link>
        </div>
    )
}

export default FightCard;