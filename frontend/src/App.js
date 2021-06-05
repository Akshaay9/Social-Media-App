import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import IndividualUser from "./Screens/UserScreen/Index";
import AllUsers from "./Screens/AllUsers/Index";
import "./App.css";
import {Counter} from "./features/counter/Counter"
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/home/modal" element={<HomeScreen />} />
        <Route path="/home/modal/:id" element={<HomeScreen />} />
        <Route path="/home/text/:id" element={<HomeScreen />} />
        <Route path="/home/image/:id" element={<HomeScreen />} />
        <Route path="/home/user" element={<IndividualUser />} />
        <Route path="/home/user/all" element={<AllUsers />} />
        <Route path="/home/user/all" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
