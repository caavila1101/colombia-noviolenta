import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Cartilla from "../cartilla/Cartilla";
import Layout from "../Layout";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
