import { FiCheck, FiLayers, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

const Speciality = () => {
  return (
    <div className='pt-10 pb-16'>
      <div className='flex flex-wrap gap-10'>
        <div className='flex-1 basis-[20rem]'>
          <h1 className='sub-heading'>about us</h1>
          <h1 className='heading'>we specialize in quality home renovations</h1>
          <p className='mt-3'>
            At Gallant, we believe that your home should be a reflection of your
            style and needs, and our dedication to quality craftsmanship and
            attention to detail ensures that each renovation we undertake
            results in a space that truly enhances your living experience
          </p>
          <div className='mt-4'>
            <div className='flex-align-center gap-x-2'>
              <div className='icon-box text-primary !bg-primary/20'>
                <FiCheck />
              </div>
              <p>Outstanding Property</p>
            </div>
            <div className='mt-2 flex-align-center gap-x-2'>
              <div className='icon-box text-primary !bg-primary/20'>
                <FiCheck />
              </div>
              <p>Professional and experienced human resource</p>
            </div>
            <div className='mt-2 flex-align-center gap-x-2'>
              <div className='icon-box text-primary !bg-primary/20'>
                <FiCheck />
              </div>
              <p>Provide the best services for users</p>
            </div>
            <div className='mt-2 flex-align-center gap-x-2'>
              <div className='icon-box text-primary !bg-primary/20'>
                <FiCheck />
              </div>
              <p>Modern city locations and exceptional lifestyle</p>
            </div>
            <Link to="/about-us">
              <button className='mt-4 btn btn-primary'>read more</button>
            </Link>
          </div>
        </div>
        <div className='flex-1 basis-[20rem]'>
          <div className='relative'>
            <img
              src='/images/property (5).jpg'
              alt=''
              className='rounded-lg w-full sm:h-[400px] object-cover'
            />
            <div className='absolute -bottom-10 sm:bottom-5 -left-2 md:-left-20'>
              <div className='p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light'>
                <h1>We have been serving our customers for over 70 years</h1>
                <div className='icon-box text-primary !bg-primary/20'>
                  <FiUsers />
                </div>
              </div>
              <div className='p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light'>
                <h1>
                  Working with the symbol and reputation of trustworthy trait
                </h1>
                <div className='icon-box text-primary !bg-primary/20'>
                  <FiLayers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
