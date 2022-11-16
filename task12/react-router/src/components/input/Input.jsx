import "./Input.css";

function Input({ input: { label, type = "text", register, validations} }) {
  const name = label.toLowerCase();
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          {...register(name, { ...validations })}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          {...register(name, { ...validations })}
        />
      )}
    </div>
  );
}

export default Input;
