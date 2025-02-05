import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import AddEquipment from "../page/AddEquipment";
import MyEquipment from "../page/MyEquipment";
import AllSportsEquipment from "../page/AllSportsEquipment";
import Details from "../component/Details";
import Update from './../component/Update';
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";
import Product from "../component/Product";
import AllEquipmetsData from "../component/AllEquipmetsData";
import AllEquipmentsSortData from "../component/AllEquipmentsSortData";
import Categories from "../component/Categories";
import Category from "../component/Category";
import ErrorPage from './../component/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "equipments/category/:category",
                        element: <Category></Category>,


                    }
                ]

            },
            {
                path: "/",
                element: <Product></Product>,
                loader: () => fetch("https://sports-equipment-server-seven.vercel.app/equipments/limit")


            },
            {
                path: "/",
                element: <Categories></Categories>,



            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/addequipment",
                element: <PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
            },
            {
                path: "/myequipment",
                element: <PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>,



            },
            {
                path: "/allsportsequipment",
                element: <AllSportsEquipment></AllSportsEquipment>,
                loader: () => fetch("https://sports-equipment-server-seven.vercel.app/equipments"),
                children: [
                    {
                        path: "/allsportsequipment",
                        element: <AllEquipmetsData></AllEquipmetsData>,
                        loader: () => fetch("https://sports-equipment-server-seven.vercel.app/equipments")
                    },
                    {
                        path: "/allsportsequipment/sort",
                        element: <AllEquipmentsSortData></AllEquipmentsSortData>,
                        loader: () => fetch("https://sports-equipment-server-seven.vercel.app/equipments/sort")
                    }
                ]
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://sports-equipment-server-seven.vercel.app/equipments/details/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://sports-equipment-server-seven.vercel.app/equipments/update/${params.id}`)

            }

        ]


    }

])
export default router;