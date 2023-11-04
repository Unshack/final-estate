import { Link } from "react-router-dom";
import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import CardHoverIcons from "./page-components/CardHoverIcons";
import CardLabels from "./page-components/CardLabels";

export default function ListingItem({ listing, basis }) {
  return (
    <div
      className={`flex-1 ${
        basis ? basis : "basis-[18rem]"
      } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group `}
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
              <p>{listing.name}</p>
            </div>
          </div>
        </Link>
      </div>
      {/* <CardLabels purpose={purpose} distance={distance} /> */}
      

      {/* <div className='p-3 flex flex-col gap-2 w-full'>
            <p className='truncate text-lg font-semibold text-slate-700'>
              {listing.name}
            </p>
            <div className='flex items-center gap-1'>
              <MdLocationOn className='h-4 w-4 text-green-700' />
              <p className='text-sm text-gray-600 truncate w-full'>
                {listing.address}
              </p>
            </div>
            <p className='text-sm text-gray-600 line-clamp-2'>
              {listing.description}
            </p>
            <p className='text-slate-500 mt-2 font-semibold '>
              $
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <div className='text-slate-700 flex gap-4'>
              <div className='font-bold text-xs'>
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </div>
              <div className='font-bold text-xs'>
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </div>
            </div>
          </div> */}
    </div>
  );
}
