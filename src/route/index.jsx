import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import RoleLayout from "../Layouts/RoleLayout";
import AdminRoute from "./AdminRoute";

import Home from "../pages/Home";
import About from "../components/AboutUs/About";
import ContactUs from "../components/Contact/ContactUs";
import TermsCondition from "../components/TC/TermCondition";
import PrivacyPolicy from "../components/PP/PrivacyPolicy";
import Search from "../components/Searchbar/Search";
import Github from "../components/Github/Github";
import Login from "../components/auth/Login";
import Register from "../components/Auth/Register";
import LogRegBtn from "../components/Auth/LogRegBtn";
import VerifyOtp from "../components/auth/VerifyOtp";
import Profile from "../components/Profile/Profile";
import ProductOperation from "../pages/ProductOperation";



const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/logregbtn", element: <LogRegBtn /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-condition", element: <TermsCondition /> },
      { path: "/search", element: <Search /> },
      { path: "/github", element: <Github /> },
      { path: "/verify-otp", element: <VerifyOtp /> },
    ],
  },

  {
    element: <RoleLayout />,
    children: [
      { path: "/profile", element: <Profile /> },

      {
        element: <AdminRoute />,
        children: [
          { path: "/admin/products",
             element: <ProductOperation /> 
            },],
      },
      {

          

      }
    ],
  },
]);

export default router;
