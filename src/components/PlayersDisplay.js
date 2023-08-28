import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function PlayersDisplay() {
  const [players, setPlayers] = useState([]);

  //makes a call to get all of my players from the database
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Players/?format=json")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const uniqueLetters = [...new Set(players.map((item) => item.last_name[0]))];

  return (
    <div>
      {uniqueLetters.sort().map((letter) => (
        <div key={letter} className="mb-5">
          <ul className="ms-5 display-1">{letter}</ul>
          <div className="row">
            {players
              .filter((item) => item.last_name[0] === letter)
              .sort((a, b) => a.last_name.localeCompare(b.last_name))
              .map((item) => (
                <div key={item.id} className="col-5 ps-5">
                  <Link className="link-gone" href={`/player/${item.id}`}>
                    <li className="mb-3">
                      {item.first_name} {item.last_name}
                    </li>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayersDisplay;
