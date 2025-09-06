import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Cartilla from "../cartilla/Cartilla";
import Layout from "../Layout";
import RegisterForm from "../register/RegisterForm";
import LoginForm from "../login/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/colombia-noviolenta/cartilla" element={<Cartilla />} />
        </Route>

        {/* Ruta login sin Navbar 
        <Route path="/login" element={<Login />} />*/}

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterForm />} />

        <Route path="/login" element= {<LoginForm />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
