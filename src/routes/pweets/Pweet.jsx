import { doc, updateDoc } from "firebase/firestore";
import * as React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { auth, db } from "../../firebase";

const Pweet = ({ id, author, username, photo, content, createdAt, likes }) => {
  const [userLikedPost, setUserLikedPost] = React.useState(
    likes.indexOf(auth.currentUser.uid) !== -1
  );

  const toggleUserLike = () => {
    // Toggle user's like on this post
    const pweetDoc = doc(db, "pweets", id);
    updateDoc(pweetDoc, {
      likes: userLikedPost
        ? likes.filter((uid) => uid !== auth.currentUser.uid)
        : [...likes, auth.currentUser.uid],
    }).then(() => {
      setUserLikedPost((v) => !v);
    });
  };

  return (
    <div className="Pweet p-3 rounded bg-gray-800 flex flex-col gap-2">
      <div className="flex align-center gap-3">
        <div className="flex-shrink">
          <img className="w-16 h-16 rounded-full" src={photo} alt={author} />
        </div>
        <div className="flex-grow flex justify-center flex-col gap-1 px-2">
          <span className="font-semibold text-orange-500">{author}</span>
          <span className="text-sm text-orange-200">@{username}</span>
        </div>
      </div>
      <p className="font-normal text-white">{content}</p>
      <div className="text-xs text-gray-400">
        {createdAt.toDate().toUTCString()}
      </div>
      <div className="mt-2 flex gap-2 items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleUserLike();
          }}
        >
          <BsFillHeartFill
            color={userLikedPost ? "#fa1b4c" : "#ffffff"}
            size={14}
          />
        </button>
        <span>{likes.length}</span>
      </div>
    </div>
  );
};

export default Pweet;
