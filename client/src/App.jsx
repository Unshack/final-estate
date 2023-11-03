import { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/common/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import { closeDropdown } from "./redux/user/userSlice";
import Loader from "./components/common/Loader";

export default function App() {
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <BrowserRouter>
        <Navbar />
        <div
          className='min-h-screen pb-40'
          onClick={handleCloseDropdown}
          onMouseOver={() => dispatch(closeDropdown())}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/search' element={<Search />} />
            <Route path='/listing/:listingId' element={<Listing />} />
            <Route element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/create-listing' element={<CreateListing />} />
              <Route
                path='/update-listing/:listingId'
                element={<UpdateListing />}
              />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
