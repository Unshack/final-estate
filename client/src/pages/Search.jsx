import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListingItem from "../components/common/ListingItem";
import { priceRanges, propertyTypes, socials } from "../data/dummyData";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  const navigate = useNavigate();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const typeFromUrl = urlParams.get("type");
    const parkingFromUrl = urlParams.get("parking");
    const furnishedFromUrl = urlParams.get("furnished");
    const offerFromUrl = urlParams.get("offer");
    const sortFromUrl = urlParams.get("sort");
    const orderFromUrl = urlParams.get("order");

    if (
      searchTermFromUrl ||
      typeFromUrl ||
      parkingFromUrl ||
      furnishedFromUrl ||
      offerFromUrl ||
      sortFromUrl ||
      orderFromUrl
    ) {
      setSidebardata({
        searchTerm: searchTermFromUrl || "",
        type: typeFromUrl || "all",
        parking: parkingFromUrl === "true" ? true : false,
        furnished: furnishedFromUrl === "true" ? true : false,
        offer: offerFromUrl === "true" ? true : false,
        sort: sortFromUrl || "created_at",
        order: orderFromUrl || "desc",
      });
    }

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      if (data.length > 8) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = (e) => {
    if (
      e.target.id === "all" ||
      e.target.id === "rent" ||
      e.target.id === "sale"
    ) {
      setSidebardata({ ...sidebardata, type: e.target.id });
    }

    if (e.target.id === "searchTerm") {
      setSidebardata({ ...sidebardata, searchTerm: e.target.value });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setSidebardata({
        ...sidebardata,
        [e.target.id]:
          e.target.checked || e.target.checked === "true" ? true : false,
      });
    }

    if (e.target.id === "sort_order") {
      const sort = e.target.value.split("_")[0] || "created_at";

      const order = e.target.value.split("_")[1] || "desc";

      setSidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebardata.searchTerm);
    urlParams.set("type", sidebardata.type);
    urlParams.set("parking", sidebardata.parking);
    urlParams.set("furnished", sidebardata.furnished);
    urlParams.set("offer", sidebardata.offer);
    urlParams.set("sort", sidebardata.sort);
    urlParams.set("order", sidebardata.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const startIndex = numberOfListings;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/api/listing/get?${searchQuery}`);
    const data = await res.json();
    if (data.length < 9) {
      setShowMore(false);
    }
    setListings([...listings, ...data]);
  };

  return (
    <div className='pt-20 px-[3%] md:px-[6%]'>
      <div className='flex-col gap-4 flex-center-between md:flex-row'>
        <div className='w-full flex-center-between'>
          <div className='gap-2 flex-align-center'></div>
          <p>Showing 01 - 08 of 28 resuts</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='w-full gap-4 flex-center-between'
        >
          <select
            onChange={handleChange}
            defaultValue={"created_at_desc"}
            id='sort_order'
            className='w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark'
          >
            <option value='regularPrice_desc'>Price high to low</option>
            <option value='regularPrice_asc'>Price low to hight</option>
            <option value='createdAt_desc'>Latest</option>
            <option value='createdAt_asc'>Oldest</option>
          </select>
          <input
            type='text'
            id='searchTerm'
            className='border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full'
            placeholder='Enter Keywords..'
            value={sidebardata.searchTerm}
            onChange={handleChange}
          />
          {
            <>
              <div className='lg:hidden'>
                <button className='-ml-2 icon-box relative before:w-full before:absolute before:h-full before:rounded-full before:bg-secondary hover:!bg-[#003b5b] before:animate-ping bg-secondary'>
                  <BiSearch className='text-white' />
                </button>
              </div>

              <div className='hidden lg:block'>
                <button className='btn bg-secondary text-white p-3 !rounded-none uppercase hover:bg-primary/80'>
                  Search
                </button>
              </div>
            </>
          }
        </form>
      </div>
      <div className='grid md:grid-cols-4 gap-x-14 mt-5'>
        <div className='md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 '>
          <div className='flex flex-wrap gap-4'>
            {!loading && listings.length === 0 && (
              <p className='text-xl text-slate-700'>No listing found!</p>
            )}
            {loading && (
              <p className='text-xl text-slate-700 text-center w-full'>
                Loading...
              </p>
            )}

            {!loading &&
              listings &&
              listings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}

            {showMore && (
              <button
                onClick={onShowMoreClick}
                className='text-green-700 hover:underline p-7 text-center w-full'
              >
                Show more
              </button>
            )}
          </div>
        </div>
        <div className=' md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0'>
          <div>
            <div>
              <div className='flex-center-between border-b dark:border-dark md:hidden'>
                <div className='icon-box md:hidden'>{/* <FiDelete /> */}</div>
                <p className='uppercase'>Filters</p>
              </div>
              <div className='p-3 border dark:border-dark'>
                <h1 className='font-semibold'>Advanced Search</h1>
                <div className='mt-3'>
                  <select name='' id='' className='filter'>
                    <option value=''>Categories</option>
                    <option value='condors'>Condors</option>
                    <option value='offfice buildings'>Offfice Buildings</option>
                    <option value='apartments'>Apartments</option>
                    <option value='mansions'>Mansions</option>
                    <option value='real estate'>Real Estate</option>
                    <option value='penthouse'>Penthouse</option>
                    <option value='living room'>Living Room</option>
                  </select>
                </div>
                <div className='mt-3'>
                  <select name='' id='' className='filter'>
                    <option value=''>Price Range</option>
                    <option value='$40,000 - $80,000'>$40,000 - $80,000</option>
                    <option value='$80,000 - $120,000'>
                      $80,000 - $120,000
                    </option>
                    <option value='$120,000 - $200,000'>
                      $120,000 - $200,000
                    </option>
                    <option value='$200,000 - $300,000'>
                      $200,000 - $300,000
                    </option>
                    <option value='$300,000 - $500,000'>
                      $300,000 - $500,000
                    </option>
                    <option value='$500,000 - $1000,000'>
                      $500,000 - $1000,000
                    </option>
                  </select>
                </div>
                <div className='mt-3'>
                  <select name='' id='' className='filter'>
                    <option value=''>Purpose</option>
                    <option value='sell'>Sell</option>
                    <option value='rent'>Rent</option>
                  </select>
                </div>
                <div className='gap-2 mt-3 flex-align-center'>
                  <select name='' id='' className='filter'>
                    <option value=''>Bathrooms</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>Above 4</option>
                  </select>
                  <select name='' id='' className='filter'>
                    <option value=''>Beds</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select>
                </div>
                {/* <button className='btn bg-secondary w-full mt-4 text-slate-200 !rounded-none'>
                  search property
                </button> */}
              </div>
              {/* <Type /> */}
              <div className='p-3 mt-8 border dark:border-dark'>
                <h1 className='font-semibold'>Property Type</h1>
                {propertyTypes.map(({ id, name, number }) => (
                  <div key={id} className='mt-3 filter flex-center-between'>
                    <div className='input-radio'>
                      <input type='radio' name='type' id={name} />
                      <label htmlFor={name} className='capitalize'>
                        {name}
                      </label>
                    </div>
                    <p>({number})</p>
                  </div>
                ))}
              </div>
              {/* <PriceRange /> */}
              <div className='p-3 mt-8 border dark:border-dark'>
                <h1 className='font-semibold'>Property Type</h1>
                {priceRanges.map(({ id, name, range }) => (
                  <div key={id} className='mt-3 filter flex-center-between'>
                    <div className='input-radio'>
                      <input type='radio' name='price' id={name} />
                      <label htmlFor={name} className='capitalize'>
                        {name}
                      </label>
                    </div>
                    <p>({range})</p>
                  </div>
                ))}
              </div>

              {/* <SocialIcons /> */}
              <div className='p-3 mt-8 border dark:border-dark'>
                <h1 className='font-semibold'>Sociall Media</h1>
                <div className='flex-wrap gap-2 mt-3 flex-align-center'>
                  {socials.map((icon, i) => (
                    <div
                      key={i}
                      className='icon-box bg-slate-100 dark:bg-dark-light hover:!bg-primary hover:text-white'
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* <CTA /> */}
              <div className='relative mt-8 h-[300px]'>
                <img
                  src='/images/property (14).jpg'
                  alt=''
                  className='w-full h-full'
                />
                <div className='absolute top-0 left-0 flex flex-col justify-end w-full h-full p-6 bg-black/50'>
                  <h1 className='heading !text-slate-100'>
                    find your dream house
                  </h1>
                  <h1 className='text-slate-100'>$2, 999</h1>
                  <Link to='/property'>
                    <button className='mt-3 btn btn-primary'>shop now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
