import "./NewItem.css";
import AddForm from "./AddForm";

function NewItem(props) {
  function formDataHandler(getData) {
    const gettingData = {
      ...getData,
    };
    //    console.log("from new item",gettingData);
    props.sendData(gettingData);
  }
  return (
    <div className="new-item">
      <AddForm formData={formDataHandler} />
    </div>
  );
}

export default NewItem;
