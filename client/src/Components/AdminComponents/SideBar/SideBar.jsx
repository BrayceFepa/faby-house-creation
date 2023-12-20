import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {

  const adminMenus = [
    {
      title: "Admin Dashboard",
      link: "/adminfhc"
    },
    {
      title: "Products",
      link: "/adminfhc/products"
    },
    {
      title: "Categories",
      link: "/adminfhc/categories"
    },
    {
      title: "Users",
      link: "/adminfhc/users"
    },
    {
      title: "Formations",
      link: "/adminfhc/formations"
    },
  ]

  useEffect(()=>{
    console.log("url", window.location.href.endsWith("/adminfhc/formations"))
  },[window.location.href])

 return (
    <div className="sidebar">
     <ul className="nav">
       {
         adminMenus.map((menu, id) => {
           return (
             <li key={id} className={`${window.location.href.endsWith(menu.link) && "active"}`}><Link to={menu.link}>{menu.title}</Link> </li>
           )
         })
       }
      </ul>
    </div>
  );
}

export default SideBar;