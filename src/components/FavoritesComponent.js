import React, { useEffect, useState }from "react";
import axios from "axios";
import Link from "next/link";
import CustomNavbar from "./Navbar";

function FavortiesDisplay() {
    const [favorites, setFavorites] = useState([]);
    const [teamFavorites, setTeamFavorites] = useState([]);
    const [playerFavorites, setPlayerFavorites] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Players/?format=json")
            .then((response) => {
                setPlayerFavorites(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

            axios.get("http://127.0.0.1:8000/Teams/?format=json")
            .then((response) => {
                setTeamFavorites(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

            axios.get("http://127.0.0.1:8000/FavoriteTeams/?format=json")
            .then((response) => {
                setFavorites(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
           asdf
        </div>
    )
}

export default FavortiesDisplay