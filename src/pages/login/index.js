import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState';
import authService from '../../services/auth.service';
import jwtDecode from 'jwt-decode';
import Header from '../../components/Header';

function Page() {
    const router = useRouter();

    const [ state, dispatch ] = useGlobalState();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        // console.log(email.current.value , password.current.value , "HERE")
        authService
            .login(email, password)
            .then(async (resp) => {
                console.log(resp)
                let data = jwtDecode(resp.access)
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                })
                router.push('/dashboard')
            });
    }


    return (
        <div>
            <Header />
            <div className='flex'>
                <form
                    onSubmit={handleLogin}
                    className='mx-auto my-auto border-2 bg-mtgray'
                >
                    <div className='flex justify-between m-2 items-center space-x-2'>
                        <label htmlFor="email">Email:</label>
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
                        <label htmlFor="pass">Password</label>
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
                            className="bg-mtpurple text-white py-2 px-4 rounded-lg mx-auto my-2 font-bold disabled:opacity-60"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page