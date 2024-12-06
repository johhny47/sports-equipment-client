import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
   console.log(data)
    const {name,price,description,image,rating,category,processingTime,stockStatus
    }=data
    return (
        <div className="  w-[1062px] mx-auto">
        <div className=" mx-auto md:flex lg:flex gap-10 my-10 lg:mb-0">
          <div className=" w-[30%] md:w-[45%] lg:w-[45%] ">
             <img src={image} className="rounded-xl" alt="" />
          </div>
          <div className=" w-[45%]">
            <h1 className="text-3xl font-bold ">{name}</h1>
            <h2 className="text-xl font-medium my-2">Price: {price}</h2>
            <h2 className="text-xl font-medium mt-2">Stock Status</h2>
            <h2 className="w-48">{stockStatus}</h2>
           
            <h2 className="text-xl font-medium mt-2">Description</h2>
            <h2 className="w-48">{description}</h2>
            <h2 className="text-xl font-medium mt-3">Category</h2>
            <h2>{category}</h2>
        
            
            <h2 className="text-xl font-medium mt-3">Rating</h2>
            <div className="rating mt-2">
             {Array.from({ length: rating}).map((i) => (
           < input key={i} type="radio" name="rating-4"
            className="mask mask-star-2 bg-green-500"/>))}
           </div>
           <h2 className="text-xl font-medium mt-3">Processing Time</h2>
           <h2>{processingTime}</h2>
        
          </div>
          
         
       </div>
      
         
      </div>
    );
};

export default Details;