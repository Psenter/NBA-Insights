import React, { useEffect, useState } from "react";
import axios from "axios";

function PlayersDisplay() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Players/?format=json")
            .then((response) => {
                setPlayers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="row">
            {players.map((item) => (
                <div key={item.id}>
                    <div>{item.first_name}</div>
                    <div>{item.last_name}</div>
                    <div>#{item.jersey_number}</div>
                    <div>{item.position}</div>
                    <div>{item.height}in.</div>
                    <div>{item.weight}lbs.</div>
                </div>
            ))}
        </div>
    );
}

export default PlayersDisplay;
