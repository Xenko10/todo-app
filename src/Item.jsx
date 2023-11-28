import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Item({ time, deleteTask, id, task }) {
  function handleClick() {
    deleteTask(id);
  }

  return (
    <div className='item'>
      <h2 className='item-time'>{time}</h2>
      {time !== "now" && (
        <div className='delete-button'>
          <IconButton aria-label='delete' onClick={handleClick}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      <h2 className='item-task'>{task}</h2>
      <hr />
    </div>
  );
}
