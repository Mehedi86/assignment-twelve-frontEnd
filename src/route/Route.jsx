import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Biodatas from "../pages/Biodatas";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layout/DashBoard";
import EditBiodata from "../pages/EditBiodata";
import BiodataDetails from "../pages/BiodataDetails";
import FavoriteBiodata from "../pages/FavoriteBiodata";
import MyContctRequest from "../pages/MyContctRequest";
import Admin from "../pages/Admin";
import AdminLayout from "../layout/AdminLayout";
import ApprovedContactRequest from "../pages/ApproveContactRequest";
import ApprovedPremium from "../pages/ApprovedPremium";
import ManageUsers from "../pages/ManageUsers";

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
                element: <Biodatas />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/biodata/:id',
                element: <BiodataDetails />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/editBiodata',
                element: <EditBiodata />
            },
            {
                path: '/dashboard/myBiodata',
                element: <BiodataDetails />
            },
            {
                path: '/dashboard/favourites',
                element: <FavoriteBiodata />
            },
            {
                path: '/dashboard/contactsRequest',
                element: <MyContctRequest />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <Admin />
            },
            {
                path: '/admin/manageUsers',
                element: <ManageUsers />
            },
            {
                path: '/admin/approveContact',
                element: <ApprovedContactRequest />
            },
            {
                path: '/admin/approvePremium',
                element: <ApprovedPremium />
            }
        ]
    }
])

export default router