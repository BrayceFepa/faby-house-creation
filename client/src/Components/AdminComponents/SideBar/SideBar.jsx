import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {
 return (
    <div className="sidebar">
      <div className="logo">Admin Dashboard</div>
      <ul className="nav">
        <li>
          <Link to="/adminfhc/products">Products</Link>
        </li>
        <li>
          <Link to="/adminfhc/categories">Categories</Link>
        </li>
        <li>
          <Link to="/adminfhc/users">Users</Link>
        </li>
        <li>
          <Link to="/adminfhc/formations">Formations</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;