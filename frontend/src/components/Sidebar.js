import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="bg-grey-100 h-full w-64 p-4 shadow-md">
            <u1>
                <li>
                    <Link to="/" className="text-blue-500">Home</Link>
                </li>
                <li>
                    <Link to="/challenges" className="text-blue-500">Challenges</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
                </li>
            </u1>
        </nav>
    );
};

export default Sidebar;