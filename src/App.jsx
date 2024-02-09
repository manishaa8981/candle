import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import LoginForm from "./pages/login&register/login.jsx";
import RegisterForm from "./pages/login&register/register.jsx";
import Cart from "./pages/cart/cart.jsx";
import AdminProduct from "./pages/adminPages/adminProduct/adminProduct.jsx";
// import AdminSidebar from "./pages/adminPages/adminSidebar/adminSidebar.jsx";
import AdminCustomer from "./pages/adminPages/adminCustomer/adminCustomer.jsx";
import AdminOrder from "./pages/adminPages/adminOrder/adminOrder.jsx";
import AdminCategory from "./pages/adminPages/adminCategory/adminCategory.jsx";
import Category from "./pages/homePage/Category.jsx";
import Homepage from "./pages/homePage/homepage.jsx";
import Carousel from "./pages/Carousel/carousel.jsx";

const queryClient = new QueryClient();

function App() {
  return (
<>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={createBrowserRouter([
      {path: "/", element: <Homepage/>},
      {path: "/LoginForm", element: <LoginForm/>},
      {path: "/RegisterForm", element: <RegisterForm/>},
      {path: "/Cart", element: <Cart/>},
      {path: "/AdminProduct", element: <AdminProduct/>},
      // {path: "/AdminSidebar", element: <AdminSidebar/>},
      {path: "/AdminOrder", element: <AdminOrder/>},
      {path: "/AdminCategory", element: <AdminCategory/>},
      {path: "/AdminCustomer", element: <AdminCustomer/>},
      {path: "/Category", element: <Category/>},
      {path: "/Carousel", element: <Carousel/>},



    ])} />
  </QueryClientProvider>
</>
  )
}

export default App

