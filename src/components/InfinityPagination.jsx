"use client";

import React from "react";
import { useState, useEffect } from "react";

const InfinityPagination = ({ date, quantityforsteps }) => {
  const [currentPage, Setcurrentpage] = useState(1);
  const [actualDate, SetActualDate] = useState([]);

  const [search, SetSearch] = useState("");
  const [filterPage, SetfilterPage] = useState([]);

  useEffect(() => {
    const filterPost =
      search.length > 0
        ? date.filter((post) => post.title.includes(search))
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

  console.log(pageTotal);
  return (
    <section className="flex flex-col items-center justify-between gap-4 min-h-screen">
      <label className="flex gap-2">
        Pesquisar
        <input
          type="text"
          className="border-2 rounded-sm p-0.5"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
        />
      </label>

      {actualDate &&
        actualDate.map((post) => (
          <div className="border-[.1em] border-gray-300 bg-white p-10 rounded-md w-9/12 h-4/6 flex flex-col justify-around " key={post.id}>
            <h1 className="text-xl text-gray-900">{post.title}</h1>
            <p className="text-sx text-gray-700">{post.body}</p>
          </div>
        ))}
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
