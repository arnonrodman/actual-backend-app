import React from 'react';
import { auth, signInWithPopup, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignPage.css';

const SignPage = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <div className="sign-page">
            <h1>Sign In</h1>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default SignPage; 