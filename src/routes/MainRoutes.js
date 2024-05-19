import React from 'react';
import AdminPage from '../pages/AdminPage'
import EditPage from '../pages/EditPage'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

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