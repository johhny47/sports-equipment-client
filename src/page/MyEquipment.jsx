import { useContext, useEffect, useState } from "react";
import { authContext } from "../component/AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
const MyEquipment = () => {
    const { user } = useContext(authContext);
    const userEmail = user?.email;

    const [equipmentData, setEquipmentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [myuser,setMyuser] = useState(equipmentData)

    useEffect(() => {
        if (userEmail) {
          
            fetch(`http://localhost:5000/equipments/search?userEmail=${userEmail}`, {
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

      

    }, [userEmail]);

    
    const handleDelete = _id =>{
        console.log(myuser)

        fetch(`http://localhost:5000/equipments/${_id}`,{
            method: 'DELETE',
           })
        .then(res => res.json())
        .then(data => {
             
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Delete',
                    text: 'User Deleted Successfuly',
                    icon: 'delete',
                    confirmButtonText: 'ok'
                  })
                  const remaining = myuser.filter(d => d._id !== _id)
                  setMyuser(remaining)
                  setEquipmentData(remaining);
            }
        })
    }


    

    return (
        <div >
           {
            loading ? <p>Loading...</p>:""
           }
           {
            error ? <p>{error}</p>: ""
           }
            {equipmentData.length > 0 ? (
                <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">
                    {equipmentData.map((equipment) => (
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
                         <div className="card-actions justify-end">
                           <div className="badge badge-outline"><Link to={`/update/${equipment._id}`} > <button>Update</button></Link></div>
                           <div className="badge badge-outline"> <button onClick={()=>handleDelete(equipment._id)}>Delete</button></div>
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

export default MyEquipment;
