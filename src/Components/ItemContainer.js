import ItemLists from "./ItemLists";
import "./ItemContainer.css";

function ItemContainer(props) {
 
  return (
    <div className="main-item">
      <h1 className="main-title">Today's Tasks</h1>
      {
        props.itemData.map((items)=>{return <ItemLists key={items.id} item={items}/>})
      }
      
    </div>
  );
}

export default ItemContainer;
