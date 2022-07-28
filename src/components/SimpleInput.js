import React,{ useState} from 'react';

const SimpleInput = (props) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [fieldTouched, setFieldTouched] = useState(false)

  const enteredValueIsValid = enteredValue.trim() !== '' ;
  const inputIsInvalid = !enteredValueIsValid && fieldTouched;

  const handleChange = (event) => {
    setEnteredValue(event.target.value);
    
  }

  const inputBlurHandler = (event) => {
    setFieldTouched(true);
    }
    
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFieldTouched(true);
    if(!enteredValueIsValid){
      return
    }
    console.log(enteredValue);

    setEnteredValue('');
    setFieldTouched(false); 
  }
  
  const inputClasses = inputIsInvalid ? 'form-control invalid' :'form-control ' ;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses} >
        <label htmlFor='name' >Type Something..</label>
        <textarea style={{width: '600px', height: '200px', border: '1px solid #ccc'}} type='text' id='name' onChange={handleChange} onBlur={inputBlurHandler}/>
        {inputIsInvalid && <p className='error-text'>Field must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
