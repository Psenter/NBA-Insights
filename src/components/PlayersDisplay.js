import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

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
                <div className="col-3 text-center" key={item.id}>
                    <Link href={`/player/${item.id}`}>
                            <div className="mb-2">{item.first_name} {item.last_name}</div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PlayersDisplay;
