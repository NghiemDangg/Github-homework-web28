import React, { useState, useEffect } from "react";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      {
        posts.map((post)=>(
          <div className="card-item" key={post.id}>
          <h1 className="card-title" key={post.title}>{post.title}</h1>
          <div className="card-body" key={post.body}>{post.body}</div>
        </div>
        )
        )
      }
    </div>
  );
}
