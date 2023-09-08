import Button from "@mui/material/Button";

function Form(props) {
  return (
    <form name='myForm' method='post' onSubmit={props.handleSubmit}>
      <input
        type='time'
        name='time'
        id='time'
        placeholder='Time'
        onChange={props.handleInput}
        value={props.values.time}
      />
      <textarea
        name='task'
        id='task'
        placeholder='Task'
        onChange={props.handleInput}
        value={props.values.task}
        maxLength='100'
      />
      <Button
        variant='contained'
        className='form-button'
        onClick={props.handleSubmit}>
        Add
      </Button>
    </form>
  );
}

export default Form;
