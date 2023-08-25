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
            <div className="col-6">
                {teams.map((team) => (
                    <div key={team.id} className="mb-4">
                        <Link href={`/[id]`} as={`/${team.id}`}>
                                <h2>{team.team_name}</h2>
                        </Link>
                        <TeamMedia mediaId={team.media_id} />
                    </div>
                ))}
            </div>
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

export default TeamsDisplay;
