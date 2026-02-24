import SlideImage from "../../../assets/Side Image.svg";
import Google_icon from "../../../assets/Icon-Google.svg";
import { useState } from "react";


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Fixed: empty string instead of space
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    if((!name || !email || !password)){
      setError ("Please fill all info")
      return
    }
    setLoading(true)
    setError(null)

    const userData = {
      firstName: name,
      email: email,
      password: password
    }
    try {
      const response = await fetch ("https://dummyjson.com/users/add",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
      });
      const data = await response.json()

      if(response.ok){
        ("Succefully created", data)
        alert ("Account Created")
      }else{
        setError("Fail to create account")
      }

    } catch (error){
      setError ("Network fail")
      console.error(error); 
    } finally {
      setLoading(false)
    }
  }

  // const handleSignUp = async () => {
  //   if ((!name || !email || !password)) {
  //     setError("please fill it up");
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null);

  //   const userData = {
  //     firstName: name,
  //     email: email,
  //     password: password,
  //   };

  //   try {
  //     const response = await fetch("https://dummyjson.com/users/add", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userData),
  //     });

  //     // Fixed: added parentheses () to .json()
  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log("User created successfully", data);
  //       alert ("Account Created")
        
  //       // You might want to redirect the user or clear inputs here
  //     } else {
  //       setError("Failed to create account");
  //     }
  //   } catch (error) {
  //     // Fixed: This block is now properly aligned
  //     setError("Network failure");
  //     console.error(error);
  //   } finally {
  //     setLoading(false); // Fixed: typo 'fasle' to 'false'
  //   }
  // };

  return (
    <div className="py-12 lg:py-2">
      <div className="w-full max-w-full Wrapper lg:h-[781px] h-auto flex lg:flex-row flex-col items-center justify-center gap-20 ">
        <div className="py-5">
          <img src={SlideImage} alt="slide" />
        </div>
        <div className=" space-y-8  ">
          <h1 className="font-inter font-medium text-[36px] leading-7.5 tracking-[4%]">
            Create an account
          </h1>
          <div className="space-y-8">
            <div className="text-black flex items-center justify-center right-3">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-50"
              />
            </div>

            <div className="text-black flex items-center justify-center right-3">
              <label htmlFor="" className=""></label>
              <input
                type="mail"
                name="mail"
                placeholder="Email or Phone Number"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-50"
              />
            </div>

            <div className="text-black flex items-center justify-center right-3">
              <label htmlFor="" className=""></label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-50"
              />
            </div>
            <button
              onClick={handleSignUp}
              disabled={loading}
              
              className="w-[371px] h-14 bg-[#d64040] text-white font-poppins font-medium text-[16px] leading-6 rounded-sm "
            >
              
              {loading ? "Creating..." : "Create Account"}
            </button>
            <div className=" w-[371px] h-14 border-1.2 border-[#00000066] rounded-sm flex items-center justify-center gap-5">
              <span>
                <img src={Google_icon} alt="Google_icon" />
              </span>
              <button className=" text-black font-poppins font-medium text-[16px] leading-6  ">
                Sign up with Google
              </button>
            </div>
            <div className=" flex lg:flex-row flex-col gap-12 items-center justify-center">
              <h3 className="font-poppins font-normal text-base leading-6">
                Already have account?
              </h3>
              <li className="list-none">
                <a
                  href="/Log in"
                  className="font-poppins font-medium lg:text-base text-2xl leading-6 border-b-2"
                >
                  Login
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
