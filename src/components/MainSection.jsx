import React from 'react'

function  MainSection ({id, heading, description, className}) {
  return (
   <div className={className} key={id} class="bg-white text-black rounded-md p-4 m-4 mb-4 w-80 h-40">
     <h1 class="text-2xl font-bold mb-2">{heading}</h1>
     <p class="text-gray-600">{description}</p>
   </div>
  )
}

export default MainSection