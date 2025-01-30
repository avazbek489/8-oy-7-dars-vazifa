import React from 'react'

function Post() {
  return (
    <div className='mt-[90px] p-8 flex justify-center'>
      <form className='w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6'>
        <h2 className='text-center mt-4 mb-4 text-2xl font-serif font-bold'>POST MUTATION</h2>
        <div>
          <input
            className='w-full px-4 py-3 border-gray-300 border rounded-lg focus:outline-none text-lg'
            type="text"
            placeholder="Post Title"
          />
        </div>
        <div>
          <input
            className='w-full px-4 py-3 border-gray-300 border rounded-lg focus:outline-none text-lg'
            type="email"
            placeholder="Your Email"
          />
        </div>
        <button
          className='w-full bg-green-500 cursor-pointer text-white py-3 rounded-lg hover:bg-green-600 transition'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Post
