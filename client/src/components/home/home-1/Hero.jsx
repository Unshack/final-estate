import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";

const Hero = () => {
  return (
    <div
      className='relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center'
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className='absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]'></div>
      <div className='flex-1 basis-[20rem]'>
        <h1 className='text-4xl font-bold capitalize md:text-5xl'>
          property consisting <br /> land and buildings
        </h1>
        <div className='pl-3 mt-5 border-l-4 border-primary'>
          <p>
            Gallant Homes is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </p>
        </div>
        <Link to={"/search"}>
          <div className='mt-6 flex-align-center gap-x-3'>
            <button className='btn btn-primary'>find property</button>
            <button className='icon-box !opacity-100 relative before:w-full before:absolute before:h-full before:rounded-full before:bg-[#0176b4] hover:!bg-[#003b5b] before:animate-ping bg-[#035581]'>
              <BiPlay />
            </button>
          </div>
        </Link>
        <div className='mt-8 text-center flex-align-center gap-x-6'>
          <div>
            <h1 className='text-2xl font-bold'>
              12k <span className='text-sm text-primary'>+</span>
            </h1>
            <p>Requested Projects</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold'>
              15k <span className='text-sm text-primary'>+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
          <div>
            <h1 className='text-2xl font-bold'>
              100 <span className='text-sm text-primary'>+</span>
            </h1>
            <p>Served Clients</p>
          </div>
        </div>
      </div>
      <div className='flex-1 basis-[20rem]'>
        <img src='/images/hero-4.png' alt='' className='w-full' />
      </div>
    </div>
  );
};

export default Hero;
