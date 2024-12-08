import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";
import Banner from "../component/Banner/Banner";







const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
             
             <Navbar></Navbar>
        
            <div className="min-h-[calc(100vh-295px)] w-full mx-auto">
              <Outlet></Outlet>
            </div>
           <Footer></Footer>
           <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Sports Zone</p>
      </aside>
    </footer>
        </div>
    );
};

export default MainLayout;