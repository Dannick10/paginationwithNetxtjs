'use client'

import Pagination from "@/components/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts,Setposts] = useState('')

  useEffect(() => {

    const FetchPosts = async () => {
      try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await data.json()
        Setposts(res)
      } catch {
        console.log('error')
      }
    }

    FetchPosts()

  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Pagination</h1>
       
        <Pagination date={posts} quantityforpage={10}/>
        
    </main>
  );
}
