import { Routes, Route } from "react-router-dom";
import { Login }  from "./pages/Login"
import { Register } from "./pages/Register"
import { MyForm } from "./pages/MyForm";

export function Router() {
  
  return(
    <Routes>
      <Route path="/" element={<MyForm/>}/>
      <Route path="/login" element= {<Login/>} />
      <Route path="/register" element= {<Register/>} />
    </Routes>
  )
}