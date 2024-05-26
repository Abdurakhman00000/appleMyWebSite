import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { useAuth } from '../../context/AuthContext';
import { Alert } from '@mui/material';

const Register = () => {

    const {register, signInWithGoogle} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    async function signUp() {
        try {
            await register(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div className="main-register">
                {
                    error && <Alert severity='error'>{error}</Alert>
                }

                <h1>Sign Up</h1>
                <div className="main-reg-inputs">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email'/>
                    <input type="text" placeholder='UserName'/>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='password'/>
                </div>

                <div className="main-reg-buttons">
                    <button onClick={signUp}>Sign Up</button>
                    <button onClick={() => signInWithGoogle()} className='btn-mui'>Sign Up with <GoogleIcon/> </button>
                </div>
            </div>
        </>
    );
};

export default Register;