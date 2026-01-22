import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../../Pages/Home/Home";
import Checkout from "../../Pages/Checkout/Checkout";
import Detailes from "../../Pages/Detailes/Detailes";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const Linkes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "checkout", element: <Checkout /> },
        { path: "Detailes/:id", element: <Detailes /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <Navbar />
        <main className="min-h-[90vh] pt-50 max-w-275 mx-auto px-3">
          <Outlet />
        </main>
      </>
    );
  }

  return <RouterProvider router={Linkes}></RouterProvider>;
}
