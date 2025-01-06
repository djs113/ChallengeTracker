import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Sidebar = () => {

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <nav className="bg-grey-100 h-full w-64 p-4 shadow-md">
            <u1>
                <li>
                    <Link to="/" className="text-blue-500">Home</Link>
                </li>
                {isLoggedIn ? (
                    <>
                        <li>
                            <Link to="/logout" className="text-blue-500">Logout</Link>
                        </li>
                        <li>
                            <Link to="/create-challenge" className="text-blue-500">Create Challenge</Link>
                        </li>
                        <li>
                            <Link to="/get-challenges" className="text-blue-500">Show Challenges</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/register" className="text-blue-500">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="text-blue-500">Login</Link>
                        </li>
                    </>
                )}
            </u1>
        </nav>
    );
};

export default Sidebar;