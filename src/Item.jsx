import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Item(props) {
  let deleteIcon;
  if (props.delete) {
    deleteIcon = (
      <div className='delete-button'>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  } else {
    deleteIcon = "";
  }
  return (
    <div className='item'>
      <h2 className='item-time'>{props.time}</h2>
      {deleteIcon}
      <h2 className='item-task'>{props.task}</h2>
      <hr />
    </div>
  );
}

export default Item;
