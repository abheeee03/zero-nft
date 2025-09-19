import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'
import CopyButton from './CopyButton'

type NftObject = {
   id: string,
   name: string,
    description: string,
    image: string,
    creator: string,
    owner: string,
    price: string,
    category: string,
    attributes: object[],
    listed: boolean
}

function NFTPage(nft: NftObject) {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen w-full py-20 md:px-5'>
        <div className="h-full w-full flex items-center justify-between md:flex-nowrap flex-wrap md:gap-0 gap-10">
            <div className="h-full w-full px-10 flex items-center justify-center mt-5">
                <img src={nft.image} alt={nft.name} className='rounded-sm'/>
            </div>
            <div className="h-full w-full px-10 flex items-start flex-col justify-center gap-2">
                
                <h1 className='text-4xl'>{nft.name}</h1>
                <p>{nft.description}</p>
                <span className='border text-xs border-primary/40 px-2 py-1 rounded-full'>
                    {nft.category}
                </span>
                <div className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-10">
                <div>
                    Creator : <br /> {nft.creator.slice(0, 13)}...
                    <span className='ml-4'>
                    <CopyButton text={nft.creator}/>
                    </span>
                </div>
                <div className=''>
                    Owned By : <br /> {nft.owner.slice(0, 13)}...
                    <span className="ml-5">

                    <CopyButton text={nft.owner}/>
                    </span>
                </div>
                </div>

                <div className="mt-5 md:mt-0">
                    <div className="text-sm">Buy for</div>
                    <div className="text-3xl font-medium">
                        {nft.price}
                    </div>
                </div>

                <Button className='mt-5' size={"lg"}>
                    Buy Now
                </Button>
 
            </div>

        </div>
    </div>
    </>
  )
}

export default NFTPage