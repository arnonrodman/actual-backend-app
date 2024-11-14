import React, { useState } from 'react';
import './HomePage.css';
import { auth, signInWithPopup, googleProvider } from '../firebase';
import { signOut } from 'firebase/auth';

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

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            console.log("User logged out");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="cafe-homepage">
            <h1>Welcome to Webcafe AI</h1>
            <p>Your go-to solution for AI-driven web applications.</p>
            <div className={`cafe-color-box ${isBlue ? 'cafe-blue' : 'cafe-red'}`}></div>
            <button className="cafe-button" onClick={toggleColor}>Change Color</button>
            
            {user ? (
                <div>
                    <p>Welcome, {user.displayName}</p>
                    <button className="cafe-button logout-button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <button className="cafe-button login-button" onClick={handleGoogleLogin}>
                    Login with Google
                </button>
            )}
        </div>
    );
};

export default HomePage;