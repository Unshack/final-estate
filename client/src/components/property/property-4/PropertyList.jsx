import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import SingleProductCard from "../../common/page-components/SingleProductCard";
import { useSelector } from "react-redux";
import { dataStore } from "../../../redux/user/dataSlice";

const PropertyList = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  offerListings;
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div className='pt-10'>
      {offerListings && offerListings.length > 0 && (
        <div className='flex flex-wrap gap-4 mt-8'>
          {offerListings?.map((listing) => (
            <SingleProductCard listing={listing} key={listing._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyList;
