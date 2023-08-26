import Link from "next/link";
import FavoritesComponent from "../components/FavoritesComponent"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useGlobalState } from "../context/GlobalState";
import CustomNavbar from "../components/Navbar";

export default function Page() {
  const {state, dispatch} = useGlobalState();
  useEffect(() => {
    // Function to retrieve user data from local storage
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = jwtDecode(userData);
        console.log('User data:', user);
        dispatch({
            type: 'SET_USER',
            payload: user
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  return (
    <div>
        <CustomNavbar />
        <FavoritesComponent />
    </div>
  )
}