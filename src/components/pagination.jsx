"useclient";

import React, { useEffect, useState } from "react";

const Pagination = ({ date, quantityforpage, search }) => {
  const [currentPage, Setcurrentpage] = useState(1);
  const [actualdate, SetActualdata] = useState([]);
  const totalnumpage = 5;
  const [filterdDate, SetfilteredDate] = useState([]);

  useEffect(() => {
    const filtered =
      search.length > 0
        ? date.filter((post) =>
            post.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())
          )
        : date;
    SetfilteredDate(filtered);
    Setcurrentpage(1);
  }, [search, date]);

  useEffect(() => {
    const firstItem = currentPage * quantityforpage;
    const lastitem = firstItem - quantityforpage;
    SetActualdata(filterdDate.slice(lastitem, firstItem));
  }, [filterdDate, quantityforpage, currentPage]);

  const handleChangepage = (num) => {
    Setcurrentpage(num);
    window.scroll(0, 0);
  };

  const listButton = [];
  const pageTotal = Math.ceil(filterdDate.length / quantityforpage);
  let startPage = Math.max(currentPage - Math.floor(totalnumpage / 2), 1);
  let endPage = Math.min(startPage + totalnumpage - 1, pageTotal);

  if (endPage - startPage + 1 < totalnumpage) {
    startPage = Math.max(endPage - quantityforpage + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    listButton.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-between p-2 gap-4 min-h-screen">
      <div className="flex flex-col items-center gap-4">
        
        {actualdate &&
          actualdate.map((post, index) => (
            <div
              key={index}
              className="border-[.1em] border-gray-300 bg-white p-10 rounded-md w-9/12 h-4/6 flex flex-col justify-around "
            >
              <h1 className="text-xl text-gray-900">{post.title}</h1>
              <p className="text-sx text-gray-700">{post.body}</p>
            </div>
          ))}
      </div>

      <nav className="">
        <ul className="flex items-center text-sm">
          <li
            onClick={() => currentPage > 1 && handleChangepage(currentPage - 1)}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer  ${
              currentPage <= 1 && `border-gray-300 text-gray-300`
            }`}
          >
            &lt; Voltar
          </li>

          {listButton.map((list, i) => (
            <>
              <li
                key={i}
                onClick={() => handleChangepage(list)}
                className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer ${
                  list == currentPage && ` text-gray-900 bg-gray-300`
                }`}
              >
                {list}
              </li>
            </>
          ))}

          <li
            onClick={() =>
              currentPage < pageTotal && handleChangepage(currentPage + 1)
            }
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 ${
              currentPage >= pageTotal && `border-gray-300 text-gray-300`
            }`}
          >
            Avançar &gt;
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
