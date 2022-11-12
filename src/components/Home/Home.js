import React, { useEffect, useState } from "react";
import Post from "../../Post/Post";

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPost(data));
  }, []);
  return (
    <div>
      <h2>Total Post: {allPost.length}</h2>
      {allPost.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Home;
