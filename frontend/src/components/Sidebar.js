import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';

const Sidebar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const verifyToken = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
            const response = await API.get("/auth/verifyToken", {
                headers: { Authorization: `Bearer ${token}` },
                });

            if (response.data.success) 
                setIsLoggedIn(true);
            else 
                setIsLoggedIn(false);
            
            } catch (error) {
            navigate('/logout');
            }
        } else {
            setIsLoggedIn(false);
            return;
        }
    };

    verifyToken();
  }, [navigate]);

    return (
        <nav className="bg-grey-100 h-full w-64 p-4 shadow-md">
            <u1>
                <li>
                    <Link to="/" className="text-red-500">Home</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to="/logout" className="text-red-500">Logout</Link>
                        </li>
                        <li>
                            <Link to="/create-challenge" className="text-red-500">Create Challenge</Link>
                        </li>
                        <li>
                            <Link to="/get-challenges" className="text-red-500">Show Challenges</Link>
                        </li>
                        <li>
                            <Link to="/challenges/getAvailableChallenges" className="text-red-500">Join Challenges</Link>
                        </li>
                        <li>
                            <Link to="/challenges/getCompletedChallenges" className="text-red-500">Completed Challenges</Link>
                        </li>
                        <li>
                            <Link to="/challenges/getJoinedChallenges" className="text-red-500">Joined Challenges</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/register" className="text-red-500">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-red-500">Login</Link>
                        </li>
                    </>
                )}
            </u1>
        </nav>
    );
};

export default Sidebar;