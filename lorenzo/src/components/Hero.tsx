import React from 'react'
import img from "../../public/rose.jpg"

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[#858D80] pt-7 px-10'>
      {/* this is the navigation section */}
               <nav className='w-full flex items-start justify-between '>
                {/* this is the logo text */}
                              <div>
                                             <h1 className='text-[4.5em] leading-none f1 uppercase text-[#A32E28] '>lorenzo</h1>
                                             <p className='f3 leading-none text-lg opacity-60 uppercase'>frontend developer /////</p>
                              </div>

                {/* this is the nav buttons  */}
                              <div className='flex h-full items-center justify-end  gap-8 pt-1 uppercase w-[30%]'>
                                          <div className='f3  px-6 py-1.5 opacity-70 rounded  border-[2px] border-black/50'>
                                              
                                              <li className='list-disc'>projects</li>
                                          </div>
                                          <div className=' f3 px-6 py-1.5 rounded opacity-70  border-[2px] border-black/50'>
             
                                              <li>info</li>
                                          </div>
                              </div>
               </nav>


               {/* this the after navigation secion */}

               <div className='w-full h-[25vh] flex'>
                {/* this is the section for the sub info text  */}
                          <div className='w-1/2 flex justify-end items-end'>
                              <p className='text-sm f3 tracking-tighter leading-none opacity-85 w-[45%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi ad totam hic sit id ut provident, porro saepe mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eligendi suscipit quos quod corporis , </p>
                          </div>

                {/* this is the section for the folio text */}

                <div className='w-1/2 flex justify-end items-center pt-8 tracking-tighter'>
                            <h1 className='f3 text-4xl uppercase opacity-90 '>folio 2023</h1>
                </div>
               </div>

               {/* this is the image section */}

               <div className='w-full flex justify-end mt-10 '>
                      <div className='w-[40%] rounded overflow-hidden h-[27vh]'>
                                    <img className='w-full h-full object-cover object-top pos' src={img} alt="not showing" />
                      </div>
               </div>

               {/* this is the footer section */}
               <div className='w-full flex pt-16 items-end justify-between '>
              {/* this is the left section of the footer */}
              <div className='w-1/2 uppercase f3 opacity-80'>
                <p className='mb-5'>p/03</p>
                <h1 className='text-3xl opacity-80'>niko//Chan</h1>
              </div>

              {/* this is the right section of the footer */}

                <div className='flex w-1/2 f3 uppercase opacity-60 justify-between pl-32 text'>
                      <div>
                        <li className='mb-5 '>year</li>
                        <p>2024</p>
                      </div>


                      <div>
                        <li className='mb-5 '>agency</li>
                        <p>//n/a</p>
                      </div>


                      <div>
                        <li className='mb-5 '>role</li>
                        <p>//front end</p>
                        <p>development</p>
                      </div>

                      <div>
                        <li className='mb-5 '>awards</li>
                        <p>//design fiesta</p>
                        <p>//n/a</p>
                      </div>
                </div>
               </div>
    </div>
  )
}

export default Hero