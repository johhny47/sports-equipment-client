import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const data = useLoaderData();
    console.log(data);
    const handleUpdate = (e) =>{
   
    
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const customization = form.customization.value
        const processingTime = form.time.value
        const image = form.image.value
        const stockStatus = form.stock.value
        const description = form.description.value
     
       
          
     
       const allEquipment = {name,category,price,rating,customization,processingTime,image,stockStatus,description}
       
       
        
        fetch(`http://localhost:5000/equipments/${data._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allEquipment)
        })
        .then(res => res.json())
        .then(data => {
         
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'User Updated Successfuly',
                    icon: 'Success',
                    confirmButtonText: 'ok'
                  })
            }
        })
     
    }
    return (
        <div className="w-8/12 mx-auto">
        <form onSubmit={handleUpdate}>
            {/* row1 */}
            <div className="md:flex justify-between">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Item Name</span>
                  </div>
                    <input type="text"  name="name" defaultValue={data?.name} placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category Name</span>
                  </div>
                    <input type="text" name="category" defaultValue={data?.category}  placeholder="Category Name" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
            {/* row2 */}
            <div className="md:flex justify-between">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                    <input type="text" name="price" defaultValue={data?.price} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Rating</span>
                  </div>
                    <input type="text" name="rating" defaultValue={data?.rating} placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
            {/* row3 */}
            <div className="md:flex justify-between">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Customization</span>
                  </div>
                    <input type="text" name="customization" defaultValue={data?.customization} placeholder="Customization" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Processing Time</span>
                  </div>
                    <input type="text" name="time" defaultValue={data?.
                    processingTime} placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>

             {/* row4 */}

                <div className="md:flex justify-between">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Image</span>
                  </div>
                    <input type="text" name="image" defaultValue={data?.image} placeholder="Image" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Stock Status</span>
                  </div>
                    <input type="text" name="stock" defaultValue={data?.stockStatus
} placeholder="Stock Status" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
             {/* row 5 */}
             <div>
             <label className="form-control">
               <div className="label">
              <span className="label-text">Description</span>
             </div>
             <textarea className="textarea textarea-bordered h-24"type="text" name="description" defaultValue={data?.description
} placeholder="Description"></textarea>
            <div className="label">
            </div>
          </label>
             </div>
           

            <input type="submit" value="Update" className="btn btn-block" />
          
        </form>

    </div>
    );
};

export default Update;