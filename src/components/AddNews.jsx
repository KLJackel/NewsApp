import React from 'react'

function AddNews({ onHeadingChange, onDescriptionChange, onSubmitNews }) {
  return (
    <>  
     <div class="flex flex-col items-center justify-center mt-8">
          <h2 class="text-3xl font-bold mb-4">Add News</h2>
          <form>
              <input type="text" placeholder="Heading" onChange={onHeadingChange} class="bg-white text-black placeholder:text-gray-500 border border-gray-300 rounded-md p-2 m-2"/>
              <input placeholder="Description" onChange={onDescriptionChange} class="bg-white text-black placeholder:text-gray-500 border border-gray-300 rounded-md p-2 m-2"/>
              <button type="button" onClick={onSubmitNews} class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 m-2">
                Add News
              </button>
          </form>
        </div>
      </>
  )
}

export default AddNews