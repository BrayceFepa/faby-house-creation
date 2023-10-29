import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminGuard = ({ children }) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (!user.isAdmin) {
            navigate("/");
             return null; //Prevent rendering the protected component
        }
    },[])
  return children;
}

export default AdminGuard