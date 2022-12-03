import React, { useState, useEffect } from "react";

export default function Content() {
  const [posts, setPosts] = useState("posts");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [posts]);

  return <div>

  </div>;
}
