import { Routes, Route } from "react-router-dom";
import { Login }  from "./pages/Login"
import { Register } from "./pages/Register"
import { MyForm } from "./pages/MyForm";
import { SendActivity } from "./pages/SendActivity";

export function Router() {
  
  return(
    <Routes>
      <Route path="/myform" element={<MyForm/>}/>
      <Route path="/send-activity" element={<SendActivity/>}/>
      <Route path="/login" element= {<Login/>} />
      <Route path="/register" element= {<Register/>} />
    </Routes>
  )
}