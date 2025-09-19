import NFTPage from '@/components/NFTPage'
import { NFT } from '@/example'
import React from 'react'

async function Asset({params}: {
    params: {
        id: string
    }
}) {
  const nftID = (await params).id
  const nftInfo = NFT.find((x)=>x.id === nftID)
  console.log(nftInfo);
  if(!nftInfo){
    return<>
    <div className="">NFT NOT FOUND!</div>
    </>
  }

  return (
    <NFTPage
    creator={nftInfo.creator}
    category={nftInfo.category}
    price={nftInfo.price}
    attributes={nftInfo.attributes}
    listed={nftInfo.listed}
    image={nftInfo.image}
    id={nftInfo.id}
    description={nftInfo.description}
    owner={nftInfo.owner}
    name={nftInfo.name}
    />
  )
}

export default Asset