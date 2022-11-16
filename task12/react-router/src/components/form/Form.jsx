import { useForm } from "react-hook-form";
import Input from "../input/Input";
import "./Form.css";

function Form({ submitData, handleError, actionText, inputs, onCancel }) {
  const {
    register,
    reset,
    handleSubmit,
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const onSubmit = (data) => {
    submitData(data);
    reset()
  }

  const onError = (errors) =>
    Object.entries(errors).forEach((error) => handleError(error));
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit, onError)} id={actionText}>
        <div className="inputs">
          {inputs.map((input, index) => (
            <Input
              key={index}
              input={{...input, register: register}}
            />
          ))}
        </div>
        <div className="buttons">
          <input type="submit" className="btn" value={actionText} />
          <button className="btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
