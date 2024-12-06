import { Link, useLoaderData } from "react-router-dom";


const AllEquipmetsData = () => {
    const data = useLoaderData();
    return (
        <div className="overflow-x-auto mt-10">
        <table className="table">
        {/* head */}
        <thead>
          <tr>
          <th>Index</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            data.map((data,idx) => <tr className="bg-base-200">
                 <th>{idx+1}</th>
                <td>{data.name}</td>
                <td>{data.category}</td>
                <td>{data.price}</td>
                <td><Link to={`/details/${data._id}`}><button>Details</button></Link></td>
              </tr>)
          }
        
        </tbody>
      </table>
    </div>
    );
};

export default AllEquipmetsData;