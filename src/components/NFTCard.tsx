import Link from 'next/link'
import React from 'react'

function NFTCard({id, url, price, title}: {
    id: string,
    url: string,
    price: string,
    title: string
}) {
  return (
    <Link href={`/asset/${id}`}
    className='cursor-pointer mx-2'
    >
    <div
    className='border rounded-xl h-58 w-44 '
    >
        <div className="">
        <img src={url} className='h-full w-full rounded-md'/>
        </div>
        <div className="flex flex-col w-full items-start px-2 pt-2 justify-between">
            <span className='text-sm'>{title}</span>
         
         <span className='text-sm'>
            {price}
        </span> 
        </div>
    </div>
    </Link>
  )
}

export default NFTCard