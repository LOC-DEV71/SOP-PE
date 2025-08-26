import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Card from "../Pages/Card";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Admin from "../Pages/ADMIN/ADMIN";
import Member from "../Pages/Member/index";

export const routes = () => [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/card",
                element: <Card/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/admin",
                element: <Admin/>
            },
            {
                path: "/member",
                element: <Member/>
            }

        ]
    }
]