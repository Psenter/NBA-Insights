import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function PlayerDetail() {
    const [playerDetails, setPlayerDetails] = useState(null);
    const router = useRouter();
    //gets the id from the router query
    const { id } = router.query;

    //makes an axios call, checking for a valid id
    //if there is a valid id then it fetches all that players data
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/Players/${id}/?format=json`)
                .then((response) => {
                    setPlayerDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching player details:", error);
                });
        }
    }, [id]);

    //checks if playerDetails is still null
    //if it is it just displays a constant loading message
    if (!playerDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="mt-5 col text-end">
                    <button type="button" onClick={() => router.back()}>X</button>
                </div>
                <div className="col-12 text-center mt-5">
                    <h1>{playerDetails.first_name} {playerDetails.last_name}</h1>
                </div>
            </div>
            <div className="row text-center mt-5 mb-5 display-6">
                <div className="col-4">PPG: {playerDetails.ppg}</div>
                <div className="col-4">RPG: {playerDetails.rpg}</div>
                <div className="col-4">APG: {playerDetails.apg}</div>
                <div className="col-4">Weight: {playerDetails.weight}lbs.</div>
            </div>
        </div>
    );
}

export default PlayerDetail;
