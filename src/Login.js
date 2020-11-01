import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css';

function Login() {
    const signIn = () => {
        //do google login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img 
                 src='https://cdn.dribbble.com/users/4930498/screenshots/10585845/chatroom.jpg'
                 alt=''
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
