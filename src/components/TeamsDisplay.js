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
        <div className="row justify-content-center text-center">
            <div className="col-3 display-6">
                {teams.map((item) => (
                    <Link key={item.id} href={`/[id]`} as={`/${item.id}`}>
                        <div className="mb-3">
                            {item.team_name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TeamsDisplay;
