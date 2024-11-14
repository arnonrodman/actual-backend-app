import React from 'react';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/sign-in');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className="dashboard">
            <h1>Welcome to Your Dashboard</h1>
            <p>You are signed in as: {auth.currentUser?.email}</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Dashboard; 