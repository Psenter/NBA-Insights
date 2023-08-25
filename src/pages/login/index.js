import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';

function Page() {
    const router = useRouter();
    const { state, dispatch } = useGlobalState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const username = email;
        authService
            .login(email, password, username)
            .then(async (resp) => {
                console.log(resp);
                if (resp.access) {
                    let data = jwtDecode(resp.access);
                    await dispatch({
                        type: 'SET_USER',
                        payload: data,
                    });
                    router.push('/');
                } else {
                    console.log('Login failed');
                    dispatch({ type: 'LOGOUT_USER' });
                }
            });
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
                <div className='flex'>
                    <form
                        onSubmit={handleLogin}
                        className='mx-auto my-auto border-2 bg-mtgray'
                    >
                        <div className='flex justify-between m-2 items-center space-x-2'>
                            <label htmlFor="email">Email:</label><br></br>
                            <input
                                className='border'
                                type="text"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='flex justify-between m-2 items-center space-x-2'>
                            <label htmlFor="pass">Password:</label><br></br>
                            <input
                                className='border'
                                type="password"
                                id="pass"
                                name="password"
                                minLength="8"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex'>
                            <input
                                type="submit"
                                value="Sign in"
                            />
                        </div>
                    </form>
                    <Link href="/register">
                        Register Here
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Page