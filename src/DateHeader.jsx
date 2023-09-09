export default function DateHeader() {
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
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
      {date.getDate()} {monthNames[date.getMonth()]}, {dayNames[date.getDay()]}
    </h1>
  );
}
