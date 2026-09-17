import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/movies",
        element: <Movies/>
      }
    ]
    
  },

]);
function Router() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Router
