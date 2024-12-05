import { useLoaderData } from "react-router-dom";


const AllSportsEquipment = () => {
    const data = useLoaderData();
    console.log(data)
    const {name,category,price} = data
    return (
        <div>
            <h1>all sports</h1>

     
   <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        data.map(data => <tr className="bg-base-200">
          
            <td>{data.name}</td>
            <td>{data.category}</td>
            <td>{data.price}</td>
            <td><button>Details</button></td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllSportsEquipment;