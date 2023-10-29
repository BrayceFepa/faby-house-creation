import React , { useEffect, useState } from 'react';
import "./Login.scss";
import "../Signup/Signup.scss";
import Images from '../../../Constants/Images';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { loginAction, signupAction } from '../../../redux/reducers/AuthReducer/AuthActions';
import { useSelector } from "react-redux";
import {Circles} from "react-loader-spinner";
import { selectLoading } from '../../../redux/reducers/AuthReducer/AuthSlice';


const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading); // Get the loading state
  const user = useSelector((state)=>state.user.user); // Get the loading state
  const error = useSelector((state)=>state.user.error); // Get the loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour traiter les données du formulaire
    console.log("formData",formData);
    dispatch(loginAction(formData));
    setFormData({
      email: '',
      password: '',
    });
  };
  

  return (
       <div className='form-container'>
      <div className='header'>
         <div className='logo'>
          <img src={Images.logo} alt="faby house creation" />
        </div>
        <div className="welcome-text">
          <span>Nous sommes heureux de vous revoir sur Faby House Creation.</span> <br />
          <span>Connectez-vous {"à"} votre compte.</span>
        </div>
       
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="input-box">
          <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
        </div>
      
        <div className="input-box">
          <input
        type={showPassword ? "text":"password"}
        name="password"
        placeholder="Mot de passe"
        value={formData.password}
        onChange={handleChange}
          />
          <div className="eye" onClick={()=>setShowPassword(!showPassword)}>
            {
              !showPassword ?<AiFillEye /> :   <AiFillEyeInvisible/>
            } 
           
        
          </div>
      </div>
        <div className="input-box">
          <button type="submit">
            Connexion
            {loading && <Circles height="15"
  width="15"
  color="#fff"
  ariaLabel="circles-loading"
  wrapperClass=""
  visible={loading}/>}
          </button>
     </div>
    </form>
    </div>
  )
}

export default Login