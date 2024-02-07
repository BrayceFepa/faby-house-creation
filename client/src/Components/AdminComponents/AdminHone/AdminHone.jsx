import React from 'react';
import "./AdminHone.scss";
import { Link } from 'react-router-dom';

const AdminHone = () => {
  return (
    <div className='admin_home'>
      <h2>Products</h2>
      {/* Add your content related to products here */}
      <Link to={`/`}>
        <div  style={{ background:"#000", color:"#fff", borderRadius:"30px", padding:"10px" }}>
        <h3 style={{ color:"#fff" }}>Back To Home</h3>
      </div>
      </Link>
    </div>
  );
}

export default AdminHone;