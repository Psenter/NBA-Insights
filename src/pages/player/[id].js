import React from "react";
import PlayerDetail from "../../components/PlayerDetail";
import CustomNavbar from "../../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PlayerPage() {
  return (
    <div>
      <CustomNavbar />
      <PlayerDetail />
    </div>
  );
}
