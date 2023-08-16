import React, { useEffect, useState } from "react";
import axios from "axios";

function TeamsDisplay() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Teams/?format=json")
            .then((response) => {
                setTeams(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="row">
            {teams.map((item) => (
                <h2 key={item.id}>{item.team_name}</h2>
            ))}
        </div>
    );
}

export default TeamsDisplay;