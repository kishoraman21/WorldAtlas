import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import "./App.css";

import  Home from "./pages/Home";
import {About} from "./pages/About";
import {Country} from "./pages/Country";
import {Contact} from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./Components/Layout/CountryDetails";




// creating the router 
const router = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout/>, // parent element 
    errorElement: <ErrorPage/>,

    children:[  // children element 
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "country/:id",
        element: <CountryDetails/>,
      },
      {
        path: "country",
        element: <Country/>,
      },
    ],
  },
]);

function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
 
    </>
  );

}

export default App;