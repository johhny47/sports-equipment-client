import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import AddEquipment from "../page/AddEquipment";


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
            }
           
        ]
       
       
    }

])
export default router;