import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

function TeamDetail() {
    const [teamDetails, setTeamDetails] = useState(null);
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
        }
    }, [id]);

    if (!teamDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h1>{teamDetails.team_name}</h1>
            <p>Wins: {teamDetails.wins}</p>
            <p>Losses: {teamDetails.losses}</p>
            <button type="button" onClick={() => router.back()}>X</button>
        </div>
    );
}

export default TeamDetail;
