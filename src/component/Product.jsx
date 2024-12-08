import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Product = () => {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   

    useEffect(() => {
         {
          
            fetch(`https://sports-equipment-server-seven.vercel.app/equipments/limit`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res => res.json())
            .then(data => {
                setData(data);
                
                setLoading(false);
                
            })
            .catch(err => {
                setError('Failed to load data');
                setLoading(false);
            });
        }

      

    }, []);

    
   
   
   
   
    return (
        <div >
        {
         loading ? <p>Loading...</p>:""
        }
        {
         error ? <p>{error}</p>: ""
        }
        <div className="h-10 w-full bg-slate-500">
            <h1 className="text-white text-2xl font-bold mx-10 pt-1 ">Product section</h1>
        </div>
         {Data.length > 0 ? (
             <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
                 {Data.map((equipment) => (
                    <div key={equipment._id} className="card bg-slate-300 w-80 shadow-xl">
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
                      <div className="card-actions justify-start">
                        <div className=""><Link to={`/details/${equipment._id}`}><button className="text-md font-semibold text-white
                          bg-slate-500 px-2 py-1 border-2 rounded-lg">Details</button></Link></div>
                       
                      </div>
                    </div>
                  </div>
                   
                 ))}
             </ul>
         ) : (
             <p>No equipment found for this email.</p>
         )}
     </div>
    );
};

export default Product;