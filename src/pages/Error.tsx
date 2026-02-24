import { Link } from "react-router-dom";


function Error() {
  return (
    <main className="Wrapper lg:px-0 px-4">
      
      <div className="Wrapper py-12">
        <div className='lg:px-0 px-12 flex gap-3'>
            <Link to={"/"}>
            <p className='font-poppins font-normal text-sm leading-5 text-[#818181]'>Home / </p>
            </Link>
            <Link to={"/Error"}>
             <p className='font-poppins font-normal text-sm leading-5'>404 Error </p>
            </Link>
        </div>
        <div className="w-full lg:h-[479px] h-[350px] flex flex-col items-center justify-center space-y-5
         ">
          <h1 className=" items-center justify-center font-inter font-medium lg:text-9xl text-6xl leading-28 tracking-[4%] text-center">
            404 Not Found
          </h1>
          <p className="font-poppins font-normal text-base leading-6 text-center ">
            Your visited page not found. You may go home page.
          </p>
        </div>
      </div>
      
    </main>
  );
}

export default Error;
