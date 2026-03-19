import "./App.css";
import { Wellcome } from "./components/home/Wellcome";
import { Characteristics } from "./components/details/Characteristics";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Page404 } from "./pages/Page404";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}

export default App;
