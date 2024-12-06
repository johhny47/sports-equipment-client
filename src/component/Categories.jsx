import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";



const Categories = () => {
   
    const [equipmentData, setEquipmentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        {
          
            fetch(`http://localhost:5000/equipments`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                setEquipmentData(data);
                setLoading(false);
                
            })
            .catch(err => {
                setError('Failed to load data');
                setLoading(false);
            });
        }

      

    }, []);

    const uniqueCategories = [
        ...new Set(equipmentData.map((category) => category.category))
      ];
    
    return (
        <div className="flex flex-col border-2 mt-10 rounded-2xl">
            
       
        {
          

          uniqueCategories.map((category =>  <NavLink key={category._id} to={`equipments/category/${category}`} role="tab" className={({isActive})=>`tab border-2 w-full md:w-20  lg:w-24 mx-auto rounded-2xl my-2 ${isActive?'tab-active bg-[#9538e2] text-white':''}`}>
            
            {category}
            
          </NavLink>))
        }
  
  </div>
    );
};

export default Categories;