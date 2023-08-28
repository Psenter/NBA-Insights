import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGlobalState } from "../context/GlobalState";

function GameForm() {
  const [teams, setTeams] = useState([]);
  const [selectedTeamA, setSelectedTeamA] = useState("");
  const [selectedTeamB, setSelectedTeamB] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("");
  const router = useRouter();
  const { state } = useGlobalState();
  const isStaffUser = state.user ? state.user.user_id : null;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Teams/?format=json")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/games/", {
        team_id_a: selectedTeamA,
        team_id_b: selectedTeamB,
      });

      if (response.status === 201) {
        setSubmissionStatus("Game created successfully.");

        axios
          .get("http://127.0.0.1:8000/Teams/?format=json")
          .then((response) => {
            setTeams(response.data);
          })
          .catch((error) => {
            console.error("Error fetching teams:", error);
          });
      } else {
        setSubmissionStatus("Failed to create game.");
      }
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <div className="container-fluid text-center">
      {isStaffUser === 5 && (
        <div>
          <h1>Create a New Game</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="teamA">Team A:</label>
              <select
                id="teamA"
                value={selectedTeamA}
                onChange={(e) => setSelectedTeamA(e.target.value)}
              >
                <option value="">Select Team A</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.team_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="teamB">Team B:</label>
              <select
                id="teamB"
                value={selectedTeamB}
                onChange={(e) => setSelectedTeamB(e.target.value)}
              >
                <option value="">Select Team B</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.team_name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => router.reload()}
              type="submit"
            >
              Create Game
            </button>
          </form>
          <p>{submissionStatus}</p>
        </div>
      )}
      <GameList />
    </div>
  );
}

function GameList() {
  const [games, setGames] = useState([]);
  const [gameTeams, setGameTeams] = useState([]);
  const [media, setMedia] = useState([]);
  const { state, dispatch } = useGlobalState();
  const isStaffUser = state.user ? state.user.user_id : null;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Games/?format=json")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });

    axios
      .get("http://127.0.0.1:8000/Teams/?format=json")
      .then((response) => {
        setGameTeams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teams:", error);
      });

    axios
      .get("http://127.0.0.1:8000/Media/?format=json")
      .then((response) => {
        setMedia(response.data);
      })
      .catch((error) => {
        console.error("Error fetching media:", error);
      });
  }, []);

  const deleteGame = async (gameId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/Games/${gameId}/`
      );

      if (response.status === 204) {
        setGames(games.filter((game) => game.id !== gameId));
      } else {
        console.error("Failed to delete game.");
      }
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  const getTeamDataById = (teamId) => {
    const team = gameTeams.find((team) => team.id === teamId);
    return team;
  };

  const getMediaUrlById = (mediaId) => {
    const mediaItem = media.find((item) => item.id === mediaId);
    return mediaItem ? mediaItem.asset_url : null;
  };

  return (
    <div className="text-center mb-5">
      <h2>Games List</h2>
      {games.map((game) => {
        const teamA = getTeamDataById(game.team_id_a);
        const teamB = getTeamDataById(game.team_id_b);
        const mediaUrlA = teamA ? getMediaUrlById(teamA.media_id) : null;
        const mediaUrlB = teamB ? getMediaUrlById(teamB.media_id) : null;

        return (
          <div
            className="row justify-content-center display-6"
            key={game.id}
          >
            <div className="col-4 mt-5">
              {mediaUrlA && (
                <>
                  <div>
                    <img src={mediaUrlA} alt={teamA.team_name} />
                  </div>
                  <div>{teamA.team_name}</div>
                </>
              )}
            </div>
            <div className="col-1 my-auto">vs.</div>
            <div className="col-4 mt-5">
              {mediaUrlB && (
                <>
                  <div>
                    <img src={mediaUrlB} alt={teamB.team_name} />
                  </div>
                  <div>{teamB.team_name}</div>
                </>
              )}
            </div>
            {isStaffUser === 5 && (
              <div>
                <button
                  onClick={() => deleteGame(game.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GameForm;
