import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix"></img>
      <form 
      className="text-white w-3/12 p-12 bg-black mt-36 absolute mx-auto 
        left-0 right-0 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4 m-1">{isSignInForm ? "Sign In":"Sign Up"}</h1>
        {!isSignInForm?<input
          type="text"
          placeholder="Full Name"
          className="py-4 px-2 m-2 w-full bg-gray-700"
        />:<></>}

        <input
          type="text"
          placeholder="Email Address"
          className="py-4 px-2 m-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-4 px-2 m-2 w-full bg-gray-700"
        />
                  
        <button className="py-4  m-2 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className="py-4 mx-3 cursor-pointer"
        onClick={toggleSignInForm}>{isSignInForm?"New to Netflix Sign Up now":"Already Registered? Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
