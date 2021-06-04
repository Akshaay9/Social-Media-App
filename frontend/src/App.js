import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import IndividualUser from "./Screens/UserScreen/Index";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/home/text/:id" element={<HomeScreen />} />
        <Route path="/home/image/:id" element={<HomeScreen />} />
        <Route path="/home/image/:id" element={<HomeScreen />} />
        <Route path="/home/user" element={<IndividualUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
