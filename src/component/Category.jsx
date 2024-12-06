import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Category = () => {
    const {category} = useParams()
    const [data, setData] = useState([]);
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
                // console.log(data)
                setData(data);
                setLoading(false);
                
            })
            .catch(err => {
                setError('Failed to load data');
                setLoading(false);
            });
        }

      

    }, []);

    const [products,setProducts]=useState([])
   

  
   
 
    useEffect(() => {
        {
          
            fetch(`http://localhost:5000/equipments/category/${products}`, {
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

    useEffect(()=>{
        if(category){
            const filterByCategory=[...data].filter
       (product => product.category === category)
       setProducts(filterByCategory)
        }
        else{
            setProducts(data)
        }
     
      
    }
    ,[data,category])
  
   
     
      

    
    return (
        <div >
            <h1>Category</h1>
        {
         loading ? <p>Loading...</p>:""
        }
        {
         error ? <p>{error}</p>: ""
        }
         { 
             <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
                 {products.map((equipment) => (
                    <div key={equipment._id} className="card bg-slate-300 w-64 shadow-xl">
                    <figure>
                      <img
                        src={equipment.image} className="w-full h-60  "
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                      {equipment.name}
                        <div className="badge badge-secondary"> <p>${equipment.price}</p></div>
                      </h2>
                      <p>{equipment.description}</p>
                      <div className="card-actions justify-end">
                       
                      </div>
                    </div>
                  </div>
                   
                 ))}
             </ul>}
        
     </div>
    );
};

export default Category;