import * as React from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(`User signed in --- ${user?.email} [${user?.displayName}]`);
      }
    });
  });

  const signinWithGooogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log("Google sign in successful!");
      })
      .then(() => {
        navigate("/pweets");
      });
  };

  return (
    <div className="Home">
      <button
        onClick={signinWithGooogle}
        className="px-3 py-2 bg-blue-500 text-white rounded transition-all duration-150 hover:bg-blue-600"
      >
        Sign in with google
      </button>
    </div>
  );
};

export default Home;
