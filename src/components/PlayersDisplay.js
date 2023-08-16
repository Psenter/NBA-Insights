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
                <div className="text-center" key={item.id}>
                    <div className="mb-2">{item.first_name} {item.last_name} #{item.jersey_number} {item.position} {item.height}in. {item.weight}lbs.</div>
                </div>
            ))}
        </div>
    );
}

export default PlayersDisplay;
