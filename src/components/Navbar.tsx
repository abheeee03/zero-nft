"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { ThemeToggleButton } from './theme-toggle'
import { Inter_Tight } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit'


const intTight = Inter_Tight({
  subsets: ["latin"]
})

function Navbar() {

  return (
    <div className='fixed flex items-center justify-between w-full px-10 py-5 backdrop-blur-xs'>
        <div className="">
          <h1 className={`${intTight.className} text-xl font-medium`}>ZeroNFT</h1>
        </div>
        <div className="flex items-center justify-center gap-5">
          <ConnectButton/>
            <ThemeToggleButton
            start="top-down"
            blur={true}
            variant={"rectangle"}
            />
        </div>
    </div>
  )
}

export default Navbar