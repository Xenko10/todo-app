import Button from "@mui/material/Button";

export default function Form({
  handleSubmit,
  handleInput,
  values,
  isTaskError,
  isTimeError,
}) {
  return (
    <form name='myForm' method='post' onSubmit={handleSubmit}>
      <input
        type='time'
        name='time'
        id='time'
        className={isTimeError ? "no-input-error" : null}
        placeholder='Time'
        onChange={handleInput}
        value={values.time}
      />
      <textarea
        name='task'
        id='task'
        placeholder='Task'
        className={isTaskError ? "no-input-error" : null}
        onChange={handleInput}
        value={values.task}
        maxLength='100'
      />
      <Button
        variant='contained'
        className='form-button'
        onClick={handleSubmit}>
        Add
      </Button>
    </form>
  );
}
