import { Link, Outlet, useLoaderData } from "react-router-dom";


const AllSportsEquipment = () => {
    const data = useLoaderData();
   
    
   
    return (
        <div>
            <div className="w-full mx-auto flex justify-between mt-5">
                  <div> 
                    <h1 className="text-xl font-bold mt-4" >All Equipments</h1>
                 </div>
                  <div className="flex items-center gap-3">
                 
                   <div className="flex gap-2">
                   <Link to="/allsportsequipment/sort"><button  className="flex gap-2 h-13 items-center  px-4 py-2 border-2 border-[#9538e2] text-[#9538e2] rounded-2xl font-semibold ">Sort by Price </button></Link>
                 
                   </div>
                  </div>
               
  
    
                </div> 
                <Outlet></Outlet>
 
        </div>
    );
};

export default AllSportsEquipment;