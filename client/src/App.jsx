import { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/common/PrivateRoute";
import { closeDropdown } from "./redux/user/userSlice";
import Loader from "./components/common/Loader";
import NewsLetter from "./components/common/NewsLetter";
import Footer from "./components/common/Footer";
import BackToTopButton from "./components/common/BackToTopButton";
import Dropdown from "./components/common/DropDown";
import {
  About,
  CreateListing,
  Home,
  Listing,
  Profile,
  Search,
  ServicesTwo,
  SignIn,
  SignUp,
  UpdateListing,
} from "./pages";

export default function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      <BrowserRouter>
        {showLoader && <Loader />}
        <Navbar />
        <Dropdown />

        <div
          className='min-h-screen pb-40'
          onClick={handleCloseDropdown}
          onMouseOver={() => dispatch(closeDropdown())}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/search' element={<Search />} />
            <Route path='/services' element={<ServicesTwo />} />
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
        <div className='px-[2%] md:px-[6%] bg-card-dark border border-card-dark'>
          <NewsLetter />
          <div className='mt-20'>
            <Footer />
          </div>
        </div>
        <BackToTopButton showButton={showButton} />
      </BrowserRouter>
    </div>
  );
}
