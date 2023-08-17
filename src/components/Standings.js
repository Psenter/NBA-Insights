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

                const eastConferenceTeams = teamsData.filter(team => team.conference_id === 1);
                const westConferenceTeams = teamsData.filter(team => team.conference_id === 2);

                eastConferenceTeams.sort((a, b) => a.wins - b.wins);
                westConferenceTeams.sort((a, b) => a.wins - b.wins);

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
                    <h3 key={item.id}>{item.team_name} {item.losses} - {item.wins}</h3>
                ))}
            </div>
            <div className="col">
                <h2>Western Conference</h2>
                {westernConference.map((item) => (
                    <h3 key={item.id}>{item.team_name} {item.losses} - {item.wins}</h3>
                ))}
            </div>
        </div>
    );
}

export default Standings;