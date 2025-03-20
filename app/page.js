
'use client'
import {useState} from 'react'
import { useRouter } from "next/navigation";
import Link from 'next/link';
import Layout from '@/components/Layout';



// export default function Home() {
//   const router = useRouter(); // Initialize the router
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//       {/* <Link href="/about" >Go to About Page</Link> */}
//       <button
//       type="button"
//       onClick={() => router.push("/about", {scroll: false})}
//       className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
//     >
//       About Us
//     </button>
//     </div>
//   )
 
// }

export default function Home() {
  return (
    <Layout>
      <div className=" w-screen h-screen flex items-center justify-center bg-black">
          <div className="text-center space-y-5 max-w-2xl z-10">
              <p className="py-1 px-2 bg-zinc-900/40 backdrop-blur-sm font-light rounded-full text-white inline-block">
                  Join 7,000+ Users
              </p>
              <div className="space-y-3">
                  <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent h-20 font-semibold">
                      Wecome to HRD Library
                  </h1>
                  <h3 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 text-transparent h-20 font-semibold">
                      For Web Developers
                  </h3>
              </div>
              <p className="text-gray-400 text-lg text-pretty">
                  You, 1 second ago + Uncommitted changes
              </p>
          </div>
      </div>
      </Layout>
  );
}