import React from 'react'
import Navbar from '../components/Navbar'
import { createConfig, http, injected, WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'viem/chains';
import { metaMask, safe } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import WalletProvider from '@/components/WalletProvider';
import { NFT } from '@/example';
import NFTCard from '@/components/NFTCard';



function Home() {
  return (
    <>
    <WalletProvider>
        <Navbar/>
        <div className="min-h-screen w-full px-5 py-20">
          <h1 className='mt-3 px-10 text-xl'>Trending Now</h1>
          
          <div className="grid grid-cols-6 gap-4 px-10 mt-8">
              {
                NFT.map(nft => <NFTCard key={nft.id} title={nft.description} url={nft.image} price={nft.price} /> )
              }
          </div>
        
        </div>
    </WalletProvider>
    </>
  )
}

export default Home