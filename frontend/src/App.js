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
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BE_URL } from "./const";

function App() {
  const dispatch = useDispatch();
  const Posts = useSelector((state) => state.Posts);
  const Users = useSelector((state) => state.Users);

  const {
    User: { id, token },
  } = useSelector((state) => state.currentUser);

  useEffect(() => {
    (async () => {
      await axios.get(`${BE_URL}/`);
    })();
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getAllPosts());
      dispatch(getAllUsers());
    }
  }, [token]);

  useEffect(() => {
    if (id) {
      dispatch(addPresentUser(id));
    }
  }, [Users.status]);

  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<HomeScreen />} />} />
        <Route
          path="/modal"
          element={<PrivateRoute element={<HomeScreen />} />}
        />
        <Route
          path="/modal/:id"
          element={<PrivateRoute element={<HomeScreen />} />}
        />
        <Route
          path="/text/:id"
          element={<PrivateRoute element={<HomeScreen />} />}
        />
        <Route
          path="/image/:id"
          element={<PrivateRoute element={<HomeScreen />} />}
        />
        <Route
          path="/user/:id"
          element={<PrivateRoute element={<IndividualUser />} />}
        />
        <Route
          path="/user/:id/following"
          element={<PrivateRoute element={<IndividualUser />} />}
        />
        <Route
          path="/user/:id/followers"
          element={<PrivateRoute element={<IndividualUser />} />}
        />
        <Route
          path="/user/all"
          element={<PrivateRoute element={<AllUsers />} />}
        />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing/login" element={<LandingPage />} />
        <Route path="/landing/signup" element={<LandingPage />} />
      </Routes>
      <div className="desktop-hide">
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
