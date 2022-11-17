import { useState, useEffect } from "react";
import Post from "../../components/post/Post";
import DetailsModal from "../../components/detailsModal/DetailsModal";
import useModal from "../../hooks/useModal";
import useAlerts from "../../hooks/useAlerts";
import Alerts from "../../components/alerts/Alerts";
import SearchBar from "../../components/searchBar/SearchBar";
import fetch from 'cross-fetch'
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchPattern, setSearchPattern] = useState("");
  const { isShowing, toggle, modalData, setModalData } = useModal();
  const {alerts, addAlert} = useAlerts();

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
      if (response.status == 200){
        let newPosts = posts.filter((post) => post.id != id);
        setPosts(newPosts);
        addAlert({message: "Post deleted successfully", status: "success"})
      }else {
        addAlert({message: "There was an error deleting the post", status: "error"})
      }
    };
    deletePostById(id);
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
      <Alerts alerts={alerts} />
    </div>
  );
}

export default Posts;
