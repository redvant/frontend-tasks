import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import useAlerts from "../../hooks/useAlerts";
import Alerts from "../../components/alerts/Alerts";
import Inputs from './Inputs';
import "./CreatePost.css";

function CreatePost() {
  const navigate = useNavigate();
  const {alerts, addAlert} = useAlerts();

  const submitData = (data) => {
    const createPost = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (response.status == 201){
        addAlert({message: "Post created successfully", status: "success"})
      }else {
        addAlert({message: "There was an error creating the post", status: "error"})
      }
    };
    createPost();
  };

  const onCancel = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  const onError = (error) => {
    addAlert({message: `Error in ${error[0]}: ${error[1].message}`, status: "error"});
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
      <Alerts alerts={alerts} />
    </div>
  );
}

export default CreatePost;
