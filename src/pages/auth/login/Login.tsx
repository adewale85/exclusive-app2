import React, { useState } from "react";
import SlideImage from "../../../assets/Side Image.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);
    setError("");

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid login ");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("token", data.token);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="Wrapper h-[781px] flex items-center gap-20">
      <div>
        <img src={SlideImage} alt="Slide" />
      </div>

      <div className="space-y-8">
        <h1 className="text-[36px] font-medium">Log in to Exclusive</h1>
        <p>Enter your details below</p>

        <div className="space-y-8">
          <input
            type="text"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[370px] p-2 border-b outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[370px] p-2 border-b outline-none"
          />

          <div className="flex justify-between items-center">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-[143px] h-14 bg-[#d64040] text-white rounded-sm"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-[#DB4444]">Forget Password?</p>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          {user && (
            <p className="text-green-600">
              Welcome back, <b>{user.username}</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
