
function Input({label, type="text", register, validations}) {
  const name = label.toLowerCase();
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} {...register(name, {...validations})}/>
    </>
  )
}

export default Input