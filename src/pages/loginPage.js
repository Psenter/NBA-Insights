import React from "react";
import CustomNavbar from "../components/Navbar";
import Login from "../components/loginComponent";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  return (
    <div>
      <CustomNavbar />
      <Login />
    </div>
  );
}