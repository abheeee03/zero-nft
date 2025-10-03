"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'


type Inputs = {
  name: string
  category: string
  price: string,
  description: string
}


function MintPage() {
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handelFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    if(!e.target.files){return}
    let url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setFileUrl(url)
  }

   const {
    register,
    handleSubmit
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  
  }

  return (
    <div className="h-screen w-full flex items-center justify-between flex-wrap px-2">
        <div className="h-screen w-full flex items-center justify-center">
          <div className="h-90 w-90 border rounded-xl flex items-center justify-center">
             { !fileUrl && <Button
              onClick={()=>{
                if(!fileInputRef.current){return}
                fileInputRef.current.click()
              }}
              >
                Upload File
              </Button>}
              {
                fileUrl && <div className="h-full w-full">
                  <img src={fileUrl} alt="" className='h-full w-full object-cover'/>
                </div>
              }
          </div>
            <Input
            onChange={handelFileChange}
            ref={fileInputRef}
            type='file'
            className='hidden'
            />
        </div>
        <div className="h-screen w-full flex items-center justify-center flex-col px-30 gap-4">
            <h1 className='text-xl font-medium'>
                 Enter Details
            </h1>
             
            <form onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center flex-col gap-2 w-70">
                <Input {...register("name")}  placeholder='Enter Name'/>
                <Input {...register("price")}  placeholder='Price'/>
                <Input {...register("category")}  placeholder='Category'/>
                <Input {...register("description")} placeholder='Description'/>
                <Button type='submit'>Mint</Button>
            </form>
        </div>
    </div>
  )
}

export default MintPage