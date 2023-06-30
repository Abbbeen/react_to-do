import "./AddForm.css";


function AddForm() {
  return (
    <form>
      <h1 className="form-title">add new task</h1>
      <div className="new-form">
        <label>Item Title</label>
        <input type="text" />
      </div>
      <div className="new-form">
        <label>Item Date</label>
        <input type="date" />
      </div>
      <button>Add</button>
    </form>
  );
}
export default AddForm;