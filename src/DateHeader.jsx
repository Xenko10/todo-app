function DateHeader() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  return (
    <h1 className='date-header'>
      {date.getDate()} {monthNames[date.getMonth()]},{" "}
      {dayNames[date.getDay()].toLowerCase()}
    </h1>
  );
}

export default DateHeader;
