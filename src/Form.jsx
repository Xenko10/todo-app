import Button from "@mui/material/Button";

export default function Form(props) {
  return (
    <form name='myForm' method='post' onSubmit={props.handleSubmit}>
      <input
        type='time'
        name='time'
        id='time'
        className={props.isTimeError ? "no-input-error" : ""}
        placeholder='Time'
        onChange={props.handleInput}
        value={props.values.time}
      />
      <textarea
        name='task'
        id='task'
        placeholder='Task'
        className={props.isTaskError ? "no-input-error" : ""}
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
