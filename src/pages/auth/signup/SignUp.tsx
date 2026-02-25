import SlideImage from "../../../assets/Side Image.svg";
import Google_icon from "../../../assets/Icon-Google.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    // Validation
    if (!name || !email || !password) {
      setError("Please fill all the information");
      return;
    }

    setLoading(true);
    setError(null);

    const userData = {
      firstName: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Successfully created", data);
        alert("Account Created Successfully!");

        // Clear inputs after success
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setError("Failed to create account");
      }
    } catch (err) {
      console.error(err);
      setError("Network failure. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 lg:py-2">
      <div className="w-full max-w-full Wrapper lg:h-[781px] h-auto flex lg:flex-row flex-col items-center justify-center gap-20">
        
        {/* Left Image Section */}
        <div className="py-5">
          <img src={SlideImage} alt="signup visual" />
        </div>

        {/* Form Section */}
        <div className="space-y-8">
          <h1 className="font-inter font-medium text-[36px] leading-7.5 tracking-[4%] text-center lg:text-left">
            Create an account
          </h1>

          <div className="space-y-8">
            
            {/* Name Input */}
            <div className="text-black flex items-center justify-center">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-70"
              />
            </div>

            {/* Email Input */}
            <div className="text-black flex items-center justify-center">
              <input
                type="email"
                name="email"
                placeholder="Email or Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-70"
              />
            </div>

            {/* Password Input */}
            <div className="text-black flex items-center justify-center">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[370px] p-2 border-0 border-b focus:outline-none border-b-black opacity-70"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            {/* Create Account Button */}
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-[371px] h-14 bg-[#d64040] text-white font-poppins font-medium text-[16px] leading-6 rounded-sm disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            {/* Google Sign Up */}
            <div className="w-[371px] h-14 border border-[#00000066] rounded-sm flex items-center justify-center gap-5 cursor-pointer">
              <span>
                <img src={Google_icon} alt="Google icon" />
              </span>
              <button className="text-black font-poppins font-medium text-[16px] leading-6">
                Sign up with Google
              </button>
            </div>

            {/* Login Redirect */}
            <div className="flex lg:flex-row flex-col gap-6 items-center justify-center">
              <h3 className="font-poppins font-normal text-base leading-6">
                Already have an account?
              </h3>

              <Link
                to="/login"
                className="font-poppins font-medium text-base leading-6 border-b-2"
              >
                Login
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;