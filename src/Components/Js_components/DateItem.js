import "../CSS_components/DateItem.css";

function DateItem(props) {
  const newDate = props.itemDate;
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = newDate.getFullYear();
  return (
    <div className="main-date">
      <div className="month">{month}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export default DateItem;
