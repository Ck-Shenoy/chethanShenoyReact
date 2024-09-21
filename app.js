import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Error from './src/components/Error';
import { Outlet } from 'react-router-dom';
import RestaurantMenu from './src/components/RestaurantMenu';

const App = () =>
(
    <div className='app'>
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);