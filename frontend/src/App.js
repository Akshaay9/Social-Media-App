import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import PostForm from "./Screens/PostForm/PostForm"
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/modal" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
