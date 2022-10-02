import {
  collection,
  connectFirestoreEmulator,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import * as React from "react";
import { db } from "../../firebase";
import Pweet from "./Pweet";

const Pweets = () => {
  const [pweets, setPweets] = React.useState();
  const pweetsQuery = query(
    collection(db, "pweets"),
    orderBy("createdAt", "desc")
  );
  React.useEffect(() => {
    const unsubscribe = onSnapshot(pweetsQuery, (snapshot) => {
      setPweets(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsubscribe;
  }, []);
  return (
    <div
      style={{
        height: "90vh",
      }}
      className="Pweets px-4 mt-4 pb-16 overflow-y-scroll"
    >
      <div className="flex flex-col gap-2">
        {pweets ? (
          pweets.map((pweet) => <Pweet key={pweet.id} {...pweet} />)
        ) : (
          <div className="text-gray-400 text-xl">Hang on tight!</div>
        )}
      </div>
    </div>
  );
};

export default Pweets;
