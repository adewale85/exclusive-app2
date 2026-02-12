
import Navbar from "../Component/Layout/Navbar";
import Footer from "../Component/Layout/Footer";

function Error() {
  return (
    <main>
      <Navbar />
      <div className="Wrapper">
        <div className=" flex gap-3">
          <p className="font-poppins font-normal text-sm leading-5 text-[#818181]">
            Home /
          </p>
          <p className="font-poppins font-normal text-sm leading-5">About </p>
        </div>
        <div className="w-full h-[479px] flex flex-col items-center justify-center
         ">
          <h1 className=" items-center justify-center font-inter font-medium text-[115px] leading-28 tracking-[4%] text-center">
            404 Not Found
          </h1>
          <p className="font-poppins font-normal text-base leading-6 text-center ">
            Your visited page not found. You may go home page.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default Error;
