import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { profilePhotoURL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutOption = ()=>{
    setShowLogout(!showLogout);
  }

  const handleOnBlur = ()=>{
    setShowLogout(false);
   
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, profileURL } = auth.currentUser;
        
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            profileURL: profileURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  

  return (
    <div className="sticky top-0 px-8 bg-[#000000bb] w-[100%] z-20 flex justify-between mb-4 h-[4rem]">
      <div className="font-bold text-3xl text-cyan-500 text-center py-3">MovieHub</div>

      {user && (
        <div className="flex mt-3 relative mr-6">
          <img src={profilePhotoURL}  alt='user' className="rounded-md w-[2.5rem] h-[2.5rem] cursor-pointer" onClick={handleLogoutOption} onBlur={handleOnBlur}>
          </img>
          {showLogout && (
            <div className="absolute w-[13rem] h-[18rem] bg-[#000000d6] top-11 right-0 rounded-md text-white align-middle border border-gray-400 justify-center content-center">
              <button onClick={handleSignOut} className="text-center m-auto w-[100%] mt-[15.8rem] border-solid border-[0.02rem] border-b-0 border-x-0 py-1  border-white">Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
