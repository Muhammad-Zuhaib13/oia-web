import React, { useState, useEffect } from 'react';

const Pagination = ({ locale, page, setPage, totalItems }:any) => {
  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
  const [num, setNum] = useState(1); // Current page number

  // Update the pages whenever totalPages changes
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Generate page numbers

  function Next() {
    if (num < totalPages) {
      setNum(num + 1);
    }
  }

  function Back() {
    if (num > 1) {
      setNum(num - 1);
    }
  }

  useEffect(() => {
    setPage(num); // Update the parent component's page state whenever num changes
  }, [num, setPage]);

  return (
    <div className={`flex ${locale === "en" ? "flex-row" : "flex-row-reverse"} justify-between sm:h-[48px]`}>
      <button
        onClick={Back}
        className="prev sm:w-[48px] sm:h-[48px] w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]"
      >
        <svg className={`w-4 h-4 fill-current `} viewBox="0 0 20 20">
          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </button>
      <div className={`flex sm:gap-[29px] gap-[6px] ${locale === "en" ? "flex-row" : "flex-row-reverse"}`}>
        {pages.map((pg) => (
          <button
            key={pg}
            onClick={() => setNum(pg)}
            className={`sm:h-[48px] rounded-full flex justify-center items-center 
            sm:w-[48px] w-[25px] h-[25px] md:text-[17px] text-[9px] leading-[11px] md:leading-[21px] 
            ${num === pg ? 'bg-white text-[#202020] font-bold border-[#EEEEEE] border-[1px] font-DINABold' : 'text-[#848484] font-medium font-DINAMedium bg-[#fff]'}`}
          >
            {pg}
          </button>
        ))}
      </div>
      <button
        onClick={Next}
        className="next sm:w-[48px] sm:h-[48px] w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]"
      >
        <svg className={`w-4 h-4 fill-current `} viewBox="0 0 20 20">
          <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
