import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Tooltip from "./Tooltip";
import Banner from "../Banner/Banner";
import { Bounce } from "react-awesome-reveal";




const Navbar = () => {
  const {user,handleLogout} =useContext(authContext)
 
 
 
    return (
        <div className="navbar bg-gray-400 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to="/"><li><a>Home</a></li></NavLink>
             <NavLink to="/allsportsequipment"><li><a>All Sports Equipment</a></li></NavLink>
             {
              user && <div>
               
                 <NavLink to="/addequipment"><li><a>Add Equipment</a></li></NavLink>
                 <NavLink to="/myequipment"><li><a>My Equipment</a></li></NavLink>
              </div>
             }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl lg:text-3xl italic font-bold -ml-7 md:ml-0 lg:ml-0"><span className="text-red-500">SPORTS </span>
          <Bounce delay={200}>
          <span className="text-white">ZONE</span>
            </Bounce></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
              <NavLink to="/"><li className="text-base font-bold text-white"><a>Home</a></li></NavLink>
              <NavLink to="/allsportsequipment"><li className="text-base font-bold text-white"><a>All Sports Equipment</a></li></NavLink>
             {
              user && <div className="flex gap-2">
              
                 <NavLink to="/addequipment"><li className="text-base font-bold text-white"><a>Add Equipment</a></li></NavLink>
                 <NavLink to="/myequipment"><li className="text-base font-bold text-white"><a>My Equipment</a></li></NavLink>
              </div>
             }
             
            
            
        
           
          </ul>
        </div>
        <div className="navbar-end">
        {user ? 
         
         <div className="flex gap-3 items-center">
           <div>
           <NavLink to="/login"> <a onClick={handleLogout} className="btn btn-xs  md:btn-error lg:btn-error ">Logout</a></NavLink>
           </div>
            
          <div className="user-container ">
         
          <div>
      <Tooltip text={`${user.displayName}`}>
        <button className="">
        <img src= {user.photoURL} alt="" className="h-10 w-10 rounded-full border-2 border-red-500 " />
        </button>
      </Tooltip>
    </div>
        
          </div>
 
         </div>
         :<div className="flex gap-1 lg:gap-4 md:gap-4"> <NavLink to="/register"><a className="btn btn-xs  md:btn-error lg:btn-error">Register</a></NavLink>
              <NavLink to="/login"><a className="btn btn-xs  md:btn-error lg:btn-error">Login</a></NavLink></div>}
        </div>
       
      </div>
    );
};

export default Navbar;