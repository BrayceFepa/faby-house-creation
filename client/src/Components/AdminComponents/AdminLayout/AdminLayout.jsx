import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import "./AdminLayout.scss";

const AdminLayout = ({ children }) => {
      const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

     useEffect(() => {
        if (!user.savedUser.isAdmin) {
            navigate("/");
             return null; //Prevent rendering the protected component
        }
    },[])
  return (
      <div className='admin_layout'>
          <div className='sidebar'>
              <SideBar />
          </div>
          <div className='child'>
          {children}
          </div>
    </div>
  )
}

export default AdminLayout