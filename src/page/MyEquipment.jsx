import { useContext, useEffect, useState } from "react";
import { authContext } from "../component/AuthProvider/AuthProvider";

const MyEquipment = () => {
    const { user } = useContext(authContext);
    const userEmail = user?.email;

    const [equipmentData, setEquipmentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (userEmail) {
            console.log(userEmail)
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
           
            {equipmentData.length > 0 ? (
                <ul>
                    {equipmentData.map((equipment) => (
                        <li key={equipment._id}>
                            <h3>{equipment.name}</h3>
                            <p>Category:{equipment.category}</p>
                            <p>Price: ${equipment.price}</p>
                          
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
