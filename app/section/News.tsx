import React from 'react'

const News:React.FC = () => {
  return (
    <>
      <div className=" p-7 md:p-8 news ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold  text-white">Newsletter updates!!</h2>
              <p className="text-lg text-white">
                Get unique &amp; trendy gift ideas and best offers delivered to your inbox.
              </p>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <form className="flex items-center gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter E-mail ID"
                  className="w-full px-4 py-2 border ml-10 bg-white text-gray-950 border-gray-300 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
