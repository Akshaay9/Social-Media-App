import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Screens/NavBar/Index";
import HomeScreen from "./Screens/HomeScreen/Index";
import IndividualUser from "./Screens/UserScreen/Index";
import AllUsers from "./Screens/AllUsers/Index";
import "./App.css";
import BottomNav from "./Screens/BottomNav/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./features/Posts/PostSlice";
import { addPresentUser, getAllUsers } from "./features/Users/UserSlice";
import LandingPage from "./Screens/UserAccount/LandingPage";
import { useLocation } from "react-router";

function App() {
  const dispatch = useDispatch();
  const Posts = useSelector((state) => state.Posts);
  const Users = useSelector((state) => state.Users);
  
  const {
    User: { _id },
  } = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (_id != undefined) {
      dispatch(addPresentUser(_id));
    }
  }, [Users.Allusers]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/modal" element={<HomeScreen />} />
        <Route path="/modal/:id" element={<HomeScreen />} />
        <Route path="/text/:id" element={<HomeScreen />} />
        <Route path="/image/:id" element={<HomeScreen />} />
        <Route path="/user/:id" element={<IndividualUser />} />
        <Route path="/user/all" element={<AllUsers />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <div className="desktop-hide">
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
export default App;
