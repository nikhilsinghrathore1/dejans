import React, { useEffect, useState } from 'react'
import img from "../../public/img.jpg"

const HeroLoader = () => {

               const [loader, setloader] = useState(0)

               const incCount = (): void => {
                              const interval = setInterval(() => {
                                setloader((prev) => {
                                  const newVal = prev + Math.floor(Math.random() * 10 + 1);
                                  if (newVal >= 100) {
                                    clearInterval(interval);
                                    return 100; // To ensure it doesn't go beyond 100
                                  }
                                  return newVal;
                                });
                              }, 300); // Adjust the interval time as needed
                            };
                          
               useEffect(() => {
                              incCount()
               
                 return () => {
                   
                 }
               }, [])
               

  return (
    <div className='h-screen w-full bg-[#a0a0a0] overflow-hidden relative' >
               <nav className='w-full h-[8vh] flex items-center justify-between px-10 py-2 f2'>
                              <h1 className='capitalize text-xl font-light '>about</h1>
                              <h1 className='capitalize text-xl font-light '>contact</h1>
                              <h1 className='capitalize text-xl font-light '>playgrond</h1>
               </nav>

               <div className='w-full h-[92vh] pt-12'>
                              <div className='text-center leading-none h-[40vh]'>
                                             <h1>{"flau.".split("").map((e,i)=>(
                                                            <span className='text-[15em] f1' key={i}>{e}</span>
                                             ))}</h1>
                              </div>

                              <div className='w-full h-[50vh] flex justify-center'>
                                                            <div className='w-[98%] border-[5px] border-black rounded-lg h-full'>
                                                                           <img className='w-full h-full object-cover pos' src={img} alt="not showing" />
                                                            </div>
                              </div>
               </div>

               <div className='absolute w-full h-full top-0 text-white bg-black flex items-end justify-end p-10'>
                                                            <h1 className='text-9xl f1'>{loader}</h1>
               </div>

    </div>
  )
}

export default HeroLoader