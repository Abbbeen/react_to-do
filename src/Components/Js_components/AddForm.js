import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import "../CSS_components/AddForm.css";

function AddForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState();

  function submissionHandler(event) {
    event.preventDefault();
    const enteredData = {
      id: Math.random(),
      date: new Date(enteredDate),
      title: enteredTitle,
    };
    if (enteredTitle.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: "Error Detected",
        message: "Invalid Input Is Occured!!!",
      });
      return;
    }
    // console.log(enteredData);
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

  function onConfirm() {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorMessage sendConfirm={onConfirm} errorData={error} />}

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
    </div>
  );
}
export default AddForm;
