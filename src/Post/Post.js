import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;
  let navigate = useNavigate();

  const showPost = (id) => {
    // const url = `post/${id}`;
    // navigate.push(url);
    // console.log(history.push);
    navigate(`post/${id}`);
  };

  //   const  = useNavigate();
  // navigate(`/Search?${queryString}`);

  return (
    <div>
      <h3>
        <strong>ID: {id}</strong> {title}
      </h3>
      <p>{body}</p>

      <button onClick={() => showPost(id)}>Show Details</button>
    </div>
  );
};

export default Post;
<h3>THis is post</h3>;
