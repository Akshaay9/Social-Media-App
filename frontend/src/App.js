import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
