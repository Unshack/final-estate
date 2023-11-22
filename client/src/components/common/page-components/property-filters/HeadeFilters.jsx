import React from "react";
import { useDispatch } from "react-redux";

const HeadeFilters = ({ layout, setLayout }) => {
  const dispatch = useDispatch();
  return (
    <div className='flex-col gap-4 flex-center-between md:flex-row'>
      <div className='w-full flex-center-between'>
        <div className='gap-2 flex-align-center'></div>
        <p>Showing 01 - 08 of 28 resuts</p>
      </div>
      <div className='w-full gap-4 flex-center-between'>
        <select
          name=''
          id=''
          className='w-full px-3 py-2 bg-white border outline-none dark:border-dark dark:bg-main-dark'
        >
          <option value=''>Sorty by</option>
          <option value='latest'>Latest</option>
          <option value='cheapest'>Cheapest</option>
          <option value='expensive'>Expensive</option>
        </select>
        <input
          type='text'
          className='border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full'
          placeholder='Enter Keywords..'
        />
      </div>
    </div>
  );
};

export default HeadeFilters;
