import { useForm } from 'react-hook-form'
import Input from './Input';
import './Form.css'

function Form({addPerson}) {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = data => addPerson(data);

  return (
    <div className='form-wrapper'>
      <h4>Form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <Input label="Name" register={register} validations={{required: "Field is required"}}/>
          {errors.name && <span>{errors.name?.message}</span>}
          <Input label="Age" type="number" register={register} validations={{required: "Field is required", min: {value: 18, message: "Age allowed is 18 and up"}}}/>
          {errors.age?.type == "required" && <span>{errors.age?.message}</span>}
          {errors.age?.type == "min" && <span>{errors.age?.message}</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form