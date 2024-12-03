import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar/Navbar";







const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
             
          <Navbar></Navbar>
            <div className="min-h-[calc(100vh-295px)] w-11/12 mx-auto">
              <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;