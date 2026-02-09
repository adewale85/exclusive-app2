
// import SlideImage from "../../../assets/Side Image.svg";
// import {  useState } from "react";





// function Login() { 

//   const [user, setUser] = useState (null);
//   const [loading, setLoading] = useState (false)
//   const [error, setError] = useState ("")
//   const [email, setEmail] = useState ("")
//   const [password, setPassword] = useState ("")

  
//     const handleLogin = async() =>{
//       if (!email || !password){
//         setError('please enter your email and password')
//         return
//       }
//       setError("")
//       setLoading (true)
//       try{
//         const response = await fetch ("https://dummyjson.com/auth/login",{
//         method: 'POST',
//         headers:{
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify({
//           password: password,
//           username: email
//         })
// });

//         if (!response.ok){
//           throw new Error ("Invalid login")
//         }
//         const data = await response.json()
//         setUser(data)
        
//         localStorage.setItem("token", data.token)
//       }catch (error) {
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     };
    
  


  
//   return (
//     <div className="Wrapper h-[781px] flex items-center gap-20">
      
//       <div>
//         <img src={SlideImage} alt="Slide" />
//       </div>

      
//       <div className="space-y-8">
//         <header className="space-y-3">
//           <h1 className="text-[36px] font-medium leading-tight">Log in to Exclusive</h1>
//           <p className="font-poppins text-[16px]">Enter your details below</p>
//         </header>

//         <div className="space-y-8">
//           <input
//             type="text"
//             placeholder="Username"
//             value={email}
//             onChange={(e)=> setEmail(e.target.value)}
//             className="w-[370px] p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e)=> setPassword (e.target.value)}
//             className="w-[370px] p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
//           />

//           <div className="flex justify-between items-center">
//             <button onClick={handleLogin} className="w-[143px] h-14 bg-[#Db4444] text-white rounded-sm font-medium hover:bg-[#c33a3a] transition-all">
//               {loading? "Logging..." : "Login"}
//             </button>

//             <button className="text-[#Db4444] text-[16px] hover:underline transition-all">
//               Forget Password?
//             </button>
//             {error && <p className="text-red-500">{error}</p> }
//             {user && (
//               <p>Welcome back  </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login; 


import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login