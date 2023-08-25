import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState(null);
    const [playerTeam, setPlayerTeam] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            //GETS all details about a player that is clicked on
            axios.get(`http://127.0.0.1:8000/Players/${id}/?format=json`)
                .then((response) => {
                    setPlayerDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching player details:", error);
                });
            
            //GETS all details of all teams
            axios.get(`http://127.0.0.1:8000/Teams/`)
                .then((response) => {
                    // find the team associated with the player through the player ID, stores data in playerTeam
                    const teamForPlayer = response.data.find(team => team.players.includes(parseInt(id, 10)));
                    setPlayerTeam(teamForPlayer);
                })
                .catch((error) => {
                    console.error("Error fetching team details", error);
                })
        }
    }, [id]);

    //returns a loading message if one or the other is empty
    if (!playerDetails || !playerTeam) {
        return <div>Loading...</div>;
    }

    //Displays all the information about a player
    return (
        <div className="container">
            <div className="mt-5 col text-end">
                <button type="button" onClick={() => router.back()}>X</button>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col text-center">{playerDetails.first_name} {playerDetails.last_name}</div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">Jersey Number: {playerDetails.jersey_number}</div>
                <div className="col-4">Position: {playerDetails.position}</div>
                <Link className="col-4" href={`/[id]`} as={`/${playerTeam.id}`}>Team: {playerTeam.team_name}</Link>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">Weight: {playerDetails.weight}lbs.</div>
                <div className="col-4">Height {playerDetails.height}in.</div>
                <div className="col-4">PPG: {playerDetails.ppg}</div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">RPG: {playerDetails.rpg}</div>
                <div className="col-4">APG: {playerDetails.apg}</div>
                <div className="col-4">SPG: {playerDetails.spg}</div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">BPG: {playerDetails.bpg}</div>
                <div className="col-4">Field goal percentage: {playerDetails.field_goal_percent}</div>
                <div className="col-4">Three pointer percentage: {playerDetails.three_pointer_percent}</div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">Free throw percentage: {playerDetails.free_throw_percent}</div>
                <div className="col-4">Turnovers: {playerDetails.turnovers}</div>
                <div className="col-4">Minutes: {playerDetails.minutes_played}</div>
            </div>
        </div>
    );
}

export default PlayerDetail;
