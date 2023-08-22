import React from "react";
import Link from "next/link";

function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="Username">Username:</label>
                        <input type="text" id="Username" name="Username"/>
                    </div>
                </div>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="email">E-mail:</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                </div>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname"/>
                    </div>
                </div>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"/>
                    </div>
                </div>
                <div className="row mb-4 ms-4">
                    <div className="col-6">
                        <label for="password">Password:</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                </div>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="passcode">Check Password:</label>
                        <input type="text" id="passcode" name="passcode"/>
                    </div>
                </div>
            </form>
            <div className="col ms-3 mb-3">
                <button>Register</button>
            </div>
            <div className="col ms-3">
                <Link href={`/loginPage`}>Login</Link>
            </div>
        </div>
    );
}

export default Register;