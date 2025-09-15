"use client"
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { sepolia } from 'viem/chains'
import { createConfig, http, injected, WagmiProvider } from 'wagmi'
import { metaMask, safe } from 'wagmi/connectors'


const config = createConfig({
  chains: [ sepolia],
   connectors: [
    injected(),
    metaMask(),
    safe(),
  ],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_RPC_URL)
  },
})


const client = new QueryClient()


function WalletProvider({children}: {children: ReactNode}) {
  return (
    <WagmiProvider config={config}>
    <QueryClientProvider client={client}>
        <RainbowKitProvider>
        {children}
        </RainbowKitProvider>
    </QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletProvider