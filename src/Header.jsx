import EventNoteIcon from "@mui/icons-material/EventNote";

export default function Header() {
  return (
    <div className='header'>
      <h1 className='logo'>
        <EventNoteIcon fontSize='large' /> Todo app
      </h1>
    </div>
  );
}
