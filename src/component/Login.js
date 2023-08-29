import React, { useState, useRef } from "react";
import Header from "./Header";
import netflixLogo from "../utils/images/netflixLogin.jpg";
import { checkValidData, checkValidName } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { updateProfile, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [validateMessage, setValidateMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setValidateMessage(null);
  };

  const handleButtonClick = () => {
    isSignInForm
      ? setValidateMessage(
          checkValidData(email.current.value, password.current.value)
        )
      : setValidateMessage(
          checkValidName(
            name.current.value,
            email.current.value,
            password.current.value
          )
        );

    if (validateMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            profileURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, password, displayName, profileURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  profileURL: profileURL,
                })
              );
            })
            .catch((error) => {
              setValidateMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidateMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="w-[100%] bg-neutral-900 h-[100%] relative">
      <Header />
      <img src={netflixLogo} alt="background" className="w-[100%] h-screen" />
      <form
        className="text-white p-12 bg-black mt-36 
        w-[30%] max-sm:w-[90%] max-md:w-[70%] max-lg:w-[50%] max-xl:w-[50%] mx-auto absolute
        left-0 right-0 top-5 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4 m-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-4 px-5 m-2 w-full bg-[#333] rounded-lg outline-none"
          />
        ) : (
          <></>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="py-4 px-5 m-2 w-full bg-[#333] rounded-lg outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-4 px-5 m-2 w-full bg-[#333] rounded-lg outline-none"
        />
        <div className="text-red-600 font-bold text-lg m-2">
          {validateMessage ? validateMessage : ""}
        </div>
        <button
          className="py-4  m-2 bg-red-700 w-full rounded-lg font-bold text-[1.1rem]"
          onClick={(e)=>{
            e.preventDefault()
            handleButtonClick()}}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mx-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
