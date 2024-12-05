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
                setMyuser(data)
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
            }
        })
    }


    

    return (
        <div>
           {
            loading ? <p>Loading...</p>:""
           }
           {
            error ? <p>{error}</p>: ""
           }
            {equipmentData.length > 0 ? (
                <ul>
                    {equipmentData.map((equipment) => (
                        <li key={equipment._id}>
                            <h3>{equipment.name}</h3>
                            <p>Category:{equipment.category}</p>
                            <p>Price: ${equipment.price}</p>
                            <Link to={`/update/${equipment._id}`} > <button>Update</button></Link>
                            <button onClick={()=>handleDelete(equipment._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No equipment found for this email.</p>
            )}
        </div>
    );
};

export default MyEquipment;
