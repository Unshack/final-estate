import { useEffect, useState } from "react";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Filters = () => {
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

    // const fetchListings = async () => {
    //   setLoading(true);
    //   setShowMore(false);
    //   const searchQuery = urlParams.toString();
    //   const res = await fetch(`/api/listing/get?${searchQuery}`);
    //   const data = await res.json();
    //   if (data.length > 8) {
    //     setShowMore(true);
    //   } else {
    //     setShowMore(false);
    //   }
    //   setListings(data);
    //   setLoading(false);
    // };

    // fetchListings();
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

  return (
    <div className='md:max-w-[80%] w-full mx-auto relative -mt-8 sm:-mt-20'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className='flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none'>
          <div className='flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0'>
            <div className='flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered'>
              <h1 className='font-bold'>Location</h1>
              <div className='flex-align-center gap-x-2'>
                <BiMap />
                <input
                  type='text'
                  id='searchTerm'
                  className='w-full bg-transparent border-0 outline-none'
                  placeholder='Enter location of the property'
                  value={sidebardata.searchTerm}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered'>
              <h1 className='font-bold'>Property Type</h1>
              <div className='flex-align-center gap-x-2'>
                <BiBuildings />
                <select
                  name=''
                  id=''
                  className='w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70'
                >
                  <option value='condors'>Condors</option>
                  <option value='offfice buildings'>Offfice Buildings</option>
                  <option value='apartments'>Apartments</option>
                  <option value='mansions'>Mansions</option>
                  <option value='real estate'>Real Estate</option>
                  <option value='penthouse'>Penthouse</option>
                  <option value='living room'>Living Room</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0'>
            <div className='flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered'>
              <h1 className='font-bold'>Price range</h1>
              <div className='flex-align-center gap-x-2'>
                <BiMoney />
                <select
                  name=''
                  id=''
                  className='w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70'
                >
                  <option value='$40,000 - $80,000'>$40,000 - $80,000</option>
                  <option value='$80,000 - $120,000'>$80,000 - $120,000</option>
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
            </div>
            <div className='flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light'>
              <h1 className='font-bold'>For</h1>
              <div className='flex-align-center gap-x-2'>
                <BiBriefcase />
                <select
                  name=''
                  id=''
                  className='w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark'
                >
                  <option value='sell'>Sell</option>
                  <option value='rent'>Rent</option>
                </select>
              </div>
            </div>
          </div>
          <Link to={"/search"}>
            <button className='w-full btn btn-primary md:w-fit'>search</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Filters;
