import * as React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const CreatePost = () => {
  const navigate = useNavigate();

  return (
    auth.currentUser && (
      <div className="fixed bottom-3 right-3">
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("pweets/create");
          }}
          className="w-14 h-14 flex justify-center items-center rounded-lg bg-orange-500 text-white"
        >
          <BsPlusLg size={28} />
        </button>
      </div>
    )
  );
};

export default CreatePost;
