import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideBar from '../SideBar/SideBar';
import "./AdminLayout.scss";

const AdminLayout = () => {
      const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);

     useEffect(() => {
        if (!user) {
            navigate("/");
            //  return null; //Prevent rendering the protected component
        }
    },[])
  return (
      <div className='admin_layout'>
          <div className='sidebar'>
              <SideBar />
          </div>
      <div className='child'>
        <Outlet/>
          </div>
    </div>
  )
}

export default AdminLayout