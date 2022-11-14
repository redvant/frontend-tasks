import { useState, useEffect } from "react";
import Post from "../../components/post/Post";
import DetailsModal from "../../components/detailsModal/DetailsModal";
import useModal from "../../hooks/useModal";
import SearchBar from "../../components/searchBar/SearchBar";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchPattern, setSearchPattern] = useState("");
  const { isShowing, toggle, modalData, setModalData } = useModal();

  useEffect(() => {
    const fetchPosts = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const onSearchChange = (event) => {
    setSearchPattern(event.target.value.toLowerCase())
  }

  const openDetails = (data) => {
    setModalData(data);
    toggle();
  };

  const deletePost = (id) => {
    const deletePostById = async (id) => {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
    };
    deletePostById(id);
    let newPosts = posts.filter((post) => post.id != id);
    setPosts(newPosts);
    toggle();
  };

  const filteredPosts = posts.filter((post) => post.title.includes(searchPattern) || post.body.includes(searchPattern))

  return (
    <div className="main-container">
      <div className="posts-header">
        <h2>Posts</h2>
        <SearchBar handleChange={onSearchChange}/>
      </div>
        <hr />
      <div className="posts-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Post key={post.id} post={post} handleClick={openDetails} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <DetailsModal
        isShowing={isShowing}
        hide={toggle}
        modalData={modalData}
        deletePost={deletePost}
      />
    </div>
  );
}

export default Posts;
