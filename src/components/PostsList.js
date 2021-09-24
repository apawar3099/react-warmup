import React from "react";
import { Link} from "react-router-dom";

const PostsList = ({ posts }) => {
  return (
    <ol className="list-group ">
      {posts.map((post, index) => (
        <li key = {index} className="list-group-item list-group-item-action">
          <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
          <p>{post.body.substring(0,80)}.....</p>
        </li>
      ))}
    </ol>
  );
};

export default PostsList;
