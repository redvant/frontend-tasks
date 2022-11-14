import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import Inputs from './Inputs'
import "./CreatePost.css";

function CreatePost() {
  const navigate = useNavigate();

  const submitData = (data) => {
    console.log("Sending data: ", data);
    const createPost = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log(response)
    };
    createPost();
    navigate("/posts");
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  const onError = (error) => {
    console.error("Error: ",{input: error[0], message: error[1].message});
  }

  return (
    <div className="create-container">
      <div className="create-title">
        <h2>Create Post</h2>
        <hr />
      </div>
      <Form
        actionText="Create"
        inputs={Inputs}
        submitData={submitData}
        handleError={onError}
        onCancel={onCancel}
      />
    </div>
  );
}

export default CreatePost;
