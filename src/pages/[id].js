import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Link from "next/link";
import CustomNavbar from "../components/Navbar";
import { useGlobalState } from "../context/GlobalState";

function TeamDetail() {
    const [teamDetails, setTeamDetails] = useState(null);
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [addingToFavorites, setAddingToFavorites] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    const { state, dispatch } = useGlobalState();

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

    useEffect(() => {
        console.log("User Data:", state.user);
    }, [state.user]);

    const handleAddFavorites = async () => {
        if (addingToFavorites) {
            return; // Prevent multiple clicks during request processing
        }
    
        setAddingToFavorites(true);
    
        const favoriteData = {
            user_id: state.user.user_id,
            team_id: id,
        };
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/FavoriteTeams/', favoriteData);
            console.log("Response:", response);
        
            if (response.status === 201) { // Check for status 201 (Created)
                console.log("Team added to favorites:", response.data);
                // You might want to update UI or do something else on success
            } else {
                console.error("Failed to add team to favorites:", response.data.error);
                // Handle error scenario, update UI, show error message, etc.
            }
        } catch (error) {
            console.error("Error adding team to favorites:", error.response);
            // Handle other error scenarios, update UI, show error message, etc.
        }               
    
        setAddingToFavorites(false);
    };

    if (!teamDetails || !teamPlayers.length) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <CustomNavbar />
            <div className="row">
                <div className="col text-end">
                    <button type="button" onClick={() => router.back()}>X</button>
                </div>
                <div>
                    {state.user ? (
                        <button onClick={handleAddFavorites} disabled={addingToFavorites}>
                            {addingToFavorites ? "Adding..." : "Add to favorites"}
                        </button>
                    ) : null}
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
            {/* Rest of the JSX structure */}
        </div>
    );
}

function TeamMedia({ mediaId }) {
    const [assetUrl, setAssetUrl] = useState("");

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