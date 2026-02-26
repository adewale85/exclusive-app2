import { useEffect, useState } from 'react'
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
        <div className='lg:flex-row flex-col lg:w-[496px] w-full h-[312px] object-cover rounded-lg  '>
            <img src={HeroFrameData[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className='object-cover size-full'/>
        </div>
        <div className='flex gap-5 items-center mb-3 justify-center'>

            {HeroFrameData.map((_, index)=>(
                <div key={index} 
                  className={`lg:size-4 size-3 rounded-full  cursor-pointer ${ currentIndex===index ? "bg-red-500" : "bg-gray-400"}`} onClick={() => setCurrentIndex(index)}>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Banner
