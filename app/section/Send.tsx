import React from 'react'

const Send: React.FC = () => {
  return (
    <>
      <div className='m-4'>
        <h2 className='pl-4'>Send Surprises Overseas</h2>
        <div className='flex justify-center sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0'>
          <div className='sm:w-1/2 w-full'>
            <img src="/images/send1.webp" alt="" className='w-full' />
          </div>
          <div className='sm:w-1/2 w-full'>
            <img src="/images/send2.webp" alt="" className='w-full' />
          </div>
        </div>

 <div className='col-span-1 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4'>
          <div className='m-4'>
            <img src="/images/send3.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>USA</p>
          </div>
          <div className='m-4'>
            <img src="/images/send4.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>UAE</p>
          </div>
          <div className='m-4'>
            <img src="/images/send5.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>Canada</p>
          </div>
          <div className='m-4'>
            <img src="/images/send6.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>Australia</p>
          </div>
          <div className='m-4'>
            <img src="/images/send7.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>UK</p>
          </div>
          <div className='m-4'>
            <img src="/images/send8.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>Germany</p>
          </div>
          <div className='m-4'>
            <img src="/images/send4.webp" alt="" className='w-40 h-40' />
            <p className='font-light text-lg text-center'>Singapore</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Send
