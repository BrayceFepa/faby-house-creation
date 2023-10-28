import React from 'react';
import "./Profile.scss";
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/reducers/AuthReducer/AuthSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove("userInfo");
        dispatch(clearUser());
        navigate("/");
}

  return (
      <div className='profile_page'>
        <h2>Votre Profile</h2>
          <div className='profile_container'>
               {/* left side */}
          <div className='profile_left'>
              <div className='user_info'>
                  <span>Nom : Marceline Ndongmo</span>
              <span>Numero : 693267462</span>
              <span>Email : marceline@gmail.com</span>
              </div>
              <div className='options_btn'>
                  <div className='btn' onClick={()=>logout()}>Déconnexion</div>
                  <div className='btn'>Suivre une formation</div>
              </div>
          </div>

          {/* right side */}
          <div className='profile_right'>
              <div className='profile_pic'>
                  M
              </div>
          </div>
         </div>
    </div>
  )
}

export default Profile;