import React from 'react';
import AdminPage from '../pages/AdminPage'
import EditPage from '../pages/EditPage'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListProduct from '../components/products/ListProduct';
import Login from '../components/authentication/Login';
import Register from '../components/authentication/Register';
import DetailsPage from '../pages/DetailsPage';
import FilterMac from '../components/ModalNav/FilterMac';
import FilterIpad from '../components/ModalNav/FilterIpad';
import CartPage from '../pages/CartPage';

const MainRoutes = () => {

    const ROUTES = [
        {
            link: '/admin',
            element: <AdminPage />,
            id: 1,
        },

        {
            link: '/edit/:id',
            element: <EditPage />,
            id: 2,
        },

        {
            link: '/home',
            element: <HomePage />,
            id: 3,
        },

        {
            link: '/list',
            element: <ListProduct />,
            id: 4,
        },

        {
            link: '/SignIn',
            element: <Login />,
            id: 5,
        },

        {
            link: '/LogIn',
            element: <Register />,
            id: 6,
        },

        {
            link: '/Details/:id',
            element: <DetailsPage />,
            id: 7,
        },


        {
            link: '/mac',
            element: <FilterMac/>,
            id: 8,
        },

        {
            link: '/ipad',
            element: <FilterIpad/>,
            id: 9,
        },

        {
            link: '/card',
            element: <CartPage/>,
            id: 10,
        }
    ]
    return (
        <Routes>
            {
                ROUTES.map((el) => (
                    <Route path={el.link} element={el.element} key={el.id}/>
                ))
            }
        </Routes>
    );
};

export default MainRoutes;