import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";

const Create = () => {
  const [content, setContent] = React.useState("");
  const navigate = useNavigate();
  const postPweet = (e) => {
    e.preventDefault();
    const {
      currentUser: { uid, displayName: author, email, photoURL: photo },
    } = auth;
    const createdAt = serverTimestamp();
    console.log(photo, author, createdAt);

    addDoc(collection(db, "pweets"), {
      author,
      username: email.substring(0, email.indexOf("@")),
      photo,
      content,
      createdAt,
      likes: [uid],
    }).then((newDoc) => {
      console.log("New pweet ID:", newDoc.id);
      setContent("");
      navigate("/pweets");
    });
  };

  return (
    <div className="Create">
      <form
        onSubmit={postPweet}
        className="mx-4 my-6 md:mx-32 md:my-20 flex flex-col gap-2 justify-center"
      >
        <textarea
          className="bg-gray-800 text-gray-200 font-mono"
          id="pweet_content"
          cols="30"
          rows="10"
          placeholder="Pweet something crazy!"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        {content.length > 0 && content.length <= 69 && (
          <button type="submit" className="py-3 bg-blue-500 text-white rounded">
            Post
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
