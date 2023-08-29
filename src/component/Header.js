import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-[100%] z-20 flex justify-between'>
        <img 
        className='w-44'
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix logo'/> 

        {
          user && (<><div className='rounded-[50%] bg-red-600 text-lg font-bold w-[3rem] h-[3rem]'>{user.displayName}</div>
          <button onClick={handleSignOut}>Logout</button>
          </>)
        }

    </div>
  )
}

export default Header