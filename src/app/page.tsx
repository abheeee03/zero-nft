import React from 'react'
import { NFT } from '@/example';
import NFTCard from '@/components/NFTCard';



function Home() {
  return (
    <>
    <div className="min-h-screen w-full py-20">
          <h1 className='mt-3 text-xl px-10'>Trending Now</h1>
          
          <div className="lg:grid lg:grid-cols-6 flex flex-wrap items-center justify-center gap-4 px-10 mt-8">
              {
                NFT.map(nft => <NFTCard id={nft.id} key={nft.id} title={nft.name} url={nft.image} price={nft.price} /> )
              }
          </div>
        
    </div>
    </>
  )
}

export default Home