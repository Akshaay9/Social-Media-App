import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import IndividualUser from "./Screens/UserScreen/Index";
import AllUsers from "./Screens/AllUsers/Index";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./features/Posts/PostSlice";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/modal" element={<HomeScreen />} />
        <Route path="/modal/:id" element={<HomeScreen />} />
        <Route path="/text/:id" element={<HomeScreen />} />
        <Route path="/image/:id" element={<HomeScreen />} />
        <Route path="/user" element={<IndividualUser />} />
        <Route path="/user/all" element={<AllUsers />} />
        <Route path="/user/all" element={<AllUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
