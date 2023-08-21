import Link from "next/link";
import CustomNavbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Standings from "../components/Standings";

export default function Page() {
  return (
    <div>
      <CustomNavbar/>
      <Standings/>
    </div>
  );
}