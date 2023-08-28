import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function FavoritesComponent() {
  const [teamFavorites, setTeamFavorites] = useState([]);
  const [playerFavorites, setPlayerFavorites] = useState([]);
  const [teamNameMap, setTeamNameMap] = useState({});
  const [playerNameMap, setPlayerNameMap] = useState({});

  useEffect(() => {
    // Fetch favorite teams
    axios
      .get("http://127.0.0.1:8000/FavoriteTeams/?format=json")
      .then((response) => {
        setTeamFavorites(response.data);
        const teamMap = {};
        const teamPromises = response.data.map((favorite) =>
          axios
            .get(`http://127.0.0.1:8000/Teams/${favorite.team_id}/?format=json`)
            .then((teamResponse) => {
              teamMap[favorite.team_id] = teamResponse.data.team_name;
            })
            .catch((error) => {
              console.error("Error fetching team details:", error);
            })
        );

        Promise.all(teamPromises).then(() => {
          setTeamNameMap(teamMap);
        });
      })
      .catch((error) => {
        console.error("Error fetching favorite teams:", error);
      });

    // Fetch favorite players
    axios
      .get("http://127.0.0.1:8000/FavoritePlayers/?format=json")
      .then((response) => {
        setPlayerFavorites(response.data);
        const playerMap = {};
        const playerPromises = response.data.map((favorite) =>
          axios
            .get(
              `http://127.0.0.1:8000/Players/${favorite.player_id}/?format=json`
            )
            .then((playerResponse) => {
              playerMap[
                favorite.player_id
              ] = `${playerResponse.data.first_name} ${playerResponse.data.last_name}`;
            })
            .catch((error) => {
              console.error("Error fetching player details:", error);
            })
        );

        Promise.all(playerPromises).then(() => {
          setPlayerNameMap(playerMap);
        });
      })
      .catch((error) => {
        console.error("Error fetching favorite players:", error);
      });
  }, []);

  const handleDeleteTeam = (teamId) => {
    axios
      .delete(`http://127.0.0.1:8000/FavoriteTeams/${teamId}/`)
      .then(() => {
        setTeamFavorites((prevFavorites) =>
          prevFavorites.filter((team) => team.id !== teamId)
        );
      })
      .catch((error) => {
        console.error("Error deleting favorite team:", error);
      });
  };

  const handleDeletePlayer = (playerId) => {
    axios
      .delete(`http://127.0.0.1:8000/FavoritePlayers/${playerId}/`)
      .then(() => {
        setPlayerFavorites((prevFavorites) =>
          prevFavorites.filter((player) => player.id !== playerId)
        );
      })
      .catch((error) => {
        console.error("Error deleting favorite player:", error);
      });
  };

  return (
    <div>
      <h2 className="text-center mb-5 display-1">Favorite Teams:</h2>
      <ul>
        {teamFavorites.map((team) => (
          <div className="row ms-5 me-5 mb-4">
            <div className="col-2"></div>
            <li className="display-6 col-6" key={team.id}>
              <Link className="link-gone" href={`/[id]`} as={`/${team.id}`}>
                {teamNameMap[team.team_id]}
              </Link>
            </li>
            <button
              className="col-2 float-end text-center btn btn-danger"
              onClick={() => handleDeleteTeam(team.id)}
            >
              Delete
            </button>
            <div className="col-2"></div>
          </div>
        ))}
      </ul>

      <h2 className="text-center mb-5 display-1">Favorite Players:</h2>
      <ul>
        {playerFavorites.map((player) => (
          <div className="row me-5 ms-5 mb-4">
            <div className="col-2"></div>
            <li className="display-6 col-6" key={player.id}>
              <Link className="link-gone" href={`/player/${player.player_id}`}>
                {playerNameMap[player.player_id]}
              </Link>
            </li>
            <button
              className="float-end text-center col-2 btn btn-danger"
              onClick={() => handleDeletePlayer(player.id)}
            >
              Delete
            </button>
            <div className="col-2"></div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesComponent;
