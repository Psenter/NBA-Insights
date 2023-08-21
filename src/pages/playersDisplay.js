import Link from "next/link";
import CustomNavbar from "../components/Navbar";
import PlayersDisplay from "../components/PlayersDisplay";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
    <div>
      <CustomNavbar/>
      <PlayersDisplay/>
    </div>
  );
}