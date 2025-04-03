import React, { useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router-dom"
import './UpdateFighterForm.css'

function UpdateFighterForm(){

    const params = useParams()
    const {handleUpdateSubmit} = useOutletContext()

    const navigate = useNavigate()

    const [championToUpdate, setChampionToUpdate] = useState(
        {
            name: "",
            age: undefined,
            height: "",
            image: "",
            record: ""
        }
    )

    function onHandleSubmit(e){
        e.preventDefault()
        handleUpdateSubmit(params.id, championToUpdate)
        navigate("/champions")
    }

    return (
        <div className="update-fighter-container">
            <h2>Update Champion Information</h2>
            <form className="update-fighter-form" onSubmit={onHandleSubmit}>
                <input
                    type="text" name="name" placeholder="Enter Fighter's Name"
                    value={championToUpdate.name}
                    onChange={(e) => setChampionToUpdate({...championToUpdate, name: e.target.value})}
                />
                <input
                    type="number" name="age" placeholder="Enter Fighter's Age"
                    value={championToUpdate.age}
                    onChange={(e) => setChampionToUpdate({...championToUpdate, age: e.target.value})}
                />
                <input
                    type="text" name="height" placeholder="Enter Fighter's Height"
                    value={championToUpdate.height}
                    onChange={(e) => setChampionToUpdate({...championToUpdate, height: e.target.value})}
                />
                <input
                    type="text" name="record" placeholder="Enter Fighter's Record"
                    value={championToUpdate.record}
                    onChange={(e) => setChampionToUpdate({...championToUpdate, record: e.target.value})}
                />
                <input
                    type="text" name="imageURL" placeholder="Enter Fighter's Image URL"
                    value={championToUpdate.image}
                    onChange={(e) => setChampionToUpdate({...championToUpdate, image: e.target.value})}
                />
                <button type="submit">Update Champion for This Division</button>
            </form>
        </div>
    )
}

export default UpdateFighterForm