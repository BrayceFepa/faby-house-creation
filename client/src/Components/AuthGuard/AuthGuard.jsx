import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (!user) {
            navigate("/auth/login")
        };
    }, [user])

    if (!user) {
        // redirect to the login page
        navigate("/auth/login");
        console.log("not loged in")
        return null; //Prevent rendering the protected component
    }

    // Render the protected component
    return children;
}

export default AuthGuard