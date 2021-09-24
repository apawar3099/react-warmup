import React, {useEffect, useState} from "react";
import { useParams, Link} from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    
    async function getComments() {
      try {
        var response = await fetch(url);
        var json = await response.json();
        console.log("Comments" + json);

        setComments(json);

      } catch (error) {
        console.log("error", error);
      }
    }

    getComments();
  }, [comments]);

  return (
    <div className="list-group ">
      {comments.map((comment, index) => (
        <div key = {index} className="list-group-item list-group-item-action">
          <h5>{comment.name}</h5>
          <p>By : {comment.email}</p>
          <p><q>{comment.body}</q></p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
