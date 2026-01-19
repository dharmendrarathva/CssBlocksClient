import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import UserLayout from '../Layouts/UserLayout'
import Home from '../pages/Home'
import About from '../components/AboutUs/About'
import ContactUs from '../components/Contact/ContactUs'
import TermsCondition from '../components/TC/TermCondition'
import PrivacyPolicy from '../components/PP/PrivacyPolicy'
import Search from '../components/Searchbar/Search'
import Github from '../components/Github/Github'

const router = createBrowserRouter([
    {
       path:'/',
         element:<UserLayout />,
         children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'contact',
                element:<ContactUs />
            },
            {
                path:'privacy-policy',
                element:<PrivacyPolicy />
            },
            {
                path:'terms-condition',
                element:<TermsCondition />
            },
            {
                path:'serach',
                element:<Search />
            },
            {
                path:'github',
                element:<Github />
            }
            
        ]
    },
   
    {
        
    }
])
export default router
