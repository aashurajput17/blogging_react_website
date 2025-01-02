import React from "react";
import {Link} from "react-router-dom";
import "./topbar.css";
//import profile "./images/profile.jpg";
 export default function TopBar(){
    const user= false;
    return(
        <div className="top"> 
            <div className="topLeft">
            <i class="topIcon fa-brands fa-square-facebook"></i>
            <i class="topIcon fa-brands fa-square-instagram"></i>
            <i class="topIcon fa-brands fa-square-x-twitter"></i>
            <i class="topIcon fa-brands fa-youtube"></i>
            </div>
            <div className="topCenter">
                  <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/home"> Home</Link></li>
                    <li className="topListItem" ><Link className="link" to="/">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write"> Write</Link></li>
                    <li className="topListItem">{user && "Logout"}</li>
                  </ul>
            </div>
            <div className="topRight">
           {
            user ? (
              <img className="topImg" src="profile.jpg" alt=""/>
            ) : (
              <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login">Login</Link>
              <Link className="link" to="/register">Register</Link>
              </li>
            </ul>
            )  
           }
            <i class="topSearch fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
    )
 }
            