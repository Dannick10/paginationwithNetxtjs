"use client";

import InfinityPagination from "@/components/InfinityPagination";
import Pagination from "@/components/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [typePagination, SetTypePagination] = useState(true);

  const [posts, Setposts] = useState("");

  useEffect(() => {
    const FetchPosts = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        Setposts(res);
      } catch {
        console.log("error");
      }
    };

    FetchPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <aside className="m-2 flex justify-end">   
          <div className="relative overflow-hidden">

          <div className={`bg-black w-[50%] h-full top-0 left-0 rounded-lg  absolute -z-10 ${typePagination?'left-0':'left-[50%]'} transition-all`}></div>

          <button className={`border-gray-300 border-2 p-2 rounded-s-lg  overflow-hidden w-40 ${typePagination?'text-white':'text-black'}`} onClick={() => SetTypePagination(true)}>
            Paginação
          </button>
          <button className={`border-gray-300 border-2 p-2 rounded-e-lg border-l-0 overflow-hidden w-40 ${typePagination?'text-black':'text-white'}`} onClick={() => SetTypePagination(false)}>
            Infinito
          </button>
          </div>
      </aside>
       
      {typePagination ? (
        <Pagination date={posts} quantityforpage={10} />
      ) : (
        <InfinityPagination date={posts} quantityforsteps={10} />
      )}
    </main>
  );
}
