import { useEffect, useState } from "react";
import ListingItem from "../../common/ListingItem";

const PropertyList = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [offerListings, setOfferListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?page=${pageNumber}`);
        const data = await res.json();

        setOfferListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, [pageNumber]);

  return (
    <div className='pb-16'>
      <div className='flex flex-wrap gap-4'>
        {offerListings.map((listing) => (
          <ListingItem listing={listing} key={listing._id} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
