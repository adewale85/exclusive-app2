


import Footer from '../Component/Layout/Footer'
import Navbar from '../Component/Layout/Navbar'


import SlideImage from "../assets/Side Image (1).svg"
import { AboutInfopropsData } from '../constants/AboutInfo'
import { NewArrivalData } from '../constants/Arrival'
import { PeopleSectionData } from '../constants/People\'sSection'

function About() {
  return (
    <main>
        <Navbar />
      <div className='pl-95'>
          <div className='flex gap-3 py-12'>
            <p className='font-poppins font-normal text-sm leading-5'>Home / </p>
            <p className='font-poppins font-normal text-sm leading-5'>About </p>
        </div>
       <div className='flex items-center justify-between'>
         <div className='w-[525px]'>
            <h2 className=
            'font-inter font-semibold text-[54px] leading-16 tracking-[6%] pb-6'>Our Story</h2>

            <p className=
            'font-poppins font-normal text-[16px] leading-6  py-6'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>

            <p className=
            'font-poppins font-normal text-[16px] leading-6'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.

            </p>
        </div>
        <div>
            <img src={SlideImage} alt="" className='w-[750px]'/>
        </div>
       </div>
         </div>

<div className='Wrapper py-22'>
  <div className="flex items-center justify-center gap-6 py-12 ">
  {AboutInfopropsData.map(({ id, title, subTitle, image }) => (
    <section
      key={id}
      className="w-[270px] h-[230px] flex items-center justify-center rounded-sm border-[#0000004D] border shadow-sm"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img src={image} alt="" className="size-20" />
        <p className="font-inter font-bold text-[32px]">{title}</p>
        <p className="font-poppins text-[16px]">{subTitle}</p>
      </div>
    </section>
  ))}
</div>

<div className='my-6 flex flex-wrap items-center gap-6 py-22'>
  {PeopleSectionData.map(({id, title, subTitle, image, twitterImg, instagramImg, linkdinImg}) => (
    <section key={id} className='w-[370px] h-[430px] bg-[#f5F5F5] rounded-sm'>
      <div className='
       flex items-center justify-center pt-8.5'>
        <img src={image} alt="" className='' />
      </div>
      <div className='space-y-2 py-5'>
        <h2 className='font-inter font-medium text-[32px] leading-7.5 tracking-[4%]'>{title}</h2>
        <p className='font-poppins font-normal text-[16px] leading-6'>{subTitle}</p>
        <div className='flex gap-3 text-red-400'>
          <img src={twitterImg} alt="" />
          <img src={instagramImg} alt="" />
          <img src={linkdinImg} alt="" />
        </div>
      </div>
    </section> 
  ))}
</div>
</div>
      <div className='pb-12 flex Wrapper gap-12 items-center justify-center'>
        
        <div className=' size-6 rounded-full bg-[#818181]   opacity-30'></div> 
        <div className=' size-6 rounded-full bg-[#818181]   opacity-30'></div> 
        <div className='bg-[#818181]  size-8 rounded-full flex items-center justify-center'>
          <div className='bg-white size-7 rounded-full flex items-center justify-center'>
            <div className=' size-6 rounded-full bg-[#ff0e0e] '></div> 
          </div>
        </div>
        <div className=' size-6 rounded-full bg-[#818181]  opacity-30'></div> 
        <div className=' size-6 rounded-full bg-[#818181]  opacity-30'></div> 
     
      </div>
      
      
         <div className='py-12 flex gap-22 items-center justify-center'>
                 {NewArrivalData.map(({id, image, title, subTitle}) =>(
                    <section key={id} className=' flex flex-col items-center justify-center'>
                        <div><img src={image} alt="Delivery-icon" className='size-20 pb-5'/></div>
                       <div className='flex flex-col items-center justify-center'>
                        
                       <div className=''>
                        <h3 className='font-poppins font-semibold text-[20px] leading-7 text-black'>{title}</h3>
                       </div>
                        <div>  
                        <h4 className='font-poppins font-normal text-[14px] leading-5 text-black'>{subTitle}</h4>
                        </div>
                       </div>
                      
                    </section>
                )
                
                
                )}
               </div>
      
                <div className='pt-22'>
                  <Footer/>
                </div>
     
    </main>
  )
}

export default About