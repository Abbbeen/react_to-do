import DateItem from "./DateItem";
import "./ItemLists.css";

function ItemLists(props) {
  return (
    <div className="item">
      <div className="item-part-1">
        <DateItem itemDate={props.item.date} />
        <div className="item-title">{props.item.title}</div>
      </div>
      <button className="item-part-2">Delete</button>
    </div>
  );
}

export default ItemLists;
