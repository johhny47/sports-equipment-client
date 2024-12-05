import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import AddEquipment from "../page/AddEquipment";
import MyEquipment from "../page/MyEquipment";
import AllSportsEquipment from "../page/AllSportsEquipment";


const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
                
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/addequipment",
                element:<AddEquipment></AddEquipment>
            },
            {
                path:"/myequipment",
                element:<MyEquipment></MyEquipment>
            },
            {
                path:"/allsportsequipment",
                element:<AllSportsEquipment></AllSportsEquipment>,
                loader: ()=>fetch("http://localhost:5000/equipments")
            }
           
        ]
       
       
    }

])
export default router;