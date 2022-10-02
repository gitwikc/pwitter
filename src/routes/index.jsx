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
    <div className="Home grid gap-4 h-full my-24 place-items-center">
      <ul style={{ listStyleType: "initial" }}>
        <li>Sign in with Google to see "pweets"</li>
        <li>Click "+" to post your own pweet</li>
        <li>Click on your profile picture on top right to see your profile</li>
        <li>Click "Sign out" to sign out of your account</li>
        <li>
          To install PWA:
          <ul style={{ listStyleType: "initial", paddingLeft: "2rem" }}>
            <li>Click on three dots on top right in browser</li>
            <li>Click "Add to Home Screen"</li>
            <li>
              Come back to you home screen to find the app installed and open it
            </li>
          </ul>
        </li>
      </ul>
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
