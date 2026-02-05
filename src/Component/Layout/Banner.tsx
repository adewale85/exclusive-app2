import React, { useEffect, useState } from 'react'
import { HeroFrameData } from '../../constants/Heroframe'

function Banner() {
    
    const [currentIndex, setCurrentIndex] = useState (0)
    useEffect (()=>{
        const interval = setInterval (()=>{
            setCurrentIndex (prev => prev === HeroFrameData.length - 1 ? 0 : prev + 1)
        }, 3000)

        return () => clearInterval (interval)
    }, [])


  
  return (
    <div className='space-y-4'>
        <div className='w-[496px] h-[312px] object-cover rounded-lg '>
            <img src={HeroFrameData[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className='object-cover size-full'/>
        </div>
        <div className='flex gap-5 items-center'>

            {HeroFrameData.map((_, index)=>(
                <div key={index} 
                  className={`size-4 rounded-full  cursor-pointer ${ currentIndex===index ? "bg-red-500" : "bg-gray-400"}`} onClick={() => setCurrentIndex(index)}>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Banner


//     <div className=''>
//   {HeroFrameData.map(({ id, image }) => (
//     <div key={id} className='items-center justify-center'>
//       <img src={image} alt="Hero frame" className='w-[496px] h-[352px]' />
//     </div>
//   ))}
// </div>