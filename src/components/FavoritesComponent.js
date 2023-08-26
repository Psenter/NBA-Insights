import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CustomNavbar from "./Navbar";

function FavoritesDisplay() {
    const [teamFavorites, setTeamFavorites] = useState([]);
    const [playerFavorites, setPlayerFavorites] = useState([]);

    useEffect(() => {
        // Fetch favorite teams
        axios.get("http://127.0.0.1:8000/FavoriteTeams/?format=json")
            .then((response) => {
                console.log("Team Favorites API Response:", response.data); // Log the response
                setTeamFavorites(response.data);
            })
            .catch((error) => {
                console.error("Error fetching team favorites:", error);
            });
    
        // Fetch favorite players
        axios.get("http://127.0.0.1:8000/FavoritePlayers/?format=json")
            .then((response) => {
                console.log("Player Favorites API Response:", response.data); // Log the response
                setPlayerFavorites(response.data);
            })
            .catch((error) => {
                console.error("Error fetching player favorites:", error);
            });
    }, []);
    

    return (
        <div>
            <h2>Favorite Teams</h2>
            <ul>
                {teamFavorites.map((favorite) => (
                    <li key={favorite.id}>
                        {/* Display team details */}
                        {favorite.team_name}
                    </li>
                ))}
            </ul>

            <h2>Favorite Players</h2>
            <ul>
                {playerFavorites.map((favorite) => (
                    <li key={favorite.id}>
                        {/* Display player details */}
                        {favorite.player_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritesDisplay;
