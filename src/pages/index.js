import Link from "next/link";
import Header from "../components/Header";
import CustomNavbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  return (
      <div>
        <Link className="mt-3 p-3 col-1 float-end me-3" href={`/loginPage`}>Login</Link>
        <Header/>
        <CustomNavbar/>
      </div>
  );
}