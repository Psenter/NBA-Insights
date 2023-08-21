import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

function TeamDetail() {
    const [teamDetails, setTeamDetails] = useState(null);
    const [teamPlayers, setTeamPlayers] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/Teams/${id}/?format=json`)
                .then((response) => {
                    setTeamDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching team details:", error);
                });

            axios.get(`http://127.0.0.1:8000/Players/?format=json`)
                .then((response) => {
                    const filteredPlayers = response.data.filter(player =>
                        teamDetails.players.includes(player.id)
                    );
                    setTeamPlayers(filteredPlayers);
                })
                .catch((error) => {
                    console.error("Error fetching players:", error);
                });
        }
    }, [id, teamDetails]);

    if (!teamDetails || !teamPlayers.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="mt-5 col text-end">
                    <button type="button" onClick={() => router.back()}>X</button>
                </div>
                <div className="col-12 text-center mt-5">
                    <h1>{teamDetails.team_name}</h1>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-6">Wins: {teamDetails.wins}</div>
                <div className="col-6">Losses: {teamDetails.losses}</div>
            </div>
            <h2 className="text-center mb-3">Players:</h2>
            <div>
                {teamPlayers.map((player) => (
                    <div className="row text-center display-6 mb-4" key={player.id}>
                        <div className="col-4">{player.first_name} {player.last_name}</div>
                        <div className="col-4">Position: {player.position}</div>
                        <div className="col-4">Jersey Number: {player.jersey_number}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamDetail;
