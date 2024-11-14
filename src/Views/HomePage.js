import React, { useState } from 'react';
import './HomePage.css';
import { auth, signInWithPopup, googleProvider } from '../firebase';

const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);
    const [user, setUser] = useState(null);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
            console.log("Logged in user:", result.user);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="cafe-homepage">
            <h1>Welcome to Webcafe AI</h1>
            <p>Your go-to solution for AI-driven web applications.</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>
            
            <button className="cafe-button login-button" onClick={handleGoogleLogin}>
                {user ? `Welcome, ${user.displayName}` : 'Login with Google'}
            </button>
        </div>
    );
};

export default HomePage;