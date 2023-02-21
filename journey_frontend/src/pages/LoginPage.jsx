import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import Cookies from 'js-cookie';

function LoginPage({ authChanged }) {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => { 
        e.preventDefault();
        console.log('credentials: ', auth, email, password);
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { 
                navigate('/');
                authChanged(userCredential.user)
            }).catch((error) => { 
                console.log(error);
                alert('Oops... feil brukernavn eller passord. Prøv igjen')
            })
        })
    }

  return (
    <>
    <form onSubmit={signIn}>
        <h1>Log In</h1><br />
        <label>Email</label><br />
        <input type="email" value={email} onChange = {(e) => setEmail(e.target.value)}></input><br /><br />
        <label>Password</label><br />
        <input type="password" value={password} onChange = {(e) => setPassword(e.target.value)}></input><br /><br />
        <button>LOG IN</button><br /><br /><br />
        <h4>Don´t have an account??</h4>
        <button><Link to='/createuserpage'>Create new account</Link></button>
    </form>
    </>
  )
}

export default LoginPage