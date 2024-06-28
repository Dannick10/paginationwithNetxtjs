"use client";

import InfinityPagination from "@/components/InfinityPagination";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

export default function Home() {
  const [typePagination, SetTypePagination] = useState(true);
  const [loading, Setloading] = useState(false);

  const [posts, Setposts] = useState("");
  const [search, SetSearch] = useState("");
  const [itens, SetItens] = useState(10);

  useEffect(() => {
    const FetchPosts = async () => {
      Setloading(true);
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        Setposts(res);
      } catch {
        console.log("error");
      }
      Setloading(false);
    };
    FetchPosts();
  }, []);

  const handleNumberSelect = () => {
    const options = [];

    for (let i = 1; i <= 15; i++) {
      options.push(<option>{i}</option>);
    }

    return options;
  };


  const handleLoading = () => {
    return <div role="status" className="m-auto">
    <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div> 
  }

  return (
    <main className="flex min-h-screen flex-col justify-between gap-4">
      <aside className="m-2 flex justify-end w-9/1">
        <div className="relative overflow-hidden">
          <div
            className={`bg-black w-[50%] h-full top-0 left-0 rounded-lg  absolute -z-10 ${
              typePagination ? "left-0" : "left-[50%]"
            } transition-all`}
          ></div>

          <button
            className={`border-gray-300 border-2 p-2 rounded-s-lg  overflow-hidden w-40 ${
              typePagination ? "text-white" : "text-black"
            }`}
            onClick={() => SetTypePagination(true)}
          >
            Paginação
          </button>
          <button
            className={`border-gray-300 border-2 p-2 rounded-e-lg border-l-0 overflow-hidden w-40 ${
              typePagination ? "text-black" : "text-white"
            }`}
            onClick={() => SetTypePagination(false)}
          >
            Infinito
          </button>
        </div>
      </aside>

      <div className="flex items-center justify-between w-9/12 m-auto">
        <label className="flex gap-2">
          <input
            type="text"
            className="border-2 rounded-lg p-1"
            placeholder="pesquise os itens"
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
          />
        </label>
        <label>
          <select
            id="countries"
            class="bg-slate-100 text-gray-900 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
            value={itens}
            onChange={(e) => SetItens(e.target.value)}
          >
            {handleNumberSelect()}
          </select>
        </label>
      </div>

      {loading && handleLoading()}

      {typePagination ? (
        <Pagination date={posts} quantityforpage={itens} search={search} />
      ) : (
        <InfinityPagination
          date={posts}
          quantityforsteps={itens}
          search={search}
        />
      )}
    </main>
  );
}
