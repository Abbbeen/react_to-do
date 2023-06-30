import ItemLists from "./ItemLists";
import "./ItemContainer.css";

function ItemContainer(props) {
  return (
    <div className="main-item">
      <h1 className="main-title">Today's Tasks</h1>
      <ItemLists item={props.itemData[0]}/>
      <ItemLists  item={props.itemData[1]} />
      <ItemLists item={props.itemData[2]} />
      <ItemLists item={props.itemData[3]} />
    </div>
  );
}

export default ItemContainer;
