import Categories from "../component/Categories";
import Product from "../component/Product";



const Home = () => {
   
    return (
        <div>
            <h1>home</h1>
            <Product></Product>
            <div>
         <h1 className="text-4xl font-bold text-center my-11 ">Explore Cutting-Edge Gadgets</h1>
         <div className="flex ">
          <div className="w-1/4  ">
            {/* sidebar */}
            <div >
            <Categories></Categories>
               </div>
          </div>
             {/* cart */}
             <div className="w-3/4 ">
             
            </div>
         </div>
          </div>
           
        </div>
    );
};

export default Home;