"use client";
import Link from "next/link";
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
    return (
      <div role="status" className="m-auto">
        <svg
          aria-hidden="true"
          className="inline w-10 h-10 text-gray-200 animate-spin fill-black"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  };

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
            className="bg-slate-100 text-gray-900 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
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
      <footer className="p-2 flex items-center justify-center border-t-2">
        <div className="flex items-center flex-col-reverse space-y-4 justify-between w-9/12 md:flex-row">
          <p className="text-xs text-gray-600">Autor by Daniel Rocha &copy; Frontend develop 2024</p>
            <p className="text-xs font-bold">Nextjs</p>
          <Link href={'https://github.com/Dannick10/paginationwithNetxtjs'} target="_blank">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Github
            </button>
          </Link>
        </div>
      </footer>
    </main>
  );
}
