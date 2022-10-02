import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const AuthRoute = ({ element }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("Hey there");
    // const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user == null) {
        console.log("Not signed in. Redirecting...");
        navigate("/");
      }
    });
  }, []);

  return <>{element}</>;
};

export default AuthRoute;
