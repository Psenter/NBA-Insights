import React from "react";
import CustomNavbar from "../components/Navbar";
import Register from "./register";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  return (
      <div>
        <CustomNavbar />
        <Register />
      </div>
  );
}