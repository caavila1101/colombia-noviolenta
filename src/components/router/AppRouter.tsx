import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import RegisterForm from "../register/RegisterForm";
import LoginForm from "../login/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterForm />} />

        <Route path="/Login" element= {<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
