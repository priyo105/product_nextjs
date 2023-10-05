"use client"
import { useState } from "react"
import Header from "@/components/Header"
import fetchProducts from "@/apis/fetchProduct"
import ProductCard from '@/components/ProductCard'

export default async function Home() {

  const allProducts = await fetchProducts();

  return (
    <main className="overflow-hidden">

      <Header />


      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container items-center">
          <h1 className="text-4xl font-extrabold text-center self-center text-cyan-800">All Products  </h1>
        </div>

        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative mt-20">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products Here" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

        <section>

          <div className="product_grid_wrapper">
            {
              allProducts.products.map((product: any) => (
                <ProductCard product={product} />
              ))
            }

          </div>
        </section>



      </div>

    </main>
  )
}
