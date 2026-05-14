import React from 'react'
import { useState } from 'react'

function Header({ onSearchTerm, onClickSearch, onClickShowAll, onClickHideAll}) {

  return (
    <>
        <h1 class="text-4xl font-bold mb-4 text-center m-4">NewsApp</h1>
        <div className="search-bar" class="flex items-center justify-center mt-8">
            <input type="text" placeholder="Search news..." onChange={onSearchTerm} class="bg-white text-black placeholder:text-gray-500 border border-gray-300 rounded-md p-2 m-2"/>
            <button onClick={onClickSearch} class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 m-2">
              Search
            </button>
        </div>
        <div class="flex items-center justify-center mt-4">
            <button onClick={onClickShowAll} class="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 m-2">
              Show All
            </button>
            <button onClick={onClickHideAll} class="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 m-2">
              Hide
            </button>
        </div>    
    </>
  )
}

export default Header