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
  AboutTwo,
  Blog,
  BlogFour,
  BlogThree,
  BlogTwo,
  Contact,
  CreateListing,
  Home,
  HomeThree,
  HomeTwo,
  Listing,
  Profile,
  Property,
  PropertySix,
  PropertyThree,
  Search,
  Services,
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
            <Route path='/home-2' element={<HomeTwo />} />
            <Route path='/home-3' element={<HomeThree />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/about-2' element={<AboutTwo />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/search' element={<Search />} />
            <Route path='/services-2' element={<Services />} />
            <Route path='/services' element={<ServicesTwo />} />
            <Route path='/listing/:listingId' element={<Listing />} />
            <Route path='/property' element={<Property />} />
            <Route path='/property-3' element={<PropertyThree />} />
            <Route path='/property-6' element={<PropertySix />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog-2' element={<BlogTwo />} />
            <Route path='/blog-3' element={<BlogThree />} />
            <Route path='/blog-4' element={<BlogFour />} />
            <Route path='/contact' element={<Contact />} />
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
