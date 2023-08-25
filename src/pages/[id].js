import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Link from "next/link";

function TeamDetail() {
    const [teamDetails, setTeamDetails] = useState(null);
    const [teamPlayers, setTeamPlayers] = useState([]);
    //router is created to access route-related info
    const router = useRouter();
    const { id } = router.query;

    //sends a GET request to get a teams id from the DB
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/Teams/${id}/?format=json`)
                .then((response) => {
                    setTeamDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching team details:", error);
                });

            //when an ID is gotten, there is another call to get all players from the DB
            //it then sorts out the plasyers that belong to the team that was selected
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

    //returns a loading message if one or the other is empty
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
                    <TeamMedia mediaId={teamDetails.media_id} />
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
                        <Link className="col-4" href={`/player/${player.id}`}>{player.first_name} {player.last_name}</Link>
                        <div className="col-4">Position: {player.position}</div>
                        <div className="col-4">Jersey Number: {player.jersey_number}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TeamMedia({ mediaId }) {
    const [assetUrl, setAssetUrl] = useState("");

    //this call takes mediaId as a prop
    //if mediaId is provided it sends a get request
    //if successful it updates the setAssetUrl with the asset_url
    useEffect(() => {
        if (mediaId) {
            axios.get(`http://127.0.0.1:8000/Media/${mediaId}/?format=json`)
                .then((response) => {
                    setAssetUrl(response.data.asset_url);
                })
                .catch((error) => {
                    console.error("Error fetching media:", error);
                });
        }
    }, [mediaId]);

    //if asset_url is not empty it renders an image on the page
    return (
        <div>
            {assetUrl && (
                <div>
                    <img src={assetUrl} alt="Team Asset" />
                </div>
            )}
        </div>
    );
}

export default TeamDetail;
