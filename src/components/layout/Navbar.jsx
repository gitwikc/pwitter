import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Navbar = () => {
  const [photo, setPhoto] = React.useState("");
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setPhoto(
        user?.photoURL ||
          "https://www.gravatar.com/avatar/3b37be7c3ac00a1237fe8d4252fd4540.jpg?size=240&d=https%3A%2F%2Fwww.artstation.com%2Fassets%2Fdefault_avatar.jpg"
      );
    });
  }, []);

  return (
    <div className="Navbar">
      <div className="py-1 px-4 flex gap-3 items-center bg-gray-600">
        <div className="flex-grow font-bold text-orange-300">
          <Link to="pweets">Pwitter</Link>
        </div>
        <div className="flex-shrink">
          <Link to="profile">
            <img
              className="w-12 h-12 rounded-md border border-gray-500"
              src={photo}
              alt="Your photo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
