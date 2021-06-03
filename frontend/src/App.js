import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import PostForm from "./Screens/PostForm/PostForm";
import "./App.css";
import IndividualImagePost from "./Components/IndividualPost/IndividualImagePost";
import IndividualTextPost from "./Components/IndividualPost/IndividualTextPost";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/home/text/:id" element={<HomeScreen />} />
        <Route path="/home/image/:id" element={<HomeScreen />} />
        <Route path="/modal" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
