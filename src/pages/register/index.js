import React, { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../../context/GlobalState";
import jwtDecode from "jwt-decode";
import CustomNavbar from "src/components/Navbar.js";
import Link from "next/link";

function Register() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await AuthService.register(user);
      const loginResp = await AuthService.login(
        user.email,
        user.password,
        user.username
      );
      if (loginResp.access) {
        const data = jwtDecode(loginResp.access);
        await dispatch({
          type: "SET_USER",
          payload: data,
        });
        router.push("/");
      } else {
        console.log("Login after registration failed");
        dispatch({ type: "LOGOUT_USER" });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  return (
    <div className="w-screen h-screen">
      <CustomNavbar />
      <div className="text-center">
        <h1 className="mb-3">Register</h1>
        <div className="flex">
          <form
            className="mx-auto border-2 bg-mtgray"
            onSubmit={handleRegister}
          >
            <div className="flex mb-3">
              <label htmlFor="firstName">First Name:</label>
              <br></br>
              <input
                className="border"
                type="text"
                id="firstName"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <label htmlFor="lastName">Last Name:</label>
              <br></br>
              <input
                className="border"
                type="text"
                id="lastName"
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <label htmlFor="email">Email:</label>
              <br></br>
              <input
                className="border"
                type="text"
                id="email"
                required
                onChange={(e) => {
                  let olduser = user;
                  olduser.email = e.target.value;
                  olduser.username = e.target.value;
                  setUser(olduser);
                }}
              />
            </div>
            <div className="flex mb-3">
              <label htmlFor="password">Password:</label>
              <br></br>
              <input
                className="border"
                type="password"
                id="password"
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <label htmlFor="passwordConf">Confirm Password:</label>
              <br></br>
              <input
                className="border"
                type="password"
                id="passwordConf"
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <input
                type="submit"
                value="Register!"
                disabled={
                  user.password &&
                  user.password.length >= 8 &&
                  user.password === user.passwordConf &&
                  user.firstName &&
                  user.lastName &&
                  user.email
                    ? false
                    : true
                }
              />
            </div>
          </form>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
