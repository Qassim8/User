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

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element = {    
      <Register/>}/>
          <Route path="/login" element = {    
      <Login/>}/>
          <Route path="/landing" element = {    
      <Landing/>}/>
                <Route path="/home" element = {    
      <Home/>}/>
          <Route path="/reserv" element = {
        <ReservationInfo/>}/>
              <Route path="/next" element = {
        <Next/>}/>
        <Route path="/support" element = { 
        <Support/>}/>
        <Route path="/about" element = { 
        <About/>}/>
        <Route path="/profile" element = { 
        <Profile/>}/>
        <Route path="/pay" element = { 
        <Pay/>}/>
                <Route path="/dora" element = { 
        <Dora/>}/>
                <Route path="/farhaty" element = { 
        <Farhaty/>}/>
                <Route path="/tajoj" element = { 
        <Tajoj/>}/>
                <Route path="/marina" element = { 
        <Marina/>}/>
                <Route path="/sendepad" element = { 
        <Sendpad/>}/>
                <Route path="/prestige" element = { 
        <Prestige/>}/>
    </Routes>
    </BrowserRouter>
  )

}

export default App;
