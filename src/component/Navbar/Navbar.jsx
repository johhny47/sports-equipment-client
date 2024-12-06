import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


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
          <a className="btn btn-ghost text-3xl italic font-bold "><span className="text-red-500">SPORTS </span><span className="text-white">ZONE</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          
              <NavLink to="/"><li className="text-base font-bold text-white"><a>Home</a></li></NavLink>
              <NavLink to="/allsportsequipment"><li className="text-base font-bold text-white"><a>All Sports Equipment</a></li></NavLink>
             {
              user && <div className="flex gap-2">
                {/* <NavLink to={`/details/${data._id}`}><li><a>View Details</a></li></NavLink> */}
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
           <NavLink to="/login"> <a onClick={handleLogout} className="btn">Logout</a></NavLink>
           </div>
            
          <div className="user-container ">
          <img src= {user.photoURL} alt="" className="h-10 w-10 rounded-full border-2 border-red-500 " />
          <div className="user-name">{user.displayName}</div>
          </div>
 
         </div>
         :<div className="flex gap-4"> <NavLink to="/register"><a className="btn">Register</a></NavLink>
              <NavLink to="/login"><a className="btn">Login</a></NavLink></div>}
        </div>
      </div>
    );
};

export default Navbar;