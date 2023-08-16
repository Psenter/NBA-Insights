import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header() {
  return (
    <div className="text-center">
      <img src="/fourlogo.PNG" alt="Logo for the site"></img>
    </div>
  );
}

export default Header;