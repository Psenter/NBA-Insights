import React from "react";
import Link from "next/link";

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="row mb-4 ms-3">
                    <div className="col-6">
                        <label for="Username">Username/Email:</label>
                        <input type="text" id="Username" name="Username"/>
                    </div>
                </div>
                <div className="row mb-4 ms-5 ps-3">
                    <div className="col-6">
                        <label for="password">Password:</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                </div>
            </form>
            <div className="col ms-3 mb-3">
                <button>Login</button>
            </div>
            <div className="col ms-3">
                <Link href={`/registerPage`}>Register</Link>
            </div>
        </div>
    );
}

export default Login;