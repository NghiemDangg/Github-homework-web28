import React, { useState, useEffect } from "react";
export default function SearchBar() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  const [searchInput, setSearchInput] = useState("");

  const searchedPosts = posts.filter(post => post.title.toLowerCase().includes(searchInput.toLowerCase()));
  
  return (
    <div>
      <input
        id="search-box"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </div>
  );
}
