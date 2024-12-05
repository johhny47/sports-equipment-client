import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
   
    const {name}=data
    return (
        <div>
            <h1>details{name}</h1>
        </div>
    );
};

export default Details;