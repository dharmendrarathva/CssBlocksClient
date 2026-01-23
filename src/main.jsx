import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css';
import router from "./route";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

         <AuthProvider>
           <RouterProvider router={router} />
         </AuthProvider>

);