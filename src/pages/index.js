import Link from "next/link";
import Header from "../components/Header";
import CustomNavbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
      <div>
        <Header/>
        <CustomNavbar/>
      </div>
  );
}