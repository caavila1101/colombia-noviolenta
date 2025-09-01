import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import RegisterForm from "../register/RegisterForm";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterForm />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
