import "./main-style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "../src/pages/login/signup/Signup.jsx";
import Login from "../src/pages/login/signup/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductsManagement from "./components/Dashboard/Products-management";
import DashContent from "./components/Dashboard/DashContent";
import ShowUser from "./components/Dashboard/ShowUser";
import AddNewProduct from "./components/Dashboard/AddNewProduct";
import ShowProduct from "./components/showProducts/ShowProduct";
import AllProducts from "./components/products/AllProducts";
import Services from "./pages/services/Services1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path={""} element={<DashContent />} />
          <Route path={"ProductsManagement"} element={<ProductsManagement />} />
          <Route path="showuser" element={<ShowUser />} />
          <Route path="add-new-product" element={<AddNewProduct />} />
        </Route>
        <Route path="/:productInformation" element={<ShowProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
} 

export default App;
