import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);
    // useState hook gives us two things - a variable to manage the state and a function to change what we want to manage. 'team' is a variable where 'setTeam' is a function

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {
        // const newTeam = team - 1;
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}