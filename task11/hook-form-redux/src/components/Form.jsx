import { useForm } from 'react-hook-form'
import Input from './Input';
import './Form.css'

function Form({addPerson, handleError}) {
  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onSubmit', reValidateMode: 'onSubmit'});
  const onSubmit = data => addPerson(data);
  const onError = errors => Object.entries(errors).forEach(error => handleError(error))

  return (
    <div className='form-wrapper'>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="inputs">
          <Input label="Name" register={register} validations={{required: "Field is required"}}/>
          <Input label="Age" type="number" register={register} validations={{required: "Field is required", min: {value: 18, message: "Age allowed is 18 and up"}}}/>
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form