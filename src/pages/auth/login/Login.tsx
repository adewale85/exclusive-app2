import SlideImage from "../../../assets/Side Image.svg";
import { useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

function Login() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid login");
      }

      const data: User = await response.json();
      setUser(data);
      localStorage.setItem("token", data.token);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1305px] Wrapper lg:h-[781px] h-auto lg:px-0 px-4 py-5 lg:py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-30 gap-5">
      {/* Side Image */}
      <div>
        <img src={SlideImage} alt="Slide" />
      </div>

      {/* Login Form */}
      <div className="space-y-8">
        <div className="space-y-5">
          <h1 className="lg:text-[36px] text-[20px] font-medium leading-tight">
            Log in to Exclusive
          </h1>
          <p className="font-poppins lg:text-[20px] text-sm">
            Enter your details below
          </p>
        </div>

        <div className="space-y-8">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lg:w-[370px] w-full p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lg:w-[370px] w-full p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
          />

          <div className="flex lg:flex-row flex-col gap-12 items-center">
            <button
              onClick={handleLogin}
              className="lg:w-[143px] w-full h-14 bg-[#Db4444] text-white rounded-sm font-medium hover:bg-[#c33a3a] transition-all"
            >
              {loading ? "Logging..." : "Login"}
            </button>

            <button className="lg:w-[143px] w-full text-[#Db4444] text-[16px] hover:underline transition-all">
              Forget Password?
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {user && <p className="text-green-600">Welcome back, {user.username}!</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;