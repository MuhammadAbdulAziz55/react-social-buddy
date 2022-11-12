import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentDetails from "../CommentDetails/CommentDetails";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const [comments, setComments] = useState([]);
  console.log(comments);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h2>This is post details: </h2>
      <h3> User Post: {post.id}</h3>
      <h5>Title: {post.title}</h5>
      <p>{post.body}</p>
      <p>Number of comments: {comments.length}</p>

      {comments.map((c) => (
        <CommentDetails comment={c} />
      ))}
    </div>
  );
};

export default PostDetails;
