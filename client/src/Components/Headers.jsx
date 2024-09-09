import React, { useEffect } from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Headers = ({ userdata, setUserdata }) => {
    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:5000/login/sucess', { withCredentials: true });
            setUserdata(response.data.user);  // Set the user data
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <nav className="flex justify-between items-center px-8 py-4">
                <div className="left">
                    <h1 className="text-3xl font-bold">FreightX</h1>
                </div>
                <div className="right">
                    <ul className="flex items-center space-x-6">
                        <li>
                            <NavLink to="/home" className="hover:underline">Tender</NavLink>
                        </li>
                        {userdata?.displayName ? (
                            <>
                                <li className="font-bold">{userdata?.displayName}</li>
                                <li>
                                    <NavLink to="/dashboard" className="hover:underline">Home</NavLink>
                                </li>
                                <li onClick={() => window.open('http://localhost:5000/logout', '_self')} className="cursor-pointer">
                                    Logout
                                </li>
                                <li>
                                    <img src={userdata?.image} style={{ width: '50px', borderRadius: '50%' }} alt="" />
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login" className="hover:underline">Login</NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Headers;
