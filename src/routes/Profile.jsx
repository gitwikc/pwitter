import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { auth } from "../firebase";

const Profile = () => {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  return (
    <div className="Profile p-6 flex flex-col gap-4 justify-center items-center w-5/6">
      <img
        className="w-24 h-24 rounded-full"
        src={user?.photoURL}
        alt={`${user?.displayName} photo`}
      />
      <div className="grid grid-cols-1">
        <div className="my-3 flex flex-col">
          <span className="font-bold">Name</span>
          <span>{user?.displayName}</span>
        </div>
        <div className="my-3 flex flex-col">
          <span className="font-bold">Email</span>
          <span>{user?.email}</span>
        </div>
        <div className="my-3 flex flex-col">
          <span className="font-bold">Email verification</span>
          <span>{user?.emailVerified ? "Verified" : "Not verified"}</span>
        </div>
        <div className="my-3 flex flex-col">
          <span className="font-bold">UID</span>
          <span>{user?.uid}</span>
        </div>
      </div>

      <button
        onClick={() => {
          auth.signOut().then(() => {
            console.log("Signed out current user");
          });
        }}
        className="px-3 py-2 bg-pink-500 text-white rounded"
      >
        Sign out
      </button>
    </div>
  );
};

export default Profile;
