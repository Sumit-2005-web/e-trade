import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthRedirect from './landing_page/home/AuthRedirect';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SignUp from './landing_page/signup/SignUp';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/Login';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path="/" element={<HomePage />} />
    <Route path="/auth-redirect" element={<AuthRedirect />} />   
   <Route path="/signup" element={<SignUp />} />
    <Route path="/about" element={<AboutPage />} />
     <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
       <Route path="/support" element={<SupportPage />} />
        <Route path="/login" element={<Login />} />
       <Route path="*" element={<NotFound />} />
 </Routes>
 <Footer />
 </BrowserRouter>
 
)
