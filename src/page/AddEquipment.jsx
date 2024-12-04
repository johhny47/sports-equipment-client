

const AddEquipment = () => {

//     Image, 
// Item Name, 
// Category Name,
// Description, 
// Price, 
// Rating, 
// Customization (bat with extra grip, hit paper etc), 
// Processing Time (delivery time), 
// Stock Status (available product quantity), 
const handleAddEquipment = e =>{
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
   
   
   
    console.log(name,category,price,rating,customization,processingTime,image,stockStatus,description)
 
}

    return (
        <div className="w-8/12 mx-auto">
        <form onSubmit={handleAddEquipment}>
            {/* row1 */}
            <div className="md:flex justify-between">
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Item Name</span>
                  </div>
                    <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category Name</span>
                  </div>
                    <input type="text" name="category"  placeholder="Category Name" className="input input-bordered w-full max-w-xs" />
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
                    <input type="text" name="price"  placeholder="Price" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Rating</span>
                  </div>
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
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
                    <input type="text" name="customization" placeholder="Customization" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Processing Time</span>
                  </div>
                    <input type="text" name="time" placeholder="Processing Time" className="input input-bordered w-full max-w-xs" />
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
                    <input type="text" name="image" placeholder="Image" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Stock Status</span>
                  </div>
                    <input type="text" name="stock" placeholder="Stock Status" className="input input-bordered w-full max-w-xs" />
                </label>
                </div>
            </div>
             {/* row 5 */}
             <div>
             <label className="form-control">
               <div className="label">
              <span className="label-text">Description</span>
             </div>
             <textarea className="textarea textarea-bordered h-24"type="text" name="description" placeholder="Description"></textarea>
            <div className="label">
            </div>
          </label>
             </div>
           

            <input type="submit" value="Add Coffee" className="btn btn-block" />
          
        </form>

    </div>
         
    );
};

export default AddEquipment;