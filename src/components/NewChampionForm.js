import React, { useState } from "react"
import { useParams, useOutletContext, useNavigate } from "react-router-dom"
import './NewChampionForm.css'

function NewChampionForm(){

    const params = useParams()
    const {handleNewSubmit} = useOutletContext()

    const navigate = useNavigate()

    const [newChampion, setNewChampion] = useState(
        {
            name: "",
            age: undefined,
            weightClass: "",
            weight: "",
            height: "",
            image: "",
            record: ""
        }
    )

    function onHandleSubmit(e){
        e.preventDefault()
        handleNewSubmit(newChampion)
        navigate("/champions")
    }

    return (
        <div className="new-champion-container">
            <h2>➕Create New Champion for New Division</h2>
            <form className="new-champion-form" onSubmit={onHandleSubmit}>
                <input
                    type="text" name="name" placeholder="Enter Fighter's Name"
                    value={newChampion.name}
                    onChange={(e) => setNewChampion({...newChampion, name: e.target.value})}
                />
                <input
                    type="number" name="age" placeholder="Enter Fighter's Age"
                    value={newChampion.age}
                    onChange={(e) => setNewChampion({...newChampion, age: e.target.value})}
                />
                <input
                    type="text" name="weightClass" placeholder="Enter New Weight Class Name"
                    value={newChampion.weightClass}
                    onChange={(e) => setNewChampion({...newChampion, weightClass: e.target.value})}
                />
                <input
                    type="text" name="weight" placeholder="Enter Fighter's Weight"
                    value={newChampion.weight}
                    onChange={(e) => setNewChampion({...newChampion, weight: e.target.value})}
                />
                <input
                    type="text" name="height" placeholder="Enter Fighter's Height"
                    value={newChampion.height}
                    onChange={(e) => setNewChampion({...newChampion, height: e.target.value})}
                />
                <input
                    type="text" name="record" placeholder="Enter Fighter's Record"
                    value={newChampion.record}
                    onChange={(e) => setNewChampion({...newChampion, record: e.target.value})}
                />
                <input
                    type="text" name="imageURL" placeholder="Enter Fighter's Image URL"
                    value={newChampion.image}
                    onChange={(e) => setNewChampion({...newChampion, image: e.target.value})}
                />
                <button type="submit">Create New Champion for New Division</button>
            </form>
        </div>
    )
}

export default NewChampionForm