import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                loader: () => fetch('/data.json'),
                element: <Home></Home>,
                
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/public/data.json')
                
            },
            {
                path: "/cards/:id",
                element: <DonationDetails></DonationDetails>,
                loader: () =>fetch('/public/data.json')
            }
        ]
    }
])

export default Route;