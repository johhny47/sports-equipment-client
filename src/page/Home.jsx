import { Outlet } from "react-router-dom";
import Categories from "../component/Categories";
import Product from "../component/Product";
import { Bounce, Fade } from "react-awesome-reveal";
import Banner from "../component/Banner/Banner";
import { useState } from "react";



const Home = () => {
   


   
    return (
       <div  className="w-full ">
         

        <Banner></Banner>
         <div className="w-11/12 mx-auto">
          
          
          <Product></Product>
          <div>
          <Bounce delay={200}>
          <h1 className="text-4xl font-bold text-center my-11 ">Category</h1>
          </Bounce>
      
       <div className="flex">
        <div className="w-1/4">
          {/* sidebar */}
          <div >
          <Categories></Categories>
             </div>
        </div>
           {/* cart */}
           <div className="w-3/4 ">
           <Outlet></Outlet>
          </div>
       </div>
        </div>
         
      </div>
       </div>
    );
};

export default Home;