import { useState } from "react";
import "./AddForm.css";

function AddForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function submissionHandler(event) {
    event.preventDefault();
    const enteredData = {
      id: Math.random(),
      date: new Date(enteredDate),
      title: enteredTitle,
    };
    console.log(enteredData);
    props.formData(enteredData);
    setEnteredTitle("");
    setEnteredDate("");
  }
  function titleHandler(event) {
    setEnteredTitle((prevTitle) => {
      return event.target.value;
    });
  }

  function dateHandler(event) {
    setEnteredDate((prevTitle) => {
      return event.target.value;
    });
  }
  return (
    <form onSubmit={submissionHandler}>
      <h1 className="form-title">add new task</h1>
      <div className="new-form">
        <label>Item Title</label>
        <input type="text" value={enteredTitle} onChange={titleHandler} />
      </div>
      <div className="new-form">
        <label>Item Date</label>
        <input type="date" value={enteredDate} onChange={dateHandler} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
export default AddForm;
