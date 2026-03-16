
import Sendicon from "../../assets/icon-send.svg";
import Qrcode from "../../assets/Qr Code.svg";
import Appstore from "../../assets/AppStore.svg";
import { footerSections } from "../../constants/footerData";
import Twitter_Icon from "../../assets/Icon-Twitter.svg"
import Facebook_Icon  from "../../assets/Icon-Facebook.svg"
import Linkedin_Icon from "../../assets/Icon-Linkedin.svg"
import Instagram_Icon from "../../assets/icon-instagram.svg"
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div className="bg-black text-white py-12">
      <div className="Wrapper flex lg:flex-row flex-col justify-between items-start lg:p-0 pl-4">

        {/* === UNIQUE SECTION === */}
        <div className="space-y-5">
        
         <ul>
          <li className=" font-inter font-bold text-2xl list-none">
            <Link to={"/"}>Exclusive</Link>
          </li>
         </ul>
          
          <h3 className="font-poppins text-[20px] font-medium">Subscribe</h3>
          <p className="font-poppins text-[16px]">Get 10% off your first order</p>

          <div className="md:w-[220px] w-[333px] h-12 relative flex items-center border rounded-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="py-3 pl-4 font-poppins text-base"
            />
            
            <span className="absolute right-2">
              <img src={Sendicon} alt="" />
            </span>
          </div>
        </div>

        {/* === MAPPED SECTIONS === */}
        {footerSections.map(({ title, items }, index) => (
          <div key={index} className="space-y-5 md:py-0 py-8 ">
            <h2 className="font-poppins font-medium text-[20px]">{title}</h2>

            {items.map((item , i ) => (
              <Link to={item}>
                <p key={i} className=" font-normal text-[16px] leading-6 w-[175px] ">
                {item}
               
              </p>
              </Link>
            ))}
          </div>
        ))}
        

        {/* === UNIQUE DOWNLOAD SECTION === */}
        <div className="space-y-5">
          <h2 className="font-poppins text-[20px] font-medium">Download App</h2>
          <p className="font-poppins text-[12px] font-medium">
            Save $3 with App New User Only
          </p>

          <div className="flex gap-5">
            <img src={Qrcode} className="size-20" />
            <div className="space-y-2">
              <img src={Appstore} className="w-[110px] h-10" />
              <img src={Appstore} className="w-[110px] h-10" />
            </div>
          </div>
          <div className="flex gap-6">
            <img src={Facebook_Icon} alt="" />
            <img src={Twitter_Icon} alt="" />
            <img src={Instagram_Icon} alt="" />
            <img src={Linkedin_Icon} alt="" />

            </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
