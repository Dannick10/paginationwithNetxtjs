"useclient";

import React, { useEffect, useState } from "react";

const Pagination = ({ date, quantityforpage }) => {
  const [currentPage, Setcurrentpage] = useState(1);
  const [actualdate, SetActualdata] = useState([]);
  const totalnumpage = 5;
  const [search, SetSearch] = useState("");

  useEffect(() => {
    const firstItem = currentPage * quantityforpage;
    const lastitem = firstItem - quantityforpage;
    SetActualdata(date.slice(lastitem, firstItem));
  }, [date, quantityforpage, currentPage]);

  const handleChangepage = (num) => {
    Setcurrentpage(num);
    window.scroll(0, 0);
  };


  const listButton = [];
  const pageTotal = Math.ceil(date.length / quantityforpage);
  let startPage = Math.max(currentPage - Math.floor(totalnumpage / 2), 1);
  let endPage = Math.min(startPage + totalnumpage - 1, pageTotal);

  if (endPage - startPage + 1 < totalnumpage) {
    startPage = Math.max(endPage - quantityforpage + 1, 1);
  }



  for (let i = startPage; i <= endPage; i++) {
    listButton.push(i);
  }


  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <input
        type="text"
        className="border-2 rounded-sm p-0.5"
        value={search}
        onChange={(e) => SetSearch(e.target.value)}
      />
      {actualdate &&
        actualdate.map((post) => (
          <div className="bg-gray-400 p-10 rounded-lg w-10/12 ">
            <h1 className="text-xl">{post.title}</h1>
            <p className="text-sm">{post.body}</p>
          </div>
        ))}

      <div className="flex gap-2">
        <button
          onClick={() => currentPage > 1 && handleChangepage(currentPage - 1)}
          className={`font-bold border border-blue-900  p-1 rounded-lg text-center text-blue-900 ${
            currentPage <= 1 && `border-gray-300 text-gray-300`
          }`}
        >
          &lt;
          Voltar 
        </button>

        {listButton.map((list) => (
          <>
            <button
              key={list}
              onClick={() => handleChangepage(list)}
              className={`font-bold border border-blue-900 w-8 p-1 rounded-lg text-center text-blue-900 ${
                list == currentPage && `bg-blue-400 text-white`
              }`}
            >
              {list}
            </button>
          </>
        ))}

      
        <button
          onClick={() =>
            currentPage < pageTotal && handleChangepage(currentPage + 1)
          }
          className={`font-bold border border-blue-900 p-1 rounded-lg text-center text-blue-900 ${
            currentPage >= pageTotal && `border-gray-300 text-gray-300`
          }`}
        >
          Avançar
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
