import { useGSAP } from '@gsap/react'
import gsap, { Cubic } from 'gsap/all'

import React, { useEffect, useRef, useState } from 'react'
import img from "../../public/img.jpg"

const HeroLoader = () => {

                const navref = useRef(null)
                const number = useRef(null)
                const flau = useRef([])
                const imgref = useRef(null)
                const blank = useRef([])

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

                            // useGSAP(()=>{
                            //   let tl = gsap.timeline()
                            //   tl.to(number.current,{
                            //     delay:3.2,
                            //     opacity:0
                            //   })
                            //   tl.to(blank.current,{
                            //     y:"-100%",
                            //     // opacity:0.2
                            //     ease:"[0.87, 0, 0.13, 1]",
                            //     stagger:0.1
                               
                            //   })
                            //   tl.from(flau.current,{
                            //     delay:1,
                            //     scale:10,
                            //     opacity:0,
                            //     y:"500%",
                            //     stagger:0.1
                            //   },"a")
                            //   tl.from(imgref.current,{
                                
                            //     opacity:0,
                            //     y:"200%",
                            //     delay:0.1
                            //   },"a")
                            //   tl.from(navref.current,{
                            //     y:"200%",
                            //     stagger:0.5,
                            //     opacity:0
                            //   },"a")
                            // })
                          
               useEffect(() => {
                              // incCount()
               
                 return () => {
                   
                 }
               }, [])
               

  return (
    <div className='h-screen w-full bg-[#a0a0a0] overflow-hidden relative' >
               <nav ref={navref} className='w-full h-[8vh] flex items-center justify-between px-10 py-2 f2'>
                              <h1 className='capitalize text-xl font-light '>about</h1>
                              <h1 className='capitalize text-xl font-light '>contact</h1>
                              <h1 className='capitalize text-xl font-light '>playgrond</h1>
               </nav>

               <div className='w-full h-[92vh] pt-12'>
                              <div className='text-center leading-[280px] overflow-hidden h-[47vh] -pt-10'>
                                             <h1>{"flau.".split("").map((e,i)=>(
                                                            <span ref={(el)=>flau.current[i] = el} className={`text-[20em] inline-block f1 ${i===1|| i===2&& "rotate-12"}`} key={i}>{e}</span>
                                             ))}</h1>
                              </div>

                              <div ref={imgref} className='w-full h-[50vh] flex justify-center'>
                                                            <div className='w-[98%] border-[5px] border-black rounded-lg h-full'>
                                                                           <img className='w-full h-full object-cover pos' src={img} alt="not showing" />
                                                            </div>
                              </div>
               </div>
{/* 
               <div  className='fixed w-full h-full top-0 text-white flex items-end justify-end '>
                {[1,2,3,4,5].map((e,i)=>(
                  <div ref={(el)=>blank.current[i] = el} className='w-[20vw] h-full bg-black'></div>
                ))}
                                                            <h1 ref={number} className='text-9xl fixed bottom-10 right-5 f1'>{loader}</h1>
               </div> */}

    </div>
  )
}

export default HeroLoader