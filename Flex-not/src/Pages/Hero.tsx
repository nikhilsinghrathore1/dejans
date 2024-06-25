import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap ,{Expo}from 'gsap/all'
const Hero = () => {
               const f = useRef(null)
               const l = useRef(null)
               const e = useRef(null)
               const x = useRef(null)
               const overlay = useRef(null)
               const circle = useRef(null)
               const miniC = useRef(null)
               const miniC1 = useRef(null)
               const nav = useRef(null)
               
               useGSAP(()=>{
                              let tl = gsap.timeline()
                              tl.to(f.current,{
                                             delay:0.5,
                                             x:"-330%",
                                             y:"-100%",
                                             scale:2.5,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.to(l.current,{
                                             delay:0.8,
                                             opacity:0.6,
                                             rotate:"-5deg",
                                             x:"-280%",
                                             y:"110%",
                                             scale:1.5,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.to(e.current,{
                                             delay:0.7,
                                             x:"280%",
                                             y:"-230%",
                                             scale:2.1,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")

                              tl.to(x.current,{
                                             delay:0.8,
                                             x:"220%",
                                             y:"180%",
                                             scale:1.2,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.to(overlay.current,{
                                             delay:1.2,
                                             y:"-100%",
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.from(circle.current,{
                                             delay:1.2,
                                             scale:0        ,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.from(miniC.current,{
                                             delay:1.2,
                                             scale:0        ,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.from(miniC1.current,{
                                             delay:1.2,
                                             scale:0        ,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
                              tl.from(nav.current,{
                                             delay:1.2,
                                             y:"-100%"        ,
                                             opacity:0,
                                             ease:Expo.easeInOut,
                                             duration:1
                              } , "a")
               })


  return (
    <div className='w-full h-screen text-[#836D52] relative  overflow-hidden bg-[#1E1F18]'>

               <div className='absolute top-0 w-full h-full flex f2 text-8xl z-30  items-center justify-center'>
                                                            <div ref={f}>F</div>
                                                            <div ref={l}>L</div>
                                                            <div ref={e}>E</div>
                                                            <div ref={x}>X</div>

               </div>


               <nav ref={nav} className='w-full flex f3 uppercase text-sm  justify-between px-8 pt-4'>
                              <div className='w-[21%]'>
                                             <h1>Photos/films</h1>
                              </div>
                              <div className='w-[10%] f2 text-2xl'>
                                             <h1>Mouthwash</h1>
                              </div>
                              <div className='flex w-[26%] justify-between pl-6'>
                                             <h1>Project</h1>
                                             <h1>about</h1>
                                             <h1>contact</h1>
                              </div>
               </nav>

               <div className='w-full relative h-[90vh] flex justify-center'>
                                             <div ref={circle} className='w-[100vh] z-30 h-[100vh] f2 text-8xl  flex absolute -top-10 rounded-full border-[1px] justify-center items-center border-[#836D52]/30'>
                                                          
                                             </div>

                                             <div ref={miniC} className='w-36 z-20 h-36 bg-[#A1350E] absolute top-[17%] left-[18%] rounded-full'></div>
                                             <div ref={miniC1} className='w-52 h-52 z-20 bg-[#A1350E] absolute top-[55%] right-[20.5%] rounded-full'>

                                             </div>
                                             <div className='w-[340px] h-[70vh] absolute top-[35%] overflow-hidden right-[25.5%]'>
                                                            <img className='w-full h-full object-cover' src="https://github.com/codegridweb/landing-page-animation-using-tweenmax/blob/main/hero-img.jpeg?raw=true" alt="not showing" />
                                                            <div className='overlay w-full h-full bg-black/10 absolute top-0'></div>
                                                            <div ref={overlay} className='overlay w-full h-full bg-[#1E1F18] absolute top-0'></div>
                                             </div>
               </div>
    </div>
  )
}

export default Hero