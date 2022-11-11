import { useState, useEffect } from "react";
import Post from '../../components/Post'
import './Posts.css'

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts-container">
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post}/>)
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}

export default Posts;
