import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

function Standings() {
  const [teams, setTeams] = useState([]);
  const [easternConference, setEasternConference] = useState([]);
  const [westernConference, setWesternConference] = useState([]);

  //gets my teams data from the DB
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Teams/?format=json")
      .then((response) => {
        const teamsData = response.data;
        setTeams(teamsData);
        
        //checks if the team is located in the east or west based on the ID it has
        const eastConferenceTeams = teamsData.filter(
          (team) => team.conference_id === 1
        );
        const westConferenceTeams = teamsData.filter(
          (team) => team.conference_id === 2
        );

        //sorts the teams by wins in descending order
        eastConferenceTeams.sort((a, b) => b.wins - a.wins);
        westConferenceTeams.sort((a, b) => b.wins - a.wins);

        //sorted values are set as values for the 2 vars below
        setEasternConference(eastConferenceTeams);
        setWesternConference(westConferenceTeams);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //returns the standings
  return (
    <div className="row text-center mt-4">
      <div className="col">
        <h2>Eastern Conference</h2>
        {easternConference.map((item) => (
          <h3 key={item.id}>
            {/* the key adds an identifier to each element as they are mapped out */}
            {/* the href makes the URL equal to the [id].js file */}
            {/* the 'as' attribute sets the actual link that will be displayed in the browser */}
            <Link key={item.id} href={`/[id]`} as={`/${item.id}`}>
              <div className="mb-3">{item.team_name}</div>
            </Link>
            {item.wins} - {item.losses}
          </h3>
        ))}
      </div>
      <div className="col">
        <h2>Western Conference</h2>
        {westernConference.map((item) => (
          <h3 key={item.id}>
            <Link key={item.id} href={`/[id]`} as={`/${item.id}`}>
              <div className="mb-3">{item.team_name}</div>
            </Link>
            {item.wins} - {item.losses}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Standings;
