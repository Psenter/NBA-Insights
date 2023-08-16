import Link from "next/link";
import CustomNavbar from "../components/Navbar";
import TeamsDisplay from "../components/TeamsDisplay";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return <div>
    <CustomNavbar/>
    <TeamsDisplay/>
  </div>
}