import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Item(props) {
  function handleClick() {
    props.deleteTask(props.id);
  }

  return (
    <div className='item'>
      <h2 className='item-time'>{props.time}</h2>
      <div className='delete-button'>
        <IconButton aria-label='delete' onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <h2 className='item-task'>{props.task}</h2>
      <hr />
    </div>
  );
}
