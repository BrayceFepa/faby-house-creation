import React, { useEffect } from 'react';
import "./Profile.scss";
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/reducers/AuthReducer/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove("userInfo");
        dispatch(clearUser());
        navigate("/");
    }
    const user = useSelector((state) => state.user.user); // Get the loading state
    
    useEffect(() => {
        console.log("user", user);
    },[user])

  return (
      <div className='profile_page'>
        <h2>Votre Profile</h2>
          <div className='profile_container'>
               {/* left side */}
          <div className='profile_left'>
              <div className='user_info'>
                      <span>Nom : {user?.savedUser?.firstName} {user?.savedUser?.lastName}</span>
              <span>Numero : {user?.savedUser?.phoneNumber}</span>
              <span>Email : {user?.savedUser?.email}</span>
              </div>
              <div className='options_btn'>
                  <div className='btn' onClick={()=>logout()}>Déconnexion</div>
                  <div className='btn'>Suivre une formation</div>
                  {user?.savedUser?.isAdmin && <Link to={`/adminfhc`}><div className='btn'>Dashboard</div></Link>}
              </div>
          </div>

          {/* right side */}
          <div className='profile_right'>
              <div className='profile_pic'>
                  {user?.savedUser?.firstName[0]}
              </div>
          </div>
         </div>
    </div>
  )
}

export default Profile;