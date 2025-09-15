import React from 'react'

function NFTCard({url, price, title}: {
    url: string,
    price: string,
    title: string
}) {
  return (
    <div
    className='border rounded-sm h-56 w-44 '
    >
        <div className="">
        <img src={url} className='h-full w-full'/>
        </div>
        <div className="px-4 mt-2">
         <strong className='text-xl'>
            {price}
        </strong> 
        </div>
    </div>
  )
}

export default NFTCard