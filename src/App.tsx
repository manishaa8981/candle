import {createBrowserRouter, RouterProvider}  from "react-router-dom";
import Navbar from "./pages/Navbar.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Sidebar from "./pages/Sidebar.tsx";
// import Page from "./pages/cart.tsx";

// import UserCreate from './pages/admin/users/create.tsx';
function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/",element:<Navbar />},
                {path:"/dashboard",element:<Dashboard />},
                {path:"/sidebar",element:<Sidebar />},
                // {path:"/Page",element:<Page />},
                // {path:"/admin/users/create",element:< UserCreate />}
            ])}/>
        </>
    )
}
export default App