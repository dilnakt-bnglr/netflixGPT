import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center ">
        <form className="w-3/12 bg-black opacity-80 p-10 h-[70%] text-white">
          <h2 className="text-white mb-3 text-xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 mb-2 bg-gray-700 text-white w-full rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 mb-2 bg-gray-700 text-white w-full rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 bg-gray-700 text-white w-full rounded-sm"
          />
          <button className="p-2 mt-8 bg-red-500 w-full rounded-sm cursor-pointer">
            Sign in
          </button>
          <div className="text-white flex justify-between mb-5">
            <div className="flex">
              <input type="checkbox" />
              <p className="ml-1">Remeber me</p>
            </div>
            <div>
              <p>Need Help?</p>
            </div>
          </div>
          <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered?Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
