import ItemLists from "./ItemLists";
import "./ItemContainer.css";

function ItemContainer() {
  return (
    <div className="main-item">
      <h1 className="main-title">Today's Tasks</h1>
      <ItemLists />
      <ItemLists />
      <ItemLists />
      <ItemLists />
    </div>
  );
}

export default ItemContainer;
