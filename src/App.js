import "./App.css";
import React from "react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import ReservationInfo from "./pages/Reservation-Info/ReservationInfo";
import Next from "./pages/Reservation-Info/Next";
import Support from "./pages/Support/Support";
import About from "./pages/More/About";
import Profile from "./pages/More/Profile";
import Pay from "./pages/Payment/Pay";
import Dora from "./pages/Halls/Dora";
import Farhaty from "./pages/Halls/Farhaty";
import Tajoj from "./pages/Halls/Tajoj";
import Marina from "./pages/Halls/Marina";
import Sendpad from "./pages/Halls/Sendepad";
import Prestige from "./pages/Halls/Prestige";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./component/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element = {    
      <Register/>}/>
          <Route path="/login" element = {    
      <Login/>}/>
          <Route path="/" element = {    
      <Landing/>}/>
      
      <Route path="/home" element={<ProtectedRoutes>
        <Home/>
      </ProtectedRoutes>}/>

      <Route path="/reserv" element={<ProtectedRoutes>
        <ReservationInfo/>
      </ProtectedRoutes>}/>
      
      <Route path="/next" element={<ProtectedRoutes>
        <Next/>
      </ProtectedRoutes>}/>

      <Route path="/support" element={<ProtectedRoutes>
        <Support/>
      </ProtectedRoutes>}/>

      <Route path="/about" element={<ProtectedRoutes>
        <About/>
      </ProtectedRoutes>}/>

      <Route path="/profile" element={<ProtectedRoutes>
        <Profile/>
      </ProtectedRoutes>}/>

      <Route path="/pay" element={<ProtectedRoutes>
        <Pay/>
      </ProtectedRoutes>}/>

      <Route path="/dora" element={<ProtectedRoutes>
        <Dora/>
      </ProtectedRoutes>}/>

      <Route path="/farhaty" element={<ProtectedRoutes>
        <Farhaty/>
      </ProtectedRoutes>}/>

      <Route path="/Tajoj" element={<ProtectedRoutes>
        <Tajoj/>
      </ProtectedRoutes>}/>
      
      <Route path="/marina" element={<ProtectedRoutes>
        <Marina/>
      </ProtectedRoutes>}/>

      <Route path="/sendepad" element={<ProtectedRoutes>
        <Sendpad/>
      </ProtectedRoutes>}/>

      <Route path="/prestige" element={<ProtectedRoutes>
        <Prestige/>
      </ProtectedRoutes>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App;
