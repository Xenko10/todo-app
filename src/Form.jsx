import Button from "@mui/material/Button";

export default function Form({
  handleSubmit,
  handleInput,
  values,
  isTaskError,
  isTimeError,
}) {
  return (
    <form
      className='todo-form'
      name='myForm'
      method='post'
      onSubmit={handleSubmit}>
      <input
        type='time'
        name='time'
        id='time'
        className={isTimeError ? "input-time no-input-error" : "input-time"}
        placeholder='Time'
        onChange={handleInput}
        value={values.time}
      />
      <textarea
        name='task'
        id='task'
        placeholder='Task'
        className={isTaskError ? "input-text no-input-error" : "input-text"}
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
