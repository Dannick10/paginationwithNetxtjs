"use client";

import React from "react";
import { useState, useEffect } from "react";

const InfinityPagination = ({ date, quantityforsteps, search }) => {
  const [currentPage, Setcurrentpage] = useState(1);
  const [actualDate, SetActualDate] = useState([]);

  const [filterPage, SetfilterPage] = useState([]);

  useEffect(() => {
    const filterPost =
      search.length > 0
        ? date.filter((post) =>
            post.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())
          )
        : date;

    SetfilterPage(filterPost);
    Setcurrentpage(1);
  }, [search, date]);

  useEffect(() => {
    const initialPage = currentPage * quantityforsteps;
    const endPage = 0;
    SetActualDate(filterPage.slice(endPage, initialPage));
  }, [date, currentPage, quantityforsteps, filterPage]);

  const handlePageFetch = () => {
    Setcurrentpage(currentPage + 1);
  };

  const pageTotal = Math.ceil(filterPage.length / quantityforsteps);

  return (
    <section className="flex flex-col items-center justify-between p-2 gap-4 min-h-screen">
       <div className="flex flex-col items-center gap-4">
        
        {actualDate &&
          actualDate.map((post, index) => (
            <div
              key={index}
              className="border-[.1em] border-gray-300 bg-white p-10 rounded-md w-9/12 h-4/6 flex flex-col justify-around "
            >
              <h1 className="text-xl text-gray-900">{post.title}</h1>
              <p className="text-sx text-gray-700">{post.body}</p>
            </div>
          ))}
      </div>
      <nav>
        {currentPage <= pageTotal ? (
          <>
            <button
              className="border-gray-800 text-gray-900 border-[.1em] p-2 px-7 rounded-xl text-sl hover:bg-gray-800 hover:text-white"
              onClick={handlePageFetch}
            >
              Carregar
            </button>
          </>
        ) : (
          ""
        )}
      </nav>
    </section>
  );
};

export default InfinityPagination;
