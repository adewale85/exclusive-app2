import { EhanceYourMusicExperienceData } from "../../../constants/EhanceYour";
import Speaker from '../../../assets/Speaker.svg'

const EhanceYourMusicExperience = () => {
  return(
    <section className="py-12">
          <div className="my-5 Wrapper">
      <div className="w-[1170px] h-[500px] bg-black p-12 mt-16 flex gap-12 items-center justify-center">
       
     
        <div>
       <div className=" text-start">
         <button className=" font-semibold text-[1rem] text-[#00FF66]">
          Categories
        </button>
         <h1 className="w-[443px] h-[120px] text-start text-[#FAFAFA] text-[3rem] font-semibold my-5 leading-[3.75rem]">
          Enhance Your Music Experience
        </h1>

       </div>
      
        <div className="flex gap-6 ">
          {EhanceYourMusicExperienceData.map(({id, title, subTitle}) => (
       
       <section key = {id} className=" bg-white size-[65px] rounded-full flex items-center justify-center">
         
            <div className=" flex flex-col items-center justify-center">
              <div className="font-poppins font-semibold text-[22px] leading-5" > {title} </div>
            <div className="font-poppins font-normal text-[11px] leading-[18px]  ">{subTitle}</div>
            </div>
          
        </section>
        
      ))}
        </div>
        
        <div className="mt-8 text-start">
          <button className="px-12 py-3 bg-[#00FF66] font-semibold text-black rounded-[4px]">
          Buy Now!
          </button>
        </div>
        </div>

        <div>
          <img src={Speaker} alt="Speaker" />
        </div>
      </div>

    </div>

      

    </section>
  )
}

export default EhanceYourMusicExperience;