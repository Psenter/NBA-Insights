import React, { useEffect, useState } from "react";
import axios from "axios";

function Standings() {
    const [teams, setTeams] = useState([]);
    const [easternConference, setEasternConference] = useState([]);
    const [westernConference, setWesternConference] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Teams/?format=json")
            .then((response) => {
                const teamsData = response.data;
                setTeams(teamsData);

                // Separate teams into Eastern and Western conferences
                const eastConferenceTeams = teamsData.filter(team => team.conference_id === 1); // You might need to adjust the conference ID
                const westConferenceTeams = teamsData.filter(team => team.conference_id === 2); // You might need to adjust the conference ID

                setEasternConference(eastConferenceTeams);
                setWesternConference(westConferenceTeams);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="row text-center mt-4">
            <div className="col">
                <h2>Eastern Conference</h2>
                {easternConference.map((item) => (
                    <h3 key={item.id}>{item.team_name} {item.wins} - {item.losses}</h3>
                ))}
            </div>
            <div className="col">
                <h2>Western Conference</h2>
                {westernConference.map((item) => (
                    <h3 key={item.id}>{item.team_name} {item.wins} - {item.losses}</h3>
                ))}
            </div>
        </div>
    );
}

export default Standings;