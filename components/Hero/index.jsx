import React from 'react'
import Link from 'next/link'
function Hero() {
  return (
    <div className='flex h-[30rem] mt-20'>
        {/* Web-development box */}
        <div className='h-full relative w-[60rem] mr-4'>
          <Link href="/Hero/web">
            <div className='w-full h-full absolute bg-black opacity-0 rounded-lg'/>
            <div className='flex absolute w-full h-full py-3 px-2'>
              <div className='relative w-full h-full py-10 px-5'>
                <p className='text-white text-2xl'>Modern</p>
                <p className='text-white text-4xl font-bold'>Web-Development</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className='fill-white absolute bottom-5 left-5'>
                    <path d="M30 896q-12.75 0-21.375-8.675Q0 878.649 0 865.825 0 853 8.625 844.5T30 836h111v-42q-24 
                    0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v458q0 24-18 42t-42 18v42h111q12.75 0
                    21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T930 896H30Zm111-162h678V276H141v458Zm0 0V276v458Z"/>
                  </svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 96 960 960" width="60" className='fill-white rotate-[140deg] h-15 w-15'>
                <path d="M447 875 169 597q-5-5-7-10t-2-11q0-6 2-11t7-10l279-279q8-8 20-8t21 9q9 
                9 9 21t-9 21L262 546h496q13 0 21.5 8.5T788 576q0 13-8.5 21.5T758 606H262l228 228q8 8 8 20t-9 21q-9 9-21 9t-21-9Z"/>
              </svg>
            </div>
            <img src='/images/hero/react.jpg' alt='Shadow' className='h-full w-full object-cover rounded-lg'/>  
          </Link>
        </div>

        {/* Mobile-development box */}
        <div className='flex flex-col w-full h-full'>
          <div className='relative h-1/2'>
            <Link href='/Hero/mobile'>
              <div className='w-full h-full absolute bg-black opacity-40 rounded-lg'/>
              <div className=''>
                <div className='absolute flex flex-col h-full justify-between p-5'>
                  <p className='text-white text-lg'>Lastest</p>
                  <p className='text-white text-3xl font-bold'>Mobile Development</p>
                </div>

                <div className='flex flex-col justify-between items-end w-full h-full absolute p-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className='fill-white rotate-[140deg]'>
                    <path d="M447 875 169 597q-5-5-7-10t-2-11q0-6 2-11t7-10l279-279q8-8 20-8t21 9q9 
                    9 9 21t-9 21L262 546h496q13 0 21.5 8.5T788 576q0 13-8.5 21.5T758 606H262l228 228q8 8 8 20t-9 21q-9 9-21 9t-21-9Z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className='fill-white'>
                    <path d="M260 1016q-24 0-42-18t-18-42V196q0-24 18-42t42-18h440q24
                    0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-90v30h440v-30H260Zm0-60h440V286H260v580Zm0-640h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"/>
                  </svg>
                </div>
              </div>
              <img src='/images/hero/phone.jpg' alt='Shadow' className='h-full w-full object-cover rounded-lg'/>  
            </Link>
          </div>
          
          {/* productivity box */}
          <div className='flex h-1/2 pt-4 gap-4'>
            <div className='h-full w-full relative'>
              <Link href="/Hero/productivity"> 
                <div className='w-full h-full absolute bg-black opacity-40 rounded-lg'/>
                <div className='absolute flex flex-col justify-between h-full w-full p-1 pb-5 pl-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38" className='fill-white rotate-[140deg] self-end'>
                    <path d="M447 875 169 597q-5-5-7-10t-2-11q0-6 2-11t7-10l279-279q8-8 20-8t21 9q9 
                    9 9 21t-9 21L262 546h496q13 0 21.5 8.5T788 576q0 13-8.5 21.5T758 606H262l228 228q8 8 8 20t-9 21q-9 9-21 9t-21-9Z"/>
                  </svg>
                  <p className='text-white text-4xl font-bold'>Productivity</p>
                </div>
                <img src='/images/hero/git.jpg' alt='Shadow' className='h-full w-full object-cover rounded-lg'/>  
              </Link>
            </div>
            {/* story box */}
            <div className='relative h-full w-full'>
              <Link href="/Hero/story">
                <div className='w-full h-full absolute bg-black opacity-0 rounded-lg'/>
                <div className='absolute flex flex-col justify-between h-full w-full p-1 pb-5 pl-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38" className='fill-white rotate-[140deg] self-end'>
                    <path d="M447 875 169 597q-5-5-7-10t-2-11q0-6 2-11t7-10l279-279q8-8 20-8t21 9q9 
                    9 9 21t-9 21L262 546h496q13 0 21.5 8.5T788 576q0 13-8.5 21.5T758 606H262l228 228q8 8 8 20t-9 21q-9 9-21 9t-21-9Z"/>
                  </svg>
                  <p className='text-white text-4xl font-bold'>Story</p>
                </div>
                <img src='/images/hero/phone_programming.jpg' alt='Shadow' className='h-full w-full object-cover rounded-lg'/>  
              </Link>
            </div>
          </div> 
        </div>
      </div>
  )
}

export default Hero