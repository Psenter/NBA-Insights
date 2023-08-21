import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

function TeamsDisplay() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/Teams/?format=json")
            .then((response) => {
                setTeams(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="row justify-content-center text-center mb-3">
            <div className="col-6">
                {teams.map((item) => (
                    <Link key={item.id} href={`/[id]`} as={`/${item.id}`}>
                        <div>
                            {item.team_name}
                        </div>
                    </Link>
                ))}
            </div>
            <div className="col-6">
                {teams.map((item) => (
                    <h2 key={item.id}>{item.wins} - {item.losses}</h2>
                ))}
            </div>
        </div>
    );
}

export default TeamsDisplay;
