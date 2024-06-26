import React from 'react'
import img from "/img1.jpg"
import img2 from "/img2.jpg"
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";


const Landing = () => {
  return (
    <div className='w-full h-screen bg-black  flex justify-center items-center'>

               {/* this is the main div */}

               <div className='w-[93%] h-[95%]'>
                              {/*  this is the nav section  */}
               
               <nav className='w-full h-[9%] flex justify-between gap-[3px]'>

                                             {/* this is the logo section */}

                                             <div className='w-[37%] f1 flex items-center justify-between px-7 h-full rounded-lg bg-white'>

                                                            <h1 className='text-[16px]'>WA</h1>

                                                            <div className='leading-[13.5px] f2'>
                                                                           <p>HISTORY</p>
                                                                           <p>ARTISTS</p>
                                                            </div>
                                             </div>

                                             {/* this is the menu section  */}


                                             <div className='w-[26%] f1 h-full rounded-lg flex items-center justify-between px-7 bg-white'>

                                                            <h1 className='tracking-tighter'>MENU</h1>

                                                            <RxCross1 className='text-xl'/>



                                             </div>

                                             {/* this is the intro section or last section */}

                                             <div className='w-[37%] h-full flex items-center justify-between px-7 f1 rounded-lg bg-white'>

                                                            <h1 className='tracking-tighter text-[17px]'>INTRO</h1>

                                                           <p className='f1'>XX</p>

                                             </div>
               </nav>


               {/* this is the main conten div */}

               <div className='w-full h-[90.5%] mt-[3px] flex gap-[3px]'>

                              {/* the main salvador div */}

                              <div className='w-[63%] h-full bg-white rounded-lg pt-2 px-5'>
 
                                             <div className='w-full f3 tracking-tight uppercase text-[7rem] leading-[95px] h-[38%]'>
                                                            <h1>Salvador</h1>
                                                            <h1>dali</h1>
                                             </div>

                                             <div className='flex text-[14px]  items-center w-full justify-between px-4 f2 font-semibold'>
                                                            <h1>05/1984</h1>

                                                            <div className='w-[70%] border-[2.5px] border-black border-b'></div>

                                                            <h1>05/1984</h1>
                                             </div>

                                             <div className='w-full h-[27%] mt-3 rounded-lg overflow-hidden'>
                                                            <img className='w-full h-full object-cover' src={img} alt="not showing" 
                                                            style={{objectPosition:"50% 7%"}}/>
                                             </div>

                                             <div className='w-full f1 uppercase leading-none text-xs mt-2'>
                                                            <p>nationality:BHARAT, Ajmer</p>          
                                                            <p>Field:work, work</p>          
                                                            <p>PUPILs:ye kya hota hai</p>          
                                             </div>

                                             <div className='w-full flex justify-end h-[13%] rounded-lg items-center uppercase mt-5 px-4 bg-black '>
                                                                           <div className='leading-none  flex gap-2   text-white items-center f3'>
                                                                                          <h1 className='text-[3rem]'>next artist</h1>
                                                                                          <GoArrowRight className='text-[2rem] mt-2'/>
                                                                           </div>
                                             </div>

                              </div>

                              {/* this is the corousal div */}
                              <div className='w-[37%] pt-2 h-full bg-white rounded-lg px-7'>

                                                            <div className='flex f1 text-[14.5px] justify-between items-center w-full'>
                                                            <p>1929/256</p>
                                                            <p>110X150.7CM</p>
                                                            </div>

                                                            {/* this is the inverted images section */}


                                                            <div className='w-full h-[40%] mt-10 flex relative'>
                                                                           <div className='w-[80%] h-[85%] absolute right-16 rounded-lg -rotate-6'>
                                                                                          <img className='w-full h-full relative z-10 object-cover rounded-lg' src="https://plus.unsplash.com/premium_photo-1664391605349-92b7ec8385e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fHww" alt="not showing" />
                                                                                          <div className='absolute w-full h-full rounded-lg border-[2.5px] border-black top-3 left-3'>
                                                                                          </div>
                                                                           </div>
                                                            </div>

                                                            {/* this is the image discription section */}

                                                            <div className='w-full flex items-center justify-between mt-4'>

                                                                           <div className='text-[1.7rem] f2 tracking-tighter leading-[21px] uppercase'>
                                                                                          <p>the persistence</p>
                                                                                          <p>of memory</p>

                                                                           </div>

                                                                           <div className='f1 text-sm leading-none text-right'>
                                                                                          <p>data : 1931</p>
                                                                                          <p>style : hai nahi</p>
                                                                                          <p>gender: better wala</p>
                                                                                          <p>medial : oil,canva</p>
                                                                           </div>

                                                            </div>

                                                            {/* this is the slider section */}

                                                            <div className='w-full border-t-[3px] border-black mt-5 pt-2'>

                                                                           <div className='w-full flex items-center justify-between'>
                                                                                          <p className='text-sm f2 uppercase'>price</p>
                                                                                          <p className='text-[1.7rem] f1 uppercase'>$18.560</p>
                                                                           </div>

                                                                           <div className='w-full flex items-center mt-8 justify-between'>
                                                                                          <div className='w-[25%] h-[11vh] flex items-center justify-center text-white rounded-lg bg-black'>
                                                                                                         <GoChevronLeft className='text-3xl'/>
                                                                                          </div>

                                                                                          <p className='text-sm f2'>256</p>

                                                                                          <div className='w-[25%] h-[11vh] flex items-center justify-center text-white rounded-lg bg-black'>
                                                                                                         <GoChevronRight className='text-3xl'/>
                                                                                          </div>

                                                                           </div>

                                                                       



                                                            </div>

                              </div>

               </div>


               </div>

    </div>
  )
}

export default Landing