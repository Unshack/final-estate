import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardHoverIcons from "./CardHoverIcons";

const SingleProductCard = ({ listing, basis }) => {
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className='group !opacity-100 overflow-hidden relative'>
        <Link to={`/listing/${listing._id}`} className='!opacity-100'>
          <img
            src={
              listing.imageUrls[0] ||
              "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
            }
            alt='listing cover'
            className='w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a'
          />
          <CardHoverIcons />

          <div className='absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent'>
            <div className='text-white flex-align-center gap-x-2'>
              <BiMap />
              <p>{listing.address}</p>
            </div>
          </div>
        </Link>
      </div>
      <div className='absolute top-2 left-2 flex-align-center gap-x-2'>
        <span className='py-[3px] px-3 text-sm rounded-full capitalize text-white bg-primary'>
          1.2km away
        </span>
        <span className='py-[3px] px-3 text-sm rounded-full capitalize text-white bg-secondary'>
          {listing.type}
        </span>
      </div>
      <div className='p-3'>
        <div className='group-hover:text-primary transition-a'>
          <h1 className='text-lg font-bold capitalize'>{listing.name}</h1>
        </div>

        <div className='flex justify-between mt-3'>
          <div className='flex-align-center gap-x-2'>
            <div className='icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary'>
              <BiBed />
            </div>
            <p className='text-sm font-bold'>
              {" "}
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Beds `
                : `${listing.bedrooms} Bed `}{" "}
            </p>
          </div>
          <div className='flex-align-center gap-x-2'>
            <div className='icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary'>
              <BiTab />
            </div>
            <p className='text-sm font-bold'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Baths `
                : `${listing.bathrooms} Bath `}
            </p>
          </div>
          <div className='flex-align-center gap-x-2'>
            <div className='icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary'>
              <BiMapAlt />
            </div>
            <p className='text-sm font-bold'>3000 sq ft</p>
          </div>
        </div>
        <div className='mt-4 flex-center-between'>
          <h1 className='text-lg font-semibold text-primary'>
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / Month"}
          </h1>
          <Link to={`/listing/${listing._id}`} className='!opacity-100'>
            <button className='btn btn-secondary'>details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
