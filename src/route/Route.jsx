import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Biodatas from "../pages/Biodatas";
import DashBoard from "../pages/DashBoard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/biodatas',
                element: <Biodatas/>
            },
            {
                path: '/dashboard',
                element: <DashBoard/>
            }
        ]
    }
])

export default router